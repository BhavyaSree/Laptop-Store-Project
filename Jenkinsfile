pipeline {
  agent { docker 'node:14-alpine' }
  stages {
    stage('Build') {
      steps {
        docker { image 'curlimages/curl' }
        // sh 'npm install'
      }
    }
    stage('Run') {
      steps {
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
