pipeline {
  agent master {
    docker { 
      docker { image 'node:14-alpine' } 
    }
  }
  stages {
    stage('Build') {
      sh 'npm ci'
      sh 'nohup npm start &'
      sh 'sleep 5'
      sh 'curl -v http://localhost:1337'
    }
  }
}
