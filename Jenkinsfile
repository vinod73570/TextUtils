pipeline {
    agent any

    environment {
        IMAGE_NAME = "vinod73570/textutils:latest"
        DOCKERHUB = credentials("dockerhub-creds")   // Your Docker Hub creds stored in Jenkins
    }

    stages {

        stage("Checkout Code") {
            steps {
                echo "Pulling latest code from GitHub..."
                git branch: 'main', url: 'https://github.com/vinod73570/TextUtils.git'
            }
        }

        stage("Build React App") {
            steps {
                echo "Installing dependencies..."
                sh "npm install"

                echo "Building production React App..."
                sh "npm run build"
            }
        }

        stage("Build Docker Image") {
            steps {
                echo "Building Docker Image..."
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }

        stage("Login to Docker Hub") {
            steps {
                echo "Logging into Docker Hub..."
                sh """
                echo ${DOCKERHUB_PSW} | docker login -u ${DOCKERHUB_USR} --password-stdin
                """
            }
        }

        stage("Push Image to Docker Hub") {
            steps {
                echo "Pushing Image to Docker Hub..."
                sh "docker push ${IMAGE_NAME}"
            }
        }

        stage("Deploy Container") {
            steps {
                echo "Stopping old container..."
                sh "docker rm -f textutils || true"

                echo "Starting new container..."
                sh "docker run -d --name textutils -p 80:80 ${IMAGE_NAME}"
            }
        }
    }

    post {
        always {
            echo "Cleaning workspace..."
            cleanWs()
        }
    }
}
