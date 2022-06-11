

describe('NEW USER REGISTRATION TESTS',()=>{

             
        beforeEach(function(){
            cy.clearCookies()
            Cypress.Cookies.preserveOnce('SESSION','remember_token')
            Cypress.Cookies.preserveOnce('ID','remember_token')
            Cypress.Cookies.preserveOnce('JSESSIONID','remember_token')
            Cypress.Cookies.preserveOnce('authRecord','remember_token')
            
            cy.fixture('ssprlogindata').then(function (testdata){
                this.testdata = testdata
            })

            cy.fixture('newuserregistrationdata').then(function(newuserregdata){
                this.newuserregdata = newuserregdata
            })
        })
            it('Enable NewUserRegistration',function(){
                cy.login(this.testdata)
                cy.clickConfigEditor(this.testdata)
                cy.enableNewUserSetting(this.testdata)
                cy.configEditorSave(this.testdata)
                cy.log('NewUserRegistration enabled successfully.')
            })

            it('New User Creation Context Test',function(){
                cy.login(this.testdata)
                cy.clickConfigEditor(this.testdata)
                cy.clickNewUserDefaultProfile(this.testdata)
                cy.newuserCreationContext(this.newuserregdata) 
                cy.configEditorSave(this.testdata)
                cy.log('New User Creation Context config updated successfully.')
            })

           

            it('NUR Config Set Post Registration Redirect URL',function(){
                cy.login(this.testdata)
                cy.clickConfigEditor(this.testdata)
                cy.clickNewUserDefaultProfile(this.testdata)
                cy.newuserRedirectURL(this.newuserregdata)    
                cy.configEditorSave(this.testdata)
             })
            
             //Bugzilla id : Case 1689892 - [Enh] Add config setting for post new user registration redirect url
             it('NUR Post Registration Redirect URL E2E Test',function(){
                   Cypress.config('defaultCommandTimeout', 200000) 
                   Cypress.config('pageLoadTimeout', 200000) 
                   cy.createNewUser(this.newuserregdata)
                                   
             })


             it('Disable New User Prompt Password',function(){
                cy.login(this.testdata)
                cy.clickConfigEditor(this.testdata)
                cy.clickNewUserDefaultProfile(this.testdata)
                cy.disablePromptPassword()
                cy.configEditorSave(this.testdata)
                cy.log('New User Password Prompt Disabled Successfully.')
            })
           //Case 1689884 - [Enh] Allow new user registration process to occur with non-prompted random password  
            it('NUR without Password Prompt',function(){
             
                cy.createNewUserWithoutPassword(this.newuserregdata)

             })


             afterEach(function() {
                cy.clearCookies()
            })

})
