
class BasePage{

   generateRandomID(){
    const uuid = () => Cypress._.random(0,1e6)
    const id =uuid()
    return id
}
}

export default BasePage