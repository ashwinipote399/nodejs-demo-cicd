
pipeline {
    agent any

    tools {
        nodejs 'nodejs26'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Source code checkout completed by Jenkins.'
            }
        }

        stage('Check Node.js and npm') {
            steps {
                sh '''
                    echo "Checking Node.js..."
                    node --version

                    echo "Checking npm..."
                    npm --version
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    if [ -f package.json ]; then
                        npm install
                    else
                        echo "ERROR: package.json not found!"
                        exit 1
                    fi
                '''
            }
        }

        stage('Build') {
            steps {
                sh '''
                    if npm run | grep -q "build"; then
                        npm run build
                    else
                        echo "No build script found. Skipping build."
                    fi
                '''
            }
        }

        stage('Test') {
            steps {
                sh '''
                    if npm run | grep -q "test"; then
                        npm test -- --runInBand
                    else
                        echo "No test script found. Skipping tests."
                    fi
                '''
            }
        }
    }

    post {
        success {
            echo 'CI pipeline completed successfully!'
        }

        failure {
            echo 'CI pipeline failed. Check Console Output.'
        }

        always {
            echo 'Pipeline execution finished.'
        }
    }
}
