
pipeline {
    agent {
        docker {
            image 'node:22-alpine'
        }
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building Node.js application'
                sh 'node --version'
                sh 'npm --version'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy stage completed for demo application'
            }
        }
    }
}
