describe('My First Test', function(){
    beforeEach(function(){
        Cypress.Cookies.preserveOnce('SESSION','remember_token')
        Cypress.Cookies.preserveOnce('ID','remember_token')
        Cypress.Cookies.preserveOnce('JSESSIONID','remember_token')
        Cypress.Cookies.preserveOnce('authRecord','remember_token')
        cy.fixture('ssprlogindata').then(function (testdata){
            this.testdata = testdata
        })
        cy.fixture('ConfigurationPassword').then(function (data){
            this.data = data
        })
       
        cy.fixture('leftPanelOption').then(function (leftPanelOption){
            this.leftPanelOption = leftPanelOption
        })
        
    })

    it('Enabling forget password using Email ID',function(){
        cy.login(this.testdata)
        cy.log('SSPR Login Successful')
        cy.clickConfigEditor(this.data)
        cy.wait(3000) 
        cy.clickOnModule(this.leftPanelOption)
       // cy.get('.modified.setting_body tr:nth-of-type(4) [type=range]').invoke('val',2).trigger('change')
        //cy.clickOnSaveAndSignOut() 
        cy.forceVisit("https://www.youtube.com/")
        cy.wait(3000)
        cy.go('back')
        
    })
    //  it('Validate forget password using Email ID',function(){
    //    cy.forgottenPasswordLinkClick()
    //    cy.enterUsernameToSearch(this.testdata)
    //    cy.enterSecurityQuestionResponse(this.securityQuestion)
    //    cy.enterNewPasswordPage()
    //  })



    afterEach(function() {
        cy.clearCookies()
     })
})