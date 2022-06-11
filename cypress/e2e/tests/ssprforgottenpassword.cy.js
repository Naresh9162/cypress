describe('Resetting Password', function(){
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
        cy.fixture('setupSecurityQuestions').then(function (securityQuestion){
            this.securityQuestion = securityQuestion
        })
        cy.fixture('leftPanelOption').then(function (leftPanelOption){
            this.leftPanelOption = leftPanelOption
        })
    })
   

    it('Enabling forget password using security Question',function(){
        cy.login(this.testdata)
        cy.log('SSPR Login Successful')
        cy.clickConfigEditor(this.data)
        cy.wait(3000)
        cy.clickOnModule(this.leftPanelOption)
        cy.get('.modified.setting_body tr:nth-of-type(3) [type=range]').invoke('val',2).trigger('change')
       cy.clickOnSaveAndSignOut() 
    })
     it('Validate forget password using security Question',function(){
       cy.forgottenPasswordLinkClick()
       cy.enterUsernameToSearch(this.testdata)
       cy.enterSecurityQuestionResponse(this.securityQuestion)
       cy.enterNewPasswordPage(this.testdata.newPassword)
     })
     it('Resetting to old password using security Question',function(){
        cy.forgottenPasswordLinkClick()
        cy.enterUsernameToSearch(this.testdata)
        cy.enterSecurityQuestionResponse(this.securityQuestion)
        cy.enterNewPasswordPage(this.testdata.password)
      })
      
     it('Disabling forget password using security Question',function(){
        cy.login(this.testdata)
        cy.log('SSPR Login Successful')
        cy.clickConfigEditor(this.data)
        cy.wait(3000)
        cy.clickOnModule(this.leftPanelOption)
        cy.get('.modified.setting_body tr:nth-of-type(3) [type=range]').invoke('val',0).trigger('change')
        cy.clickOnSaveAndSignOut() 
    })
       afterEach(function() {
        cy.clearCookies()
     })
    })