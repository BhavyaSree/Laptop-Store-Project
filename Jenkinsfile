pipeline {
  agent { docker 'node:14-alpine' }
  stages {
    stage('Checkout Code') {
        steps {
            checkout scm
        }
    }
    stage('Build') {
      agent { docker 'curlimages/curl' }
      steps {
        sh 'npm install'
        sh 'npm ci'
        sh 'nohup npm start &'
        sh 'sleep 5'
        sh 'curl -v http://localhost:1337'
      }
    }
    stage('test') {
      steps {
      sh 'npm test'
      }
    }
  }
}
