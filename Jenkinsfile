pipeline {
      agent any
      tools {nodejs "node"}
    
     environment {
            CI = 'true'
        }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
                    steps {
                        sh './jenkinsscript/test.sh'
                    }
                }
                stage('Deliver') {
                            steps {
                                sh './jenkinsscript/deliver.sh'
                                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                                sh './jenkinsscript/kill.sh'
                            }
                        }

    }
}