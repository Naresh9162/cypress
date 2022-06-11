import BasePage from "../ui/BasePage.cy"
import NURUserPage from "../ui/config/modules/public/newuserregistration/NURUserPage.cy";

const basepage = new BasePage()
const newuser = new NURUserPage()


Cypress.Commands.add('createNewUser',(data)=>{
    const mail = "testusr" + basepage.generateRandomID() + "@mf.com" 
    const givenName = "test" + basepage.generateRandomID()
    cy.visit('/sspr/public/newuser')
    newuser.mail().type(mail)
    newuser.givenName().type(givenName)
    newuser.lastName().type(data.sn)
    newuser.password1().type(data.newpass)
    newuser.password2().type(data.newpass)
    newuser.submitBtn().click()
    cy.wait(150000)
    cy.url().should('eq','https://www.facebook.com/')
    cy.contains('Facebook')
    
})

Cypress.Commands.add('createNewUserWithoutPassword',(data)=>{
    const mail = "usrtest"+basepage.generateRandomID()+"@mf.com"
    const givenName = "usr" + basepage.generateRandomID()
    cy.visit('/sspr/public/newuser')
    newuser.mail().type(mail)
    newuser.givenName().type(givenName)
    newuser.lastName().type(data.sn)
    newuser.submitBtn().click()

})