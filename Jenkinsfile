
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/ashwinipote399/nodejs-demo-cicd.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    docker run --rm \
                      -v jenkins_home:/var/jenkins_home \
                      -w /var/jenkins_home/workspace/nodejs-demo-cicd \
                      node:22 npm install
                '''
            }
        }

        stage('Test') {
            steps {
                sh '''
                    docker run --rm \
                      -v jenkins_home:/var/jenkins_home \
                      -w /var/jenkins_home/workspace/nodejs-demo-cicd \
                      node:22 npm test
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t nodejs-demo-cicd:$BUILD_NUMBER .'
            }
        }

        stage('Verify Docker Image') {
            steps {
                sh 'docker image inspect nodejs-demo-cicd:$BUILD_NUMBER'
            }
        }
    }

    post {
        success {
            echo 'SUCCESS: Tests passed and Docker image built.'
        }
        failure {
            echo 'FAILED: Check the stage logs.'
        }
    }
}
