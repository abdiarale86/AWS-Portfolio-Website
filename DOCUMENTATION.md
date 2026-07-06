# Building a Cloud-Native Portfolio: Full Walkthrough

This is the step-by-step story of how this site was built and deployed: a Next.js frontend, an AWS CDK-defined Amplify app, and a custom domain on Route 53 — all wired to deploy automatically on every push to `main`.

## Part 1: Next.js Setup

Bootstrapped with:

```bash
npx create-next-app@latest portfolio --typescript --tailwind
```

Key choices made during setup:
- TypeScript for type safety
- Tailwind CSS for styling
- ESLint for code quality
- App Router (`src/app/`)
- A `src/` directory structure

Ran locally with:

```bash
npm run dev
```

which serves the site at `localhost:3000` with hot reload on save.

## Part 2: Version Control

Pushed to GitHub with the standard sequence:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin git@github.com:abdiarale86/AWS-Portfolio-Website.git
git push -u origin main
```

Having the repo on GitHub is what lets Amplify build automatically on every push later.

## Part 3: AWS CDK Infrastructure

Infrastructure lives in its own directory, `portfolio-infrastructure/`, separate from the app code — so app changes and infra changes don't get tangled together.

```bash
cdk init app --language typescript
```

This generates `bin/` (the CDK app entry point) and `lib/` (the stack definition), plus the usual `cdk.json` / `tsconfig.json`.

Dependencies added:

```bash
npm install @aws-cdk/aws-amplify-alpha aws-cdk-lib constructs
```

## Part 4: Secrets Management

Amplify needs a GitHub token to pull this repo on every build. That token is never committed to source — it's stored in Secrets Manager and referenced by name in the CDK stack:

```bash
aws secretsmanager create-secret --name github-token --secret-string "<token>"
```

In [`lib/portfolio-infrastructure-stack.ts`](portfolio-infrastructure/lib/portfolio-infrastructure-stack.ts), the Amplify `App` construct pulls it in with:

```ts
oauthToken: cdk.SecretValue.secretsManager('github-token')
```

## Part 5: The Amplify App Stack

The CDK stack defines:
- An `amplify.App` connected to `abdiarale86/AWS-Portfolio-Website` on GitHub
- A build spec (converted to `amplify.yml` under the hood) with `preBuild` (`npm install`) and `build` (`npm run build`) phases
- Artifacts pulled from `.next` — the standard Next.js build output
- Caching for `node_modules` and `.next/cache` so repeat builds are faster
- A `main` branch with `autoBuild: true`, so every push triggers a build

**A platform gotcha worth calling out:** the Amplify `App` construct defaults to `Platform.WEB` (plain static hosting), which just uploads the `.next` folder to S3 as raw files. For a server-rendered Next.js app that produces a 404 on every route, because there's no static `index.html` sitting at the root of that folder — the actual HTML is rendered on demand. The fix is one line:

```ts
platform: amplify.Platform.WEB_COMPUTE,
```

`WEB_COMPUTE` runs the app through Amplify's SSR compute layer instead of treating it as static assets. This was diagnosed directly from the CloudFront response headers in production (`server: AmazonS3` on every request — a dead giveaway the request never reached the app at all).

Deploying the stack:

```bash
cdk bootstrap   # one-time, sets up the S3 bucket/IAM roles CDK needs
cdk deploy
```

## Part 6: Custom Domain

Domain purchased through Namecheap; DNS delegated to Route 53:

1. Created a hosted zone in Route 53 for `abdiarale.com`
2. Copied the four Route 53 nameservers
3. Pointed Namecheap's nameserver config at those four (Custom DNS instead of BasicDNS)
4. Waited for propagation

Then, in Amplify's domain management:
- Added `abdiarale.com` as a custom domain
- Configured both the root domain and the `www` subdomain
- Let Amplify manage the SSL certificate through ACM
- Set the root domain to redirect to `www`

Route 53 ends up with:
- An **A/Alias** record at the apex (`abdiarale.com`) pointing at the CloudFront distribution
- A **CNAME** for `www.abdiarale.com` pointing at the same distribution

## Final Architecture

```
Developer → git push → GitHub → AWS Amplify (CDK-managed, WEB_COMPUTE)
          → CodeBuild → Route 53 + CloudFront (SSL) → abdiarale.com
```

Every push to `main` triggers a build and deploy with no manual steps.

## Skills Demonstrated

Next.js & TypeScript · Git · AWS Amplify Hosting (SSR compute) · AWS CDK (IaC) · AWS CodeBuild · AWS Secrets Manager · Amazon Route 53 · SSL/TLS certificate management · production debugging from HTTP response headers
