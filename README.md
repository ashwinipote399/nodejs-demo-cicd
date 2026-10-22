# nodejs-demo-cicd
# Task 1: Automate Code Deployment Using CI/CD Pipeline

## Project Overview

This project demonstrates how to automate the build and deployment process of a sample Node.js web application using GitHub Actions and Docker.

The objective was to create a CI/CD pipeline that runs automatically when code is pushed to the `main` branch and builds and publishes a Docker image to Docker Hub.

## Tools and Technologies

- **GitHub:** Source code management and version control
- **GitHub Actions:** CI/CD workflow automation
- **Node.js:** Application runtime
- **npm:** Dependency installation
- **Docker:** Containerization
- **Docker Hub:** Docker image registry

## Tasks Performed

1. Downloaded the sample Node.js project from GitHub.
2. Installed the project dependencies using `npm install`.
3. Ran the application locally and verified its output in the browser.
4. Configured a GitHub Actions workflow in `.github/workflows/main.yml`.
5. Set up the workflow to trigger on pushes to the `main` branch.
6. Configured Docker image build and Docker Hub push steps.
7. Executed the GitHub Actions workflow and checked its status.
8. Verified that the Docker image and its tag were available in Docker Hub.

## CI/CD Workflow

The pipeline follows these steps:

**Code Push → GitHub Actions → Build → Docker Image → Docker Hub**

When code is pushed to the configured branch, GitHub Actions runs the workflow automatically. The workflow builds the Docker image and pushes it to Docker Hub when the relevant steps succeed.

## Project Structure

```text
nodejs-demo-cicd-main/
├── .github/
│   └── workflows/
│       └── main.yml
├── Dockerfile
├── package.json
├── package-lock.json
└── README.md
```

*Note: The structure above shows the main project files; additional application files may also be present.*

## Outcome

- Successfully installed the Node.js project dependencies.
- Ran and tested the application locally.
- Executed the GitHub Actions workflow successfully.
- Verified the Docker image and tag in Docker Hub.

This project provided practical experience with CI/CD automation, GitHub Actions, Docker image creation, and container image publishing.

## Skills Learned

GitHub, Git, GitHub Actions, CI/CD, Node.js, npm, Docker, Docker Hub, and basic deployment automation.

