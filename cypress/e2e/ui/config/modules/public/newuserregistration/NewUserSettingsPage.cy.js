class newuserSettingsPage{

    

    enableNewUserRegistration(){
        return cy.contains('Enable New User Registration')
    }
    
    titleEnableNewUserRegistration() {
     
       return cy.contains('Enabled')
    }
}
export default newuserSettingsPage