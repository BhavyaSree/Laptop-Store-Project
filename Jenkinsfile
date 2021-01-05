pipeline {
  agent any{
    docker { 
      image 'node:14-alpine' 
    }
  }
  stages {
    stage('Build') {
      steps {
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
