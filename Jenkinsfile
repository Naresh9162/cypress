pipeline{
    agent any

    parameters{
        string(name: 'SPEC', defaulValue: "cypress/e2e/tests/demo.cy.js", description: "Enter the script")
        choice(name: 'BROWSER', choices:['chrome','edge','firefox'], description:" browser")
    }
    option
    {
        ansiColor('xtrem')
    }
    stages{
        stage('builting the application'){
            echo 'naresh'
        }
         stage('Testing the application'){
            steps{
                "npm install cypress"
                "npx cypress run  --headed --spec cypress/e2e/tests/demo.cy.js"
            }
         }
         stage('Deploying')
         {
            echo "naresh"
         }
    }
    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress\\results\\reports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
        }
    }

}
