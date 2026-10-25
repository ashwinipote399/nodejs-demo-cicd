
pipeline {
    agent any

    tools {
        nodejs 'nodejs22'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t nodejs-demo-cicd .'
            }
        }

        stage('Verify Docker Image') {
            steps {
                sh 'docker image inspect nodejs-demo-cicd'
            }
        }
    }

    post {
        success {
            echo 'CI pipeline successful: tests passed and Docker image built.'
        }
        failure {
            echo 'Pipeline failed. Check the stage logs.'
        }
    }
}

