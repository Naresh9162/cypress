pipeline{
    agent any

    parameters{
        string(name: 'SPEC', defaultValue: "cypress/e2e/tests/demo.cy.js", description: "Enter the script")
        choice(name: 'BROWSER', choices:['chrome','edge','firefox'], description:" browser")
    }
    options {
        ansiColor('xtrem')
    }
    stages{
        stage('builting the application'){
            steps{
            echo "naresh"
            }
        }
         stage('Testing the application'){
            steps{
               powershell npm install cypress
               powershell 'npx cypress run  --headless --spec cypress/e2e/tests/demo.cy.js'
            }
         }
         stage('Deploying')
         {
             steps{
            echo "naresh"
             }
         }
    }
    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress\\results\\reports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
        }
    }

}
