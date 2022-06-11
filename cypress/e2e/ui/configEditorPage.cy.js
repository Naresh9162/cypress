class configEditorPage {

    headerTitle(){
        return cy.get('[id=header-title]')
    }

    headerConfigSave(){
        return cy.contains('Unsaved Configuration Editor Changes')
    }
    enterConfigPass(){
        return cy.get('[id=password]')
    }

    signinButton(){
        return cy.get('[id=submitBtn]')
    }

    saveConfig(){
        return cy.get('[id=saveButton_icon]')
    }
    rememberConfigPass(){
        return cy.get('[id=remember]')
    }
    clickOkSaveConfigButton(){
        return cy.contains('OK')
    }
    validateConfigeditorSave(){
        cy.url().should('include','/sspr/private')
        cy.contains('My Account')
    }
     //added by naresh
     clickOnLeftPanelOption(option){
        return cy.contains(option)
        }
        // added by naresh
        clickOnLeftPanelSubOption(option){
            return cy.contains(option)  
        }
        //added by naresh
        clickOnLeftPanelSubOption(selector,option){
            return cy.contains(selector,option)  
        }
    
}

export default configEditorPage