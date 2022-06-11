
import loginPage from "../ui/loginPage.cy";
import configEditorPage from "../ui/configEditorPage.cy"
const login = new loginPage();
const confEditorPage = new configEditorPage()

Cypress.Commands.add('login',(data)=>{
    cy.visit('/sspr')
    login.usernameInput().type(data.username)
    login.passwordInput().type(data.password)
    login.loginBtn().click()
    cy.contains(data.username)
})

Cypress.Commands.add('forgottenPasswordLinkClick',()=>{
    cy.visit('/sspr')
    login.forgottenPasswordLink().click()
})

Cypress.Commands.add('forgottenUsernameLinkClick',()=>{
    cy.visit('/sspr')
    login.forgottenUsernameLink().click()
})

Cypress.Commands.add('newuserRegistrationClick',()=>{
    cy.visit('/sspr')
    login.newuserRegistrationLink().click()
})

Cypress.Commands.add('activateAccountClick',()=>{
    cy.visit('/sspr')
    login.activateAccountLink().click()
})

//added by naresh
Cypress.Commands.add('enterUsernameToSearch',(data)=>{
    login.nameToBeSearch().type(data.username) 
    login.submitButton().click()
})
//added by naresh
Cypress.Commands.add('enterNewPasswordPage',(newPassword)=>{
    login.NewPasswordPage('#password1').type(newPassword) 
    login.NewPasswordPage('#password2').type(newPassword)
    login.NewPasswordPage('#password_button').click()
    cy.wait(10000)
    login.submitButton().click()
})
//added by naresh
Cypress.Commands.add('enterSecurityQuestionResponse',(securityQuestion)=>{
    var a
    for(let i = 1; i < 3; i++){
    cy.log(i)
    if(i=='1')
    {
        a='2'
    }
    else{
         a='5'
    }
    cy.get(':nth-child('+a+') > label').then($question=>{
        
        if($question.text().includes('What is the name of your favorite pet?'))
        {
            login.securityQuestionResponse(i).type(securityQuestion.favoritePet)   
        }
        if($question.text().includes('What city / town were you born in?'))
        {
            login.securityQuestionResponse(i).type(securityQuestion.bornCity)    
        }
        if($question.text().includes('What is the name of the main character in your favorite book?'))
        {
            login.securityQuestionResponse(i).type(securityQuestion.favoriteCharacter)    
        }
        if($question.text().includes('What was your favorite show as a child?'))
        {
            login.securityQuestionResponse(i).type(securityQuestion.favoriteShow)   
        }
      
          }) 
    }
    login.submitButton().click()
  
})


