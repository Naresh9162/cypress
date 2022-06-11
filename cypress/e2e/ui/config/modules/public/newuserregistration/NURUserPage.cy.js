class NURUserPage {

    mail(){
        return cy.get('[id=mail]')
    }

    givenName(){
        return cy.get('[id=givenName]')
    }

    lastName(){
        return cy.get('[id=sn]')
    }

    password1(){
        return cy.get('[id=password1]')
    }

    password2(){
        return cy.get('[id=password2]')
    }

    submitBtn(){
        return cy.get('[id=submitBtn]')
    }

}
export default NURUserPage