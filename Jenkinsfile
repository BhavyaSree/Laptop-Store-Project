pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''
            npm install
            npm ci
            nohup npm start &
            sleep 5
            curl -v http://localhost:1337
            '''
      }
    }

    stage('test') {
      steps {
        sh 'npm test'
      }
    }

  }
}