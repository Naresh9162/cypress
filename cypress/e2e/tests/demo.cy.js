describe('Resetting Password', function(){
    it('Enabling forget password using security Question',function(){
        cy.exec('bash cypress/fixtures/demotest.sh') 
      // cy.copyXmlFile()
    })
    // it('Enabling',function(){
        // cy.exec('bash cypress/fixtures/copyFile.sh')
       // cy.copyXmlFile()
   //  })
    afterEach(function() {
        cy.copyXmlFile()
     })
})