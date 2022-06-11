class loginPage {
    usernameInput() {
        return cy.get('[id=username]')
    }

    passwordInput(){
        return cy.get('[id=password]')

    }

    loginBtn() {
        return cy.get('[id=submitBtn]')

    }

    forgottenPasswordLink(){
        return cy.contains('Forgotten Password')
    }

    newuserRegistrationLink(){
        return cy.contains('New User Registration')
    }

    forgottenUsernameLink(){
        return cy.contains('Forgotten User Name')
    }

    activateAccountLink(){
        return cy.contains('Activate Account')
    }
     //added by naresh
     nameToBeSearch()
     {
       return cy.get('#cn')
     }
      //added by naresh
      submitButton()
      {
        return cy.get('#submitBtn')
      }
      //added by naresh
      securityQuestionResponse(elementNameNo)
      {
            return cy.get('#PwmResponse_R_'+elementNameNo)
      }
      //added by naresh
      NewPasswordPage(elementName)
      {
          return cy.get(elementName)
      }


}

export default loginPage