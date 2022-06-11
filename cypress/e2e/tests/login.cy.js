describe('SSPR Login Tests',function(){
    beforeEach(function(){
        Cypress.Cookies.preserveOnce('SESSION','remember_token')
        Cypress.Cookies.preserveOnce('ID','remember_token')
        Cypress.Cookies.preserveOnce('JSESSIONID','remember_token')
        Cypress.Cookies.preserveOnce('authRecord','remember_token')
        cy.fixture('ssprlogindata').then(function (testdata){
            this.testdata = testdata
        })
        
    })

    it('Validate SSPR Login',function(){
        cy.login(this.testdata)
        cy.log('SSPR Login Successful')
               
    })

    it('Validate ConfigEditor Click', function(){
        cy.login(this.testdata)
        cy.clickConfigEditor(this.testdata)
        cy.validateConfigEditorUrl()
    })

    
    afterEach(function() {
        cy.clearCookies()
    })
})