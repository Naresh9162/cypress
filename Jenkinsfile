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
               powershell 'cp ..'
               powershell 'npm install cypress'
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
   

}
