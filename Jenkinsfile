
pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code from GitHub'
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
                    rsync -av --delete \
                    --exclude=node_modules \
                    ./ /opt/nodejs-app/

                    cd /opt/nodejs-app

                    npm ci --omit=dev

                    if pm2 describe nodejs-app >/dev/null 2>&1; then
                        pm2 restart nodejs-app
                    else
                        pm2 start app.js --name nodejs-app
                    fi
                '''
            }
        }
    }

    post {
        success {
            echo 'Application deployed successfully!'
        }

        failure {
            echo 'Pipeline failed. Check the console output.'
        }
    }
}

