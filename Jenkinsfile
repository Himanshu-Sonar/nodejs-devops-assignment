
pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Source code is available in workspace'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies'
                sh 'npm ci'
            }
        }

        stage('Test Application') {
            steps {
                echo 'Running application tests'
                sh 'npm test'
            }
        }

        stage('Build Successful') {
            steps {
                echo 'Node.js application passed CI checks!'
            }
        }
    }
}

