class HomePage{
    clickUsername() {
        return cy.get('[id=header-username]',{timeout : 10000})
    }

    usernameHeaderCaret(){
        return cy.get('[id=header-username-caret]')
    }
    clickConfigEditor(){
        return cy.get('[id=header_configEditorButton]')
    }

    configManager(){
        return cy.get('[id=header_configManagerButton]')
    }

    administration(){
        return cy.get('[id=header_administrationButton]')
    }

    viewLog(){
        return cy.get('[id=header_openLogViewerButton]')
    }

    changepassword(){
        return cy.contains('Change Password')
    }

    setupSQNS(){
        return cy.contains('Setup Security Questions')
    }

    myAccount(){
        return cy.contains('My Account')
    }

    adminFunctions(){
        return cy.contains('Administration')
    }
    logout(){
       
    }
     //added by naresh
     clickOnLogoutButton(){
        return cy.get('#LogoutButton > .pwm-icon')  
     }

}
export default HomePage