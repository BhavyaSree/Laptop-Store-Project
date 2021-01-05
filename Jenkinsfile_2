pipeline {
  agent any
    stages {
      stage('Build') {
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