
pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Source code checked out from GitHub'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Test Application') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy Application') {
            steps {
                sh '''
                    sudo -u ubuntu -H /usr/local/bin/deploy-node-app "$WORKSPACE"
                '''
            }
        }

        stage('Verify Application') {
            steps {
                sh 'curl -f http://127.0.0.1:3000/health'
            }
        }
    }

    post {
        success {
            echo 'Application deployed and verified successfully!'
        }

        failure {
            echo 'Pipeline failed. Check the console output.'
        }
    }
}

