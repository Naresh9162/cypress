class NewUserProfilesPage {

    creationContextTitle(){
        return cy.contains('Creation Context')
    }

    userCreationContext(){
        return cy.get('div[id="panel-newUser.createContext"]')
    }

    userCreationContextAddValue(){
        return cy.contains('Add Value')
    }

    newuserRedirectUrl(){
       
        return cy.get('button[id="button-add-newUser.redirectUrl"]')
    }

    okButton(){
        return cy.get('button[id="dialog_ok_button"]')
    }

    ldapBrowseTitle(){
        return cy.contains('LDAP Browser')
    }

    
    editTextBtn(){
        
        return cy.contains('Edit Text')
    }

    createContextEditValue(){
        return cy.get('[id=addValueDialog_input]')
    }

    clearLdapTextValue(){
        return cy.contains('Clear Value')
       
    }

    promptPassword(){
        return cy.get('[class=checkboxWrapper]').eq(4)
        
    }
}
export default NewUserProfilesPage