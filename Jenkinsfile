pipeline{
    agent any

    parameters{
<<<<<<< HEAD
        string(name: 'SPEC', defaulValue: "cypress/e2e/tests/demo.cy.js", description: "Enter the script")
        choice(name: 'BROWSER', choices:['chrome','edge','firefox'], description:"browser")
    }
    options{
=======
        string(name: 'SPEC', defaultValue: "cypress/e2e/tests/demo.cy.js", description: "Enter the script")
        choice(name: 'BROWSER', choices:['chrome','edge','firefox'], description:" browser")
    }
    options {
>>>>>>> 73b2b571f8af069872e399c4bf324f48c992161f
        ansiColor('xtrem')
    }
    stages{
        stage('builting the application'){
<<<<<<< HEAD
            echo "naresh"
        }
         stage('Testing the application'){
            steps{
               bat "npm install cypress"
               bat "npx cypress run  --headed --spec cypress/e2e/tests/demo.cy.js"
=======
            steps{
            echo "naresh"
            }
        }
         stage('Testing the application'){
            steps{
               powershell 'npm i' 
               powershell 'npm install cypress'
               powershell 'npx cypress run  --headed --spec cypress/e2e/tests/demo.cy.js'
>>>>>>> 73b2b571f8af069872e399c4bf324f48c992161f
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