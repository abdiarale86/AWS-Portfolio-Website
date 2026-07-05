"use client";

const heroStats = [
  { icon: "☁️", value: "AWS", label: "SAA-C03 & Terraform Certified" },
  { icon: "⚡", value: "80%", label: "Less Infra Maintenance" },
  { icon: "🚀", value: "70%", label: "Faster CI/CD Deployments" },
];

const quickInfo = [
  { label: "Experience", value: "3+ Years" },
  { label: "Focus", value: "Terraform, Kubernetes, CI/CD" },
  { label: "Specialization", value: "AWS" },
];

const experience = [
  {
    date: "Aug 2025 – Jun 2026",
    role: "AWS Cloud Engineer",
    company: "Octelligence Inc. · Ottawa, ON",
    bullets: [
      "Provisioned and maintained AWS cloud infrastructure for a SaaS platform serving private companies and law firms using Terraform modules and Kubernetes on EKS to keep the platform available and audit-ready for clients.",
      "Built GitHub Actions and ArgoCD CI/CD pipelines to automatically build, test, and deploy application updates to AWS, reducing deployment time by eliminating manual steps and giving the team faster release cycles.",
      "Managed containerized workloads using Docker and Kubernetes on Amazon EKS by writing Helm charts to deploy and scale microservices, improving uptime and making it easier to recover from failures.",
      "Wrote Terraform modules to automate the provisioning of AWS environments so that new infrastructure could be created consistently and quickly, reducing the time engineers spent on manual cloud setup tasks.",
      "Reduced AWS cloud costs by reviewing EC2 instance sizes, setting up auto-scaling, and removing unused resources so the company only paid for what it actually needed.",
      "Secured cloud environments by setting up IAM roles, VPC security groups, and HashiCorp Vault for secrets management to make sure only the right people and services had access to sensitive infrastructure.",
    ],
  },
  {
    date: "Jul 2023 – Mar 2025",
    role: "DevOps Engineer",
    company: "Canada Border Services Agency (CBSA) · Toronto, ON",
    bullets: [
      "Designed and built AWS cloud infrastructure including multi-account Landing Zones for Canada's Border Services Agency by using Terraform to provision environments across dev, staging, production, and disaster recovery.",
      "Wrote Terraform modules from scratch to provision scalable AWS environments across multiple availability zones, which reduced the time the team spent on infrastructure maintenance by 80%.",
      "Built GitHub Actions CI/CD pipelines to automate application builds, testing, and deployments from development to production, cutting manual deployment work by 70%.",
      "Managed containerized workloads on Amazon EKS by writing Helm charts and Kubernetes manifests to deploy and scale microservices, keeping government production systems available.",
      "Monitored infrastructure performance using Prometheus and Grafana by setting up dashboards and alert rules so the team could detect and fix problems before they affected users.",
      "Lowered AWS cloud costs by rightsizing EC2 instances, adding auto-scaling policies, and cleaning up unused resources to cut the monthly infrastructure bill.",
    ],
  },
  {
    date: "Sep 2023 – Feb 2024",
    role: "AWS Cloud Engineer",
    company: "Softchoice · Toronto, ON",
    bullets: [
      "Worked with AWS specialists and sales teams to design cloud migration solutions for clients by turning their technical requirements into scalable AWS architectures that matched their business goals.",
      "Automated AWS infrastructure for client environments by writing Terraform modules and Bash scripts to provision and configure cloud resources, reducing manual setup time and speeding up deployments.",
      "Integrated Trivy, SonarQube, and HashiCorp Vault into GitHub Actions pipelines to automatically scan containers, analyze code, and manage secrets before anything reached production.",
      "Delivered 40+ hours of training and written documentation to client teams so they could manage their own production deployments independently after handoff, reducing the need for ongoing support.",
    ],
  },
];

const projects = [
  {
    name: "Nexacore IAM Security Project",
    description:
      "Implemented secure IAM infrastructure for a startup that was sharing AWS root account credentials, establishing role-based access control (RBAC) and eliminating critical security vulnerabilities.",
    tech: ["Terraform", "AWS IAM", "CloudTrail"],
    href: "https://github.com/abdiarale86/Nexacore-IAM-Security-Project",
  },
  {
    name: "ServiceHub AWS Terraform",
    description:
      "Reusable Terraform framework for deploying ServiceHub on AWS across multiple environments, with modular design, workspace isolation, encrypted private subnets, multi-AZ high availability, auto-scaling, and audit logging.",
    tech: ["Terraform", "AWS", "Shell"],
    href: "https://github.com/abdiarale86/Servicehub_AWS_terraform",
  },
  {
    name: "AWS Portfolio Website",
    description:
      "This personal portfolio site, built to showcase cloud engineering experience, projects, and certifications, deployed live on AWS.",
    tech: ["Next.js", "React", "TypeScript"],
    href: "https://www.travonsportfolio.com/",
    repoHref: "https://github.com/abdiarale86/AWS-Portfolio-Website",
  },
];

const skills = [
  {
    category: "Cloud & AWS",
    icon: "☁️",
    items: ["Amazon VPC", "AWS IAM", "Amazon EC2", "Amazon S3", "Amazon RDS", "Amazon DynamoDB"],
  },
  {
    category: "Infrastructure as Code",
    icon: "⚙️",
    items: ["Terraform", "AWS CDK", "Docker", "Kubernetes", "Amazon EKS", "Helm"],
  },
  {
    category: "CI/CD & Automation",
    icon: "🔄",
    items: ["Git & GitHub", "GitHub Actions", "ArgoCD", "Jenkins", "Python & Bash Scripting"],
  },
  {
    category: "Security & Best Practices",
    icon: "🔐",
    items: [
      "DevSecOps",
      "IAM Roles & Policies",
      "HashiCorp Vault",
      "Secrets Management",
      "SonarQube & Trivy",
      "Principle of Least Privilege",
    ],
  },
];

const education = [
  "B.Sc. in Computer Science, Algoma University, ON",
  "B.A. in English and Literature, York University, ON",
  "AWS Solutions Architect – Associate (SAA-C03), Amazon Web Services",
  "Terraform Associate, HashiCorp",
  "CCNA, Cisco",
];

const contactMethods = [
  {
    icon: "✉️",
    label: "Email",
    value: "abdijarale@gmail.com",
    href: "mailto:abdijarale@gmail.com",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/abdijarale",
    href: "https://linkedin.com/in/abdijarale",
  },
  {
    icon: "💻",
    label: "GitHub",
    value: "github.com/abdiarale86",
    href: "https://github.com/abdiarale86",
  },
];

export default function Home() {
  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: #0f0f1e;
          color: #e0e0e0;
          line-height: 1.6;
        }

        nav {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(15, 15, 30, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(99, 102, 241, 0.2);
          padding: 20px 0;
          z-index: 1000;
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-area {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .logo {
          width: 45px;
          height: 45px;
          background: linear-gradient(135deg, #6366f1, #a855f7);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 1.2em;
          color: white;
        }

        .nav-links {
          display: flex;
          gap: 40px;
        }

        .nav-links a {
          color: #a0a0a0;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
          font-size: 0.95em;
        }

        .nav-links a:hover {
          color: #6366f1;
        }

        .hero-dashboard {
          margin-top: 85px;
          padding: 80px 40px;
          max-width: 1400px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 30px;
          margin-bottom: 30px;
        }

        .hero-main {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 60px;
          position: relative;
          overflow: hidden;
        }

        .hero-main::before {
          content: "";
          position: absolute;
          top: -50%;
          right: -50%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          100% {
            transform: rotate(360deg);
          }
        }

        .hero-main h1 {
          font-size: 4.5em;
          font-weight: 900;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #fff 0%, #a0a0a0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
          z-index: 2;
        }

        .hero-main .tagline {
          font-size: 1.5em;
          color: #a0a0a0;
          margin-bottom: 30px;
          position: relative;
          z-index: 2;
        }

        .hero-stats {
          display: flex;
          gap: 40px;
          flex-wrap: wrap;
          position: relative;
          z-index: 2;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .stat-icon {
          width: 50px;
          height: 50px;
          background: rgba(99, 102, 241, 0.2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5em;
        }

        .stat-info h3 {
          font-size: 1.8em;
          color: #6366f1;
        }

        .stat-info p {
          font-size: 0.85em;
          color: #888;
        }

        .hero-side {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .info-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 30px;
        }

        .info-card h3 {
          font-size: 1.2em;
          margin-bottom: 20px;
          color: #fff;
        }

        .info-list {
          list-style: none;
        }

        .info-list li {
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.95em;
        }

        .info-list li:last-child {
          border-bottom: none;
        }

        .info-label {
          color: #888;
        }

        .info-value {
          color: #fff;
          font-weight: 600;
        }

        .timeline-section {
          max-width: 1400px;
          margin: 60px auto;
          padding: 0 40px;
        }

        .section-title {
          font-size: 2.5em;
          font-weight: 800;
          margin-bottom: 50px;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .section-title::before {
          content: "";
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #6366f1, transparent);
        }

        .timeline {
          position: relative;
          padding-left: 40px;
          border-left: 2px solid rgba(99, 102, 241, 0.3);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 50px;
          padding-left: 40px;
        }

        .timeline-item::before {
          content: "";
          position: absolute;
          left: -46px;
          top: 0;
          width: 14px;
          height: 14px;
          background: #6366f1;
          border: 3px solid #0f0f1e;
          border-radius: 50%;
        }

        .timeline-date {
          color: #6366f1;
          font-weight: 600;
          font-size: 0.9em;
          margin-bottom: 10px;
        }

        .timeline-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 30px;
          transition: all 0.3s;
        }

        .timeline-card:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateX(10px);
        }

        .timeline-card h3 {
          font-size: 1.5em;
          color: #fff;
          margin-bottom: 10px;
        }

        .timeline-card .role {
          color: #888;
          margin-bottom: 15px;
          font-size: 0.95em;
        }

        .timeline-card ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .timeline-card li {
          color: #b0b0b0;
          line-height: 1.7;
          padding-left: 18px;
          position: relative;
        }

        .timeline-card li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 10px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #6366f1;
        }

        .projects-dashboard {
          max-width: 1400px;
          margin: 60px auto;
          padding: 0 40px;
        }

        .projects-grid-advanced {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
        }

        .project-card-advanced {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s;
        }

        .project-card-advanced:hover {
          transform: translateY(-10px);
          border-color: rgba(99, 102, 241, 0.5);
          box-shadow: 0 20px 60px rgba(99, 102, 241, 0.2);
        }

        .project-header {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2));
          padding: 40px 30px;
          position: relative;
        }

        .project-number {
          position: absolute;
          top: 20px;
          right: 30px;
          font-size: 3em;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.1);
        }

        .project-header h3 {
          font-size: 1.8em;
          color: #fff;
          margin-bottom: 10px;
        }

        .project-status {
          display: inline-block;
          background: rgba(34, 197, 94, 0.2);
          color: #22c55e;
          padding: 6px 14px;
          border-radius: 15px;
          font-size: 0.8em;
          border: 1px solid rgba(34, 197, 94, 0.3);
        }

        .project-body {
          padding: 30px;
        }

        .project-body p {
          color: #b0b0b0;
          margin-bottom: 25px;
          line-height: 1.7;
        }

        .tech-stack-advanced {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 25px;
        }

        .tech-badge-advanced {
          background: rgba(99, 102, 241, 0.15);
          color: #a5b4fc;
          padding: 6px 14px;
          border-radius: 15px;
          font-size: 0.8em;
          border: 1px solid rgba(99, 102, 241, 0.3);
        }

        .project-footer {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          justify-content: flex-start;
          align-items: center;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .project-link-btn {
          background: #6366f1;
          color: white;
          padding: 12px 25px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .project-link-btn:hover {
          background: #7c3aed;
          transform: translateX(5px);
        }

        .project-link-btn.secondary {
          background: rgba(255, 255, 255, 0.08);
        }

        .project-link-btn.secondary:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .skills-matrix {
          max-width: 1400px;
          margin: 60px auto;
          padding: 0 40px;
        }

        .skills-categories {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        @media (max-width: 1024px) {
          .skills-categories {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .skills-categories {
            grid-template-columns: 1fr;
          }
        }

        .skill-category {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 35px;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 25px;
        }

        .category-icon {
          width: 50px;
          height: 50px;
          background: rgba(99, 102, 241, 0.2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5em;
        }

        .category-header h3 {
          font-size: 1.4em;
          color: #fff;
        }

        .skill-list-advanced {
          list-style: none;
        }

        .skill-list-advanced li {
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          color: #e0e0e0;
          font-weight: 500;
        }

        .skill-list-advanced li:last-child {
          border-bottom: none;
        }

        .contact-dashboard {
          max-width: 1400px;
          margin: 60px auto;
          padding: 0 40px;
        }

        .contact-main {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 50px;
        }

        .contact-main h3 {
          font-size: 2em;
          color: #fff;
          margin-bottom: 20px;
        }

        .contact-main p {
          color: #a0a0a0;
          margin-bottom: 40px;
          font-size: 1.1em;
          line-height: 1.7;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-method {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 25px;
          display: flex;
          align-items: center;
          gap: 20px;
          text-decoration: none;
          transition: all 0.3s;
        }

        .contact-method:hover {
          background: rgba(99, 102, 241, 0.1);
          border-color: #6366f1;
          transform: translateX(10px);
        }

        .contact-method-icon {
          width: 60px;
          height: 60px;
          background: rgba(99, 102, 241, 0.2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8em;
        }

        .contact-method-info h4 {
          color: #fff;
          font-size: 1.2em;
          margin-bottom: 5px;
        }

        .contact-method-info p {
          color: #888;
          margin: 0;
          font-size: 0.9em;
        }

        footer {
          max-width: 1400px;
          margin: 80px auto 0;
          padding: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          color: #666;
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }

          .hero-main h1 {
            font-size: 3em;
          }
        }
      `}</style>

      <nav>
        <div className="nav-container">
          <div className="logo-area">
            <div className="logo">AA</div>
            <span style={{ color: "#fff", fontWeight: 600 }}>Abdi Arale</span>
          </div>
          <div className="nav-links">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <div className="hero-dashboard">
        <div className="hero-grid">
          <div className="hero-main">
            <h1>Abdi Jama Arale</h1>
            <p className="tagline">
              DevOps Engineer | Helping enterprises build production-grade cloud infrastructure | ML & AI Enthusiast
            </p>
            <div className="hero-stats">
              {heroStats.map((stat) => (
                <div className="stat-item" key={stat.label}>
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-info">
                    <h3>{stat.value}</h3>
                    <p>{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-side">
            <div className="info-card">
              <h3>Quick Info</h3>
              <ul className="info-list">
                {quickInfo.map((item) => (
                  <li key={item.label}>
                    <span className="info-label">{item.label}</span>
                    <span className="info-value">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="timeline-section" id="experience">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experience.map((job) => (
            <div className="timeline-item" key={`${job.company}-${job.date}`}>
              <div className="timeline-date">{job.date}</div>
              <div className="timeline-card">
                <h3>{job.role}</h3>
                <div className="role">{job.company}</div>
                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="projects-dashboard" id="projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid-advanced">
          {projects.map((project, index) => (
            <div className="project-card-advanced" key={project.name}>
              <div className="project-header">
                <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{project.name}</h3>
                <span className="project-status">✓ Completed</span>
              </div>
              <div className="project-body">
                <p>{project.description}</p>
                <div className="tech-stack-advanced">
                  {project.tech.map((item) => (
                    <span className="tech-badge-advanced" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <div className="project-footer">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                  >
                    {project.repoHref ? "View Live Site" : "View on GitHub"} →
                  </a>
                  {project.repoHref && (
                    <a
                      href={project.repoHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn secondary"
                    >
                      View Code →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-matrix" id="skills">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-categories">
          {skills.map((group) => (
            <div className="skill-category" key={group.category}>
              <div className="category-header">
                <div className="category-icon">{group.icon}</div>
                <h3>{group.category}</h3>
              </div>
              <ul className="skill-list-advanced">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-matrix">
        <h2 className="section-title">Education &amp; Certifications</h2>
        <div className="skill-category">
          <ul className="skill-list-advanced">
            {education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="contact-dashboard" id="contact">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-main">
          <h3>Let&apos;s Connect</h3>
          <p>
            Open to AWS cloud engineering and DevOps opportunities. If you&apos;re looking for someone
            experienced with Terraform, Kubernetes, and CI/CD automation, I&apos;d love to hear from you.
          </p>
          <div className="contact-methods">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.label === "Email" ? undefined : "_blank"}
                rel={method.label === "Email" ? undefined : "noopener noreferrer"}
                className="contact-method"
              >
                <div className="contact-method-icon">{method.icon}</div>
                <div className="contact-method-info">
                  <h4>{method.label}</h4>
                  <p>{method.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer>
        <p>Built with Next.js &amp; Terraform | © 2026 Abdi Arale</p>
      </footer>
    </>
  );
}
