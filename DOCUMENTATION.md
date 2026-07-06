<img width="720" height="333" alt="image" src="https://github.com/user-attachments/assets/be2f4738-d4cc-4f7f-964a-b8e143eaa6b1" />


# Building a Cloud-Native Portfolio with Next.js, GitHub & AWS Amplify

## 📌 Current Situation / Challenge

Many portfolio projects fall short in demonstrating real-world engineering capabilities. Common issues include:

- Slow, manual deployment processes
- Basic hosting without scalability
- No automatic updates when code changes
- Static websites with limited functionality

These limitations fail to showcase practical cloud and DevOps skills.

## 🎯 Goal

The goal of this project is to build and deploy a modern, cloud-native portfolio website that:

- Demonstrates real-world cloud engineering practices
- Uses automated deployment pipelines
- Remains live and accessible to real users
- Serves as a continuously evolving showcase of skills

## 🧠 What We Will Learn

Through this project, I aim to strengthen my skills in:

- Modern web development using Next.js
- Deployment workflows with AWS Amplify
- CI/CD principles using GitHub
- Building cloud-native applications
- Applying Infrastructure as Code (IaC) concepts

## 🛠️ Project Tasks

**1. Create a Modern Portfolio Site**
- Build a responsive portfolio using Next.js
- Structure pages: Home, About, Projects, Contact
- Focus on performance and clean UI

**2. Configure AWS Amplify with CDK**
- Connect GitHub repository to Amplify
- Define infrastructure using AWS CDK
- Configure build and deployment settings

**3. Test and Deploy**
- Validate build process
- Ensure successful deployment
- Verify application accessibility

**4. Enable Continuous Deployment**
- Trigger deployments on every Git push
- Maintain automatic updates
- Ensure zero manual intervention

**Flow:**

1. Develop portfolio locally
2. Push code to GitHub
3. Amplify detects changes
4. Build and deploy automatically
5. Users access the live application

## Why This Project Matters

This project goes beyond a simple portfolio. It demonstrates:

- Real CI/CD pipeline implementation
- Cloud deployment using AWS services
- Practical DevOps workflow
- Production-ready application hosting

## Final Outcome

By the end of this project, I will have:

- A fully deployed portfolio website 🌐
- Automated CI/CD pipeline ⚡
- A real-world cloud project for my portfolio
  
  <img width="491" height="930" alt="image" src="https://github.com/user-attachments/assets/c312671a-21c4-4311-ab38-0199925f6216" />


---

## 1. Setting Up the Next.js Project

### 📁 Step 1: Create Project Folder

I started by creating a dedicated folder for the project:

```bash
mkdir AWS-Portfolio-Website
```

- `mkdir` stands for make directory
- This command creates a new folder named `AWS-Portfolio-Website`

This helps keep the project organized from the start.

### ⚙️ Step 2: Create Next.js Application

Next, I generated the application using:

```bash
npx create-next-app@latest portfolio --typescript --tailwind
```

**🔍 Breakdown of the Command**

- `npx` → Runs Node.js packages without installing them globally
- `create-next-app@latest` → Uses the latest version of the official Next.js setup tool
- `portfolio` → Name of the project folder
- `--typescript` → Enables TypeScript for better type safety
- `--tailwind` → Installs and configures Tailwind CSS for styling

**🛠️ Configuration Prompts Explained**

During setup, several prompts appeared to customize the project:

- **Which linter would you like to use?** → ESLint. ESLint checks code for errors and enforces consistent style. This is the standard choice.
- **Use React Compiler?** → No. This is an experimental feature for automatic optimization. Not required for this project.
- **Use a `src/` directory?** → Yes. Keeps the project structure clean by separating source code from config files.
- **Use App Router?** → Yes (Recommended). This is Next.js's modern routing system with better performance and flexibility.
- **Customize import alias (`@/*`)?** → Yes. Allows cleaner imports like `import Button from '@/components/Button'` instead of long relative paths.

**Outcome:** at this point, the project is fully initialized with a Next.js application ready to run, TypeScript configured, Tailwind CSS installed, and a clean, scalable project structure.

### Project Structure

After running the setup commands, Next.js automatically generated several folders and files that form the foundation of the application.

**`public/`** — stores static assets such as images, icons, PDFs, and other files that can be accessed directly by the browser without additional processing.

**`src/app/`** — the `src` (source) directory contains the application's source code, while `app` is the root of the App Router. This is where pages, layouts, and other application components are created.

**`layout.tsx`** — defines the application's root layout. It wraps every page in the project and is commonly used to include elements that remain consistent across the entire website, such as the navigation bar, footer, fonts, and global styles.

**`page.tsx`** — this is the application's homepage. Any content added to this file is displayed when users visit the root URL of the website.

**`package.json`** — contains the project's metadata, dependencies, scripts, and configuration settings. It tells Node.js which packages the application requires and provides commands for running, building, and deploying the project.

<img width="382" height="129" alt="image" src="https://github.com/user-attachments/assets/312ccca0-254a-4978-98a5-6a217589e040" />

<img width="388" height="117" alt="image" src="https://github.com/user-attachments/assets/d0f53f60-9f0d-4b2c-be25-0a387119b43e" />


### Running the Application

After creating the project, the next step is to start the local development server by running:

```bash
npm run dev
```

**Important:** before running the command, make sure you are inside the project directory. If you try to start the application from the wrong location, you'll receive an error because npm won't be able to find the project's `package.json` file.

To navigate into the project folder, run:

```bash
cd portfolio
```

I initially forgot to switch into the project directory and encountered an error. After navigating to the correct folder, I reran the command and the application started successfully.

**📋 Understanding the Output**

Once the development server starts, you'll see output similar to the following:

```
Local:    http://localhost:3000
Network:  http://192.168.x.x:3000
```

These addresses serve different purposes:

- **Local** — this is the localhost address that you can open in your web browser to preview the Next.js application on your own computer.
- **Network** — this is your computer's local network IP address. Devices connected to the same Wi-Fi or local network can use this address to access the application for testing.

When you open `http://localhost:3000` in your browser, you should see the default Next.js homepage, confirming that the project has been set up correctly.

> Tip: while developing your application, Next.js automatically reloads the page whenever you save changes to your code. This feature, known as Hot Reloading (Fast Refresh), allows you to see updates instantly without manually refreshing the browser.

<img width="1550" height="566" alt="image" src="https://github.com/user-attachments/assets/8f73cd84-0699-473c-913b-139ab7e3bdae" />

After successfully starting the development server, I opened `http://localhost:3000` in my web browser. The browser displayed the default Next.js landing page, confirming that the application had been created and configured correctly.

At this stage, the website is running locally, allowing me to begin customizing the portfolio and adding my own content.
<img width="720" height="475" alt="image" src="https://github.com/user-attachments/assets/dfc25664-7a18-46db-b0f9-ccded4923949" />

### Designing the Front-End Interface

With the Next.js application successfully running, the next step was to design an attractive and professional user interface for the portfolio website.

Frontend development is not my strongest skill, so I needed to find an efficient way to create a modern, responsive design without spending weeks learning advanced UI development. Rather than building every component from scratch, I decided to leverage generative AI as a development assistant.

After considering several AI tools, I chose Claude to help generate the initial frontend layout and components. Using AI allowed me to rapidly prototype a clean, professional-looking interface while still giving me full control over reviewing, modifying, and integrating the generated code into my project.

This approach significantly reduced development time and enabled me to focus on the primary objective of the project — building and deploying a cloud-native portfolio using AWS services. It also reflects a real-world software development practice, where engineers use AI tools to improve productivity, accelerate development, and automate repetitive tasks rather than replace technical understanding.

<img width="720" height="306" alt="image" src="https://github.com/user-attachments/assets/81a34657-e7aa-4f6c-a414-4ae79f72423b" />

---

## 2. Setting Up Version Control with GitHub

Now that the portfolio website has been created and is running locally, the next step is to store the project in a GitHub repository. Using GitHub allows us to keep track of changes, collaborate more effectively, and prepare the project for automated deployments with AWS Amplify.

### Step 1: Create a GitHub Repository

The first step is to create a new repository on GitHub. For this project, I named the repository `AWS-Portfolio-Website`.

To create the repository:

1. Sign in to your GitHub account.
2. Click the **+** icon in the top-right corner.
3. Select **New repository**.
4. Enter `AWS-Portfolio-Website` as the repository name.
5. Choose whether to make the repository Public or Private. I selected Public so the project can be viewed by recruiters and potential employers.
6. Leave "Initialize this repository with a README, .gitignore, and License" unchecked since the project already exists locally.
7. Click **Create repository**.

> Note: since the project was created locally using Next.js, GitHub provides the commands needed to connect the existing project to the new repository after it is created.

<img width="720" height="210" alt="image" src="https://github.com/user-attachments/assets/ca860765-c819-4269-82ca-f247eb42efcb" />

### Pushing the Project to GitHub

With the GitHub repository created, the next step is to connect the local Next.js project to GitHub and upload the source code. This allows the project to be version-controlled and prepares it for automated deployments with AWS Amplify.

**Step 2: Initialize Git**

If Git was not initialized automatically, navigate to the project directory and run:

```bash
git init
```

This command initializes a local Git repository, allowing Git to begin tracking changes made to the project.

**Step 3: Stage the Project Files**

Next, add all of the project files to Git's staging area:

```bash
git add .
```

The `.` tells Git to stage every file and folder within the current project directory.

**Step 4: Create the Initial Commit**

Once the files have been staged, create your first commit:

```bash
git commit -m "Initial commit"
```

A commit acts as a snapshot of the project at a specific point in time. Adding a meaningful commit message makes it easier to understand the project's history.

**Step 5: Connect the Local Repository to GitHub**

After creating the GitHub repository, GitHub provides a remote repository URL. Connect your local project to GitHub by running:

```bash
git remote add origin https://github.com/<your-username>/AWS-Portfolio-Website.git
```

Replace `<your-username>` with your GitHub username.

To verify that the remote repository has been added successfully, run:

```bash
git remote -v
```

This command displays the configured remote repositories for the project.

**Step 6: Push the Project to GitHub**

Rename the default branch to `main` (if required):

```bash
git branch -M main
```

Finally, upload the project to GitHub:

```bash
git push -u origin main
```

The `-u` flag sets the upstream branch, meaning future updates can be pushed simply by running `git push`.

**✅ Verifying the Upload**

After the push completes successfully, refresh the GitHub repository page. You should now see all of the project files, including folders such as `public`, `src`, `package.json`, `next.config.ts`, and `tsconfig.json`.

<img width="720" height="356" alt="image" src="https://github.com/user-attachments/assets/f771ec34-5425-4c1a-ba62-96be7b016028" />

This confirms that the local project has been successfully uploaded to GitHub and is now ready to be connected to AWS Amplify for automated deployments.

> Note: from this point forward, every change made locally can be committed and pushed to GitHub. Once AWS Amplify is connected to the repository, each push to the main branch will automatically trigger a new build and deployment of the portfolio website.

---

## 3. Setting Up the AWS CDK Infrastructure and AWS Secrets Manager

With the portfolio application successfully pushed to GitHub, the next step is to provision the cloud infrastructure that will host the application. Instead of manually configuring AWS resources through the Management Console, I used the AWS Cloud Development Kit (CDK) to define the infrastructure as code (IaC).

Using Infrastructure as Code makes cloud environments repeatable, version-controlled, and easier to maintain.

In addition, I configured AWS Secrets Manager to securely store sensitive information such as API keys and environment variables, rather than hardcoding them into the application's source code.

### Why Use AWS CDK?

AWS CDK allows developers to define cloud infrastructure using familiar programming languages instead of manually creating resources through the AWS Console. Some of the benefits include:

- Infrastructure can be version-controlled alongside the application code.
- Resources can be recreated consistently across different environments.
- Changes are easier to review, manage, and automate.
- Infrastructure becomes repeatable and scalable.

### Why Use AWS Secrets Manager?

Applications often require sensitive information such as API keys, database credentials, authentication tokens, and third-party service secrets. Instead of storing these values directly in the source code — which creates a significant security risk — AWS Secrets Manager stores them securely and allows authorized applications to retrieve them when needed.

This approach improves security while following cloud security best practices.

### Project Workflow

At a high level, the deployment architecture now looks like this:

```
Developer
     │
     ▼
Next.js Portfolio
     │
     ▼
GitHub Repository
     │
     ▼
AWS Amplify
     │
     ├──────────────► AWS CDK
     │                   │
     │                   ▼
     │            AWS Infrastructure
     │
     └──────────────► AWS Secrets Manager
                          │
                          ▼
                  Secure Environment Variables
```

### Creating a Separate Directory for the Infrastructure Code

When working on cloud projects, it is considered a best practice to keep the application code and the Infrastructure as Code (IaC) separate. This creates a cleaner project structure, makes the codebase easier to maintain, and allows the infrastructure to evolve independently from the application.

**Step 1: Navigate to the Project Directory**

```bash
cd ~/terraform-project-A/portfolio
```

This ensures that the infrastructure folder is created inside the main project directory.

**Step 2: Create the Infrastructure Directory**

```bash
mkdir portfolio-infrastructure
```

This directory will contain all of the Infrastructure as Code files used to provision and manage the AWS resources required by the application.

**Step 3: Navigate to the Infrastructure Directory**

```bash
cd portfolio-infrastructure
```

At this point, your project structure should look similar to the following:

```
terraform-project-A/portfolio/
│
├── portfolio/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
└── portfolio-infrastructure/
```

### 🚀 Initializing the AWS CDK Project

With the infrastructure directory in place, the next step is to initialize a new AWS CDK application. Run the following command:

```bash
cdk init app --language typescript
```

This command creates a new AWS CDK project using TypeScript. The CDK automatically generates the required folders, configuration files, and sample code needed to begin defining AWS infrastructure.

**Why TypeScript?** Since the portfolio application was built using TypeScript, using the same language for the infrastructure keeps the project consistent and allows both the application and infrastructure to share a familiar development experience.

<img width="720" height="230" alt="image" src="https://github.com/user-attachments/assets/8cc32ed5-0d00-4a8e-b06b-0c6c7b25f629" />

### Files and Folders Generated by AWS CDK

After running the `cdk init app --language typescript` command, AWS CDK automatically generates the files and folders needed to build and manage your cloud infrastructure.

- **`bin/`** — serves as the entry point for the AWS CDK application. It is responsible for launching the CDK app and telling AWS which infrastructure stack should be synthesized and deployed.
- **`lib/`** — contains the application's infrastructure definitions. Inside this folder, AWS CDK creates a file named `portfolio-infrastructure-stack.ts`. This file defines the infrastructure that AWS will provision — the blueprint for your cloud environment, where you specify the AWS resources (Amplify, IAM roles, Secrets Manager, etc.) that should be created.
- **`cdk.json`** — contains the configuration settings for the AWS CDK application. It tells the CDK CLI how to execute your application, including which command should be run when deploying or synthesizing the infrastructure.
- **`package.json`** — like the Next.js application, the CDK project also contains a `package.json` file listing the project's dependencies, scripts, and configuration settings required to build and deploy the infrastructure.
- **`tsconfig.json`** — defines the TypeScript compiler settings used by the CDK project. These settings control how the TypeScript code is compiled into JavaScript before deployment.

> Note: at this stage, AWS CDK has only generated the project template. In the next section, we begin modifying the infrastructure stack to define the AWS resources required to deploy the portfolio application.

### Installing the Required AWS CDK Packages

Before we can use AWS CDK to provision AWS Amplify resources, we need to install the required dependencies. Navigate to the `portfolio-infrastructure` directory and run:

```bash
npm install @aws-cdk/aws-amplify-alpha aws-cdk-lib constructs
```

**Package Breakdown**

- **`@aws-cdk/aws-amplify-alpha`** — provides experimental (alpha) AWS CDK constructs for AWS Amplify. It allows us to define and manage Amplify applications using Infrastructure as Code rather than configuring them manually through the AWS Management Console.
- **`aws-cdk-lib`** — the core AWS CDK library. It contains the constructs and resources required to define AWS infrastructure, including services such as IAM, S3, Lambda, CloudFormation, and Amplify.
- **`constructs`** — provides the foundational building blocks used by AWS CDK. Every AWS resource created with CDK is built upon these constructs, making them an essential dependency for any CDK application.

**✅ Result:** once the installation completes successfully, the required packages will be added to the project's `package.json` file and downloaded into the `node_modules` directory. The AWS CDK project is now ready to begin defining the infrastructure needed to deploy the portfolio website.

### Setting Up GitHub Access for Amplify

With the application and infrastructure projects ready, AWS Amplify needs to connect directly to the GitHub repository so it can automatically deploy the application whenever changes are pushed. This creates a Continuous Integration and Continuous Deployment (CI/CD) workflow, eliminating the need for manual deployments.

During each deployment, AWS Amplify automatically pulls the latest code from GitHub, provisions the required build environment using AWS CodeBuild, builds the Next.js application, and deploys the updated website to the Amplify hosting environment.

To allow AWS Amplify to access the GitHub repository, it must be granted permission to read the repository contents. One way to provide this access is by creating a GitHub Personal Access Token (PAT).

**Creating a GitHub Personal Access Token**

1. Sign in to your GitHub account.
2. Click your profile picture in the top-right corner and select **Settings**.
3. Navigate to **Developer settings**.
4. Select **Personal access tokens → Tokens (classic)**.
5. Click **Generate new token (classic)**.
6. Give the token a descriptive name.
7. Choose an expiration date that meets your security requirements.
8. Select the required repository permissions (at minimum, repo access for private repositories, or the appropriate read permissions for public repositories).
9. Click **Generate token**.
10. Copy the token immediately, as GitHub will only display it once.

> Important: treat your Personal Access Token like a password. Never commit it to your source code, share it publicly, or store it in your GitHub repository. If you believe the token has been exposed, revoke it immediately and generate a new one.

**Why Is the Personal Access Token Needed?** It allows AWS Amplify to securely authenticate with GitHub so it can access the source code repository, detect new commits and code changes, automatically trigger new builds, and deploy the latest version of the application without manual intervention.

With the token created, the next step is to store it securely in AWS Secrets Manager, where it can be accessed by the AWS CDK infrastructure without exposing sensitive credentials in the source code.

### Configuring the GitHub Token with AWS Secrets Manager

After generating the GitHub Personal Access Token, the next step is to store it securely in AWS Secrets Manager. Rather than hardcoding sensitive credentials into the application or infrastructure code, AWS Secrets Manager provides a secure way to store, manage, and retrieve secrets when they are needed.

**Step 1: Configure the AWS CLI**

```bash
aws configure
```

You will be prompted to enter your AWS Access Key ID, AWS Secret Access Key, Default AWS Region, and Default Output Format. Once configured, the AWS CLI can securely communicate with your AWS account.

**Step 2: Create a Secret in AWS Secrets Manager**

```bash
aws secretsmanager create-secret \
  --name github-token \
  --description "GitHub Personal Access Token for AWS Amplify" \
  --secret-string "YOUR_GITHUB_PERSONAL_ACCESS_TOKEN"
```

Replace `YOUR_GITHUB_PERSONAL_ACCESS_TOKEN` with the token generated from GitHub.

> Important: never include your actual Personal Access Token in screenshots, blog posts, source code, or public repositories. Treat it like a password.

**Successful Output:** if the command completes successfully, AWS will return a response similar to:

```json
{
  "ARN": "arn:aws:secretsmanager:region:account-id:secret:github-token-xxxxx",
  "Name": "github-token",
  "VersionId": "xxxxxxxxxxxxxxxxxxxxxxxx"
}
```

The response contains the **ARN** (the unique identifier for the secret within your AWS account), the **Name** assigned to the secret, and the **VersionId** (the unique identifier for the current version of the stored secret).

**Step 3: Verify the Secret in AWS**

1. Sign in to the AWS Management Console.
2. Navigate to AWS Secrets Manager.
3. Select Secrets from the navigation pane.
4. Locate the secret named `github-token`.

**Why Store the Token in AWS Secrets Manager?** It keeps secrets out of the source code, reduces the risk of accidentally exposing credentials, enables secure access from AWS services such as AWS CDK and AWS Amplify, supports centralized management and rotation of secrets, and follows AWS security best practices for handling sensitive information.

With the GitHub token securely stored, the infrastructure can now retrieve it when provisioning AWS Amplify, allowing the service to securely connect to the GitHub repository and automate future deployments.

### Define CDK Infrastructure as Code

The next step was to define the AWS infrastructure using CDK. This CDK stack creates an AWS Amplify application that connects directly to my GitHub repository and automatically deploys the portfolio website whenever new code is pushed to the main branch.

This infrastructure code handles the following:

- Connects AWS Amplify to the GitHub repository
- Automatically triggers a build when code is pushed
- Uses AWS CodeBuild to run the build commands
- Builds the Next.js portfolio application
- Deploys the final build files to Amplify Hosting
- Uses caching to speed up future builds by reusing previously downloaded dependencies and build artifacts

AWS Amplify uses a managed build environment powered by AWS CodeBuild. This means the application is built in a clean environment, the required dependencies are installed, the Next.js build command is executed, and the final output is deployed to Amplify hosting.

Below is the CDK code used to define the Amplify application and deployment workflow:

```ts
import * as cdk from 'aws-cdk-lib';
// Imports the main AWS CDK library - gives access to core CDK features like Stack, SecretValue, etc.

import * as amplify from '@aws-cdk/aws-amplify-alpha';
// Imports AWS Amplify constructs - provides the tools to create Amplify apps and configurations

import * as codebuild from 'aws-cdk-lib/aws-codebuild';
// Imports AWS CodeBuild library - used to define build specifications for compiling the app

import { Construct } from 'constructs';
// Imports Construct class - the base class for all CDK constructs (building blocks)

export class PortfolioInfrastructureStack extends cdk.Stack {
// Defines the infrastructure stack class - extends (inherits from) the base CDK Stack class

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
  // Constructor function that runs when the stack is created
  // - scope: parent construct that contains this stack
  // - id: unique identifier for this stack
  // - props: optional configuration properties

    super(scope, id, props);
    // Calls the parent Stack class constructor to initialize the stack

    // Amplify Application
    const amplifyApp = new amplify.App(this, 'PortfolioApplication', {
    // Creates a new Amplify App resource
    // - 'this' refers to the current stack
    // - 'PortfolioApplication' is the logical ID in CloudFormation

      appName: 'Portfolio',
      // Sets the display name for the Amplify app in the AWS console

      // Connect to my github repo
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
      // Configures GitHub as the source code provider

        owner: 'abdiarale86',
        // My GitHub username

        repository: 'AWS-Portfolio-Website',
        // The name of my GitHub repository

        oauthToken: cdk.SecretValue.secretsManager('github-token')
        // Retrieves the GitHub personal access token from AWS Secrets Manager
        // This token allows Amplify to access my private repository
      }),

      // Build Specification
      buildSpec: codebuild.BuildSpec.fromObjectToYaml({
      // Defines the build instructions - converts JavaScript object to YAML format

        version: '1.0',
        // Specifies the Amplify build specification version

        frontend: {
        // Section for frontend build configuration

          phases: {
          // Defines different phases of the build process

            preBuild: {
            // Commands to run BEFORE building the app

              commands: [
                'echo "starting this build"',
                // Prints a message to the build log

                'npm install'
                // Installs all Node.js dependencies listed in package.json
              ],
            },

            build: {
            // Commands to run during the BUILD phase

              commands: [
                'echo "building our nextjs app..."',
                // Prints a message to the build log

                'npm run build',
                // Runs the standard Next.js build

                'echo "build is completed"'
                // Prints completion message to the build log
              ],
            },
          },

          artifacts: {
          // Specifies which files to deploy after building

            baseDirectory: '.next',
            // Next.js SSR build output lives in .next - Amplify serves it via SSR compute

            files: ['**/*'],
            // Pattern matching all files and subdirectories to include
          },

          cache: {
          // Configures caching to speed up future builds

            paths: [
              'node_modules/**/*',
              // Caches all installed npm packages

              '.next/cache/**/*'
              // Caches Next.js build cache for faster rebuilds
            ]
          }
        }
      }),

      platform: amplify.Platform.WEB_COMPUTE,
      // Enables Amplify's SSR compute hosting for Next.js instead of plain static hosting
    });

    const mainBranch = amplifyApp.addBranch('main', {
    // Adds the 'main' branch to the Amplify app for deployment

      autoBuild: true
      // Enables automatic builds when code is pushed to the main branch
    });
  }
}
```

> Note: the build spec originally used `cd portfolio` in `preBuild` and `npm run build-and-export` with `baseDirectory: 'portfolio/out'`, targeting a static export. The stack was later updated to build directly with `npm run build` and deploy from `.next` with `platform: WEB_COMPUTE`, since the app renders server-side rather than exporting to static HTML — see "Troubleshooting" below.

### Test and Deploy the Infrastructure

With the AWS CDK stack complete, the final step is to deploy the infrastructure to AWS. This process provisions the required cloud resources, including the AWS Amplify application, and connects it to the GitHub repository so that future code changes are deployed automatically.

**Step 1: Navigate to the Infrastructure Directory**

```bash
cd portfolio-infrastructure
```

**Step 2: Bootstrap the AWS Environment**

Before deploying a CDK application for the first time, the AWS environment must be bootstrapped:

```bash
cdk bootstrap
```

The `cdk bootstrap` command prepares your AWS account and Region for CDK deployments by creating the resources required to deploy infrastructure, such as an Amazon S3 bucket for storing deployment assets and the necessary IAM roles used by AWS CDK.

> Note: bootstrapping only needs to be performed once for each AWS account and Region.

**Deployment Results:** after a successful deployment, the terminal displays the stack outputs along with the status of the deployment. You should also see the new AWS Amplify application in the AWS Management Console, confirming that the infrastructure has been successfully created.

### Troubleshooting: AWS Amplify Migration Required

During the deployment process, I encountered an issue in the AWS Amplify Console indicating that the application required a migration before it could continue.

**🚨 Issue:** when opening the Amplify application, I was presented with a message stating that an update or migration was required before the application could be managed using the latest Amplify experience.

To resolve it, I clicked on the "Portfolio" app and was presented with a screen to "start migration."

**Completing the Migration:** as part of the migration process, I was required to:

1. Authenticate my GitHub account.
2. Grant AWS Amplify permission to access my repositories.
3. Select the correct GitHub repository (`AWS-Portfolio-Website`) that contains the portfolio application.
4. Confirm the repository and branch configuration before completing the migration.

Once these steps were completed, AWS Amplify successfully migrated the application and established the connection to the GitHub repository. From this point onward, every push to the main branch automatically triggers a new build and deployment.

### Running the Initial Build

After the migration was complete, I returned to the AWS Amplify application in the AWS Management Console. Since the repository had been successfully connected, I was now able to select **Run job** to trigger the initial build and deployment of the application.

During the build, AWS Amplify:

1. Retrieved the latest source code from the `AWS-Portfolio-Website` GitHub repository.
2. Started an AWS CodeBuild environment.
3. Installed the project's dependencies.
4. Executed the build commands defined in the build specification.
5. Generated the production build of the Next.js application.
6. Deployed the application to AWS Amplify Hosting.

Throughout the process, Amplify provided real-time build logs, making it easy to monitor each stage of the deployment and identify any potential errors.

**Successful Deployment:** once the build completed successfully, AWS Amplify published the portfolio website and generated a public URL where the application could be accessed. At this point, the CI/CD pipeline was fully operational — any future commits pushed to the main branch of the GitHub repository automatically trigger a new build and deployment, ensuring the live website always reflects the latest version of the code.

### Troubleshooting: 404 After Enabling a Custom Domain

Even with a successful build and a verified custom domain, the site initially returned a 404 on every request. Checking the response headers directly (`curl -D -`) showed the request was being served straight from S3 (`server: AmazonS3`) rather than by the app — a sign the request never reached the Next.js runtime at all.

The root cause: the Amplify `App` construct defaults to `Platform.WEB` (static hosting), which just uploads the `.next` build output to S3 as raw files. Since this app renders server-side rather than exporting purely static HTML, there's no file sitting at the site root, so every request 404s.

The fix was to set `platform: amplify.Platform.WEB_COMPUTE` on the `App` construct (shown in the CDK code above), redeploy the CDK stack with `cdk deploy`, and trigger a fresh build so the branch redeployed under the new platform. After that, the custom domain served the app correctly with `HTTP/2 200` and Next.js response headers (`x-powered-by: Next.js`, `x-nextjs-prerender`).

---

## 4. Configuring a Custom Domain with Amazon Route 53

The portfolio website was successfully deployed using AWS Amplify and was accessible through the default Amplify domain. However, for a more professional online presence, I wanted to use my own custom domain.

For this project, I purchased my domain through Namecheap and configured Amazon Route 53 to manage the domain's DNS records before connecting it to AWS Amplify.

Using a custom domain makes the portfolio easier to remember and gives it a more professional appearance for recruiters and potential employers.

### Project Architecture

```
Namecheap (Domain Registrar)
            │
            ▼
Amazon Route 53 (DNS Hosting)
            │
            ▼
AWS Amplify
            │
            ▼
Portfolio Website
```

I like to explain the distinction because many beginners confuse these concepts:

- **Namecheap** → Domain Registrar (where you purchased the domain)
- **Amazon Route 53** → DNS Provider (manages where the domain points)
- **AWS Amplify** → Hosting Platform (hosts your website)

Think of it this way: Namecheap owns the address, Route 53 tells visitors where to go, and AWS Amplify hosts the website.

### Step 1: Purchase a Domain

I purchased my custom domain, `abdiarale.com`, through Namecheap. Although the domain is registered with Namecheap, I wanted AWS to manage the DNS records using Amazon Route 53, making it easier to integrate with other AWS services.

At this stage, the domain is configured to use Namecheap BasicDNS, meaning Namecheap is currently responsible for managing the domain's DNS records. The next step is to transfer DNS management to Amazon Route 53, which allows AWS Amplify to automatically configure the DNS records and SSL certificate required for the portfolio website.

### Step 2: Create a Hosted Zone

Inside the AWS Management Console:

1. Navigate to Amazon Route 53.
2. Select **Hosted Zones**.
3. Click **Create Hosted Zone**.
4. Enter your domain name: `abdiarale.com`.

After the hosted zone is created, Route 53 automatically generates four authoritative name servers. These name servers are what will allow AWS to manage all DNS records for the domain.

### Step 3: Copy the Route 53 Name Servers

After the hosted zone is created, you'll see two records: **NS** and **SOA**. Open the NS record — you'll see four AWS nameservers similar to:

```
ns-123.awsdns-45.com.
ns-456.awsdns-78.net.
ns-789.awsdns-12.org.
ns-321.awsdns-90.co.uk.
```

Copy those four values.

### Step 4: Update Namecheap's Nameservers

Go back to Namecheap and scroll to the Nameservers section. Currently it says "Namecheap BasicDNS." Change it to **Custom DNS**. Four boxes will appear — paste the four AWS Route 53 nameservers into those boxes, then save.

### Step 5: Wait for DNS Propagation

DNS propagation usually takes 5–30 minutes, sometimes a few hours, and at most 48 hours.

**Option 1 (Recommended): Check in AWS Amplify.** Since our goal is to connect the domain to Amplify, we don't have to wait blindly:

1. Go to AWS Amplify.
2. Open your application.
3. Go to **Domain management**.
4. Click **Add domain** (or open the existing domain if you've already added it).

Amplify will show the status, such as "Pending verification," "Waiting for DNS," "Available," or "SSL certificate issued." Once you see **Available**, your domain is ready.

**Option 2: Check Route 53 with a DNS Checker.** Use an online DNS propagation checker such as `dnschecker.org`. Enter `abdiarale.com`, select NS from the dropdown, and if the results show your AWS Route 53 nameservers from multiple locations around the world, the nameserver change has propagated successfully.

Once propagation finishes, Route 53 becomes responsible for your DNS.

### Connecting the Custom Domain to AWS Amplify

With the domain now managed by Amazon Route 53, the final step is to associate it with the AWS Amplify application.

AWS Amplify integrates directly with Route 53, making it possible to configure the custom domain without manually creating DNS records. During the setup process, Amplify automatically creates the required DNS records, validates domain ownership, and provisions an SSL/TLS certificate through AWS Certificate Manager (ACM).

**Add the Custom Domain:**

1. In the AWS Amplify Console, navigate to **Hosting → Custom domains**.
2. Click **Add domain**.
3. Since the domain `abdiarale.com` is already managed by Amazon Route 53, AWS Amplify automatically detects the hosted zone.
4. Select `abdiarale.com` and click **Configure domain**.
5. Configure the domain so that both `https://abdiarale.com` and `https://www.abdiarale.com` point to the main branch of the application.
6. Leave **Amplify managed certificate** selected to allow AWS Amplify to automatically provision and manage the SSL/TLS certificate.
7. Enable the option to set up a redirect from `https://abdiarale.com` to `https://www.abdiarale.com` so that visitors are redirected to a single, consistent URL.
8. Finally, click **Add domain** to begin the domain verification and configuration process.

After submitting the configuration, AWS Amplify automatically creates the required DNS records in Amazon Route 53, requests an SSL certificate from AWS Certificate Manager (ACM), and verifies ownership of the domain. Amplify will then show status messages like "Pending verification," "Creating records," and "Requesting certificate," before eventually changing to "Available" and "Certificate issued."

Once these steps are complete, the portfolio website becomes securely accessible via `https://www.abdiarale.com` with HTTPS enabled.

---

## Project Complete

The portfolio website has now been successfully deployed and is publicly accessible using my custom domain: **abdiarale.com**.

By combining modern web development with AWS cloud services, I created a fully automated deployment pipeline that allows changes to be published with a simple Git push.

The completed architecture looks like this:

```
Developer
    │
    ▼
Next.js Portfolio
    │
    ▼
GitHub Repository
    │
    ▼
AWS Amplify
    │
    ▼
AWS CodeBuild
    │
    ▼
Route 53 + SSL Certificate
    │
    ▼
https://abdiarale.com
```

Every time I push changes to the main branch, AWS Amplify automatically detects the latest commit from GitHub, starts an AWS CodeBuild job, builds the Next.js application, deploys the updated website, and publishes the latest version through my custom domain.

This provides a fully automated Continuous Integration and Continuous Deployment (CI/CD) workflow without requiring any manual deployment steps.

## Skills Demonstrated

This project demonstrates practical experience with several modern cloud and DevOps technologies, including:

- Next.js
- TypeScript
- Git & GitHub
- AWS Amplify
- AWS CDK
- Infrastructure as Code (IaC)
- AWS CodeBuild
- AWS Secrets Manager
- Amazon Route 53
- AWS Certificate Manager (ACM)
- CI/CD pipelines
- Custom domain configuration
- HTTPS and SSL certificate management
- Production debugging directly from HTTP response headers

## Final Thoughts

This project reinforced the value of Infrastructure as Code and CI/CD automation. Instead of manually uploading website files after every change, the deployment process is now fully automated. Any updates pushed to GitHub are automatically built and deployed by AWS Amplify, ensuring the live website always stays in sync with the latest code.

**Final architecture diagram showing the complete flow:**

```
Next.js
    │
    ▼
GitHub
    │
    ▼
AWS Amplify
    │
    ▼
AWS CodeBuild
    │
    ▼
Route 53
    │
    ▼
HTTPS (ACM)
    │
    ▼
abdiarale.com
```
