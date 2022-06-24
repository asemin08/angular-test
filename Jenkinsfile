pipeline {
    agent any

    stages {
	stage('Clean workspace'){
            steps{
            	cleanWs()
            }
        }
        
        stage('Récupération du Dockerfiles'){
            steps{
                git branch: 'main', changelog: false, poll: false, url: 'https://github.com/asemin08/angular-test.git'
            }
        }

        stage('Docker build Image') {
            steps{
                script{
                    sh "docker build --no-cache -t verkeur08/angular-test:latest -f Dockerfile ."
                }
            }
        }
        stage('Docker login') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
                 sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
                }
            }
        }
        stage('Docker push') {
            steps {
                sh "docker push verkeur08/angular-test:latest"
            }
        }
    }
}
