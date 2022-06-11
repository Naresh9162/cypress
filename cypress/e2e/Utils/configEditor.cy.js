import configEditorPage from "../ui/configEditorPage.cy"
import HomePage from "../ui/HomePage.cy"
import loginPage from "../ui/loginPage.cy"

const login = new loginPage()
const homePage = new HomePage()
const configEditor = new configEditorPage()

Cypress.Commands.add('configEditorSave',(data)=>{
    configEditor.headerTitle().click()
    configEditor.saveConfig().click()
    configEditor.headerConfigSave().click()
    configEditor.clickOkSaveConfigButton().click()
    configEditor.validateConfigeditorSave()
    
})

Cypress.Commands.add('validateConfigEditorUrl',()=>{
    cy.url().should('include','/private/config/editor')
    cy.log('Configuration Editor Page Load Successful.')

})

//added by naresh
Cypress.Commands.add('clickOnSaveAndSignOut',()=>{
    configEditor.saveConfig().click()
    configEditor.clickOkSaveConfigButton().should('be.visible').click()
   // configEditor.clickOnDialogOkButton().click()
   homePage.clickOnLogoutButton().should('be.visible').click()
    cy.log('Configuration Editor Page Load Successful.')

})

//added by naresh
Cypress.Commands.add('clickOnModule',(option)=>{
    configEditor.clickOnLeftPanelOption(option.Modules).should('be.visible').click()
    configEditor.clickOnLeftPanelSubOption(option.Public).should('be.visible').click()
    configEditor.clickOnLeftPanelSubOption(option.ForgottenPassword).should('be.visible').click()
    configEditor.clickOnLeftPanelSubOption(option.Profiles).should('be.visible').click()
    configEditor.clickOnLeftPanelSubOption('#dijit__TreeNode_17_label',option.default).should('be.visible').click()
    configEditor.clickOnLeftPanelSubOption('#dijit__TreeNode_18_label',option.Definition).should('be.visible').click()
    

})

