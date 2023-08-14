//integration test

const { default: Login } = require("./page")

describe("Login Page test",()=>{

    it("render",()=>{
        cy.mount(<Login/>)

        //Check if header rendered
        cy.get("h1").contains("Login")

        //Check button is disabled
        cy.get('button[name=login]').should('be.disabled')

        //Enter Information
        cy.get("input[name=username]").type("ztc4")
        cy.get("input[name=password]").type("123Zachary")

        
        //Check if button is enabled
        cy.get('button[name=login]').should('not.be.disabled')
        

        //Click on the button
        cy.get('button[name=login]').click()
    })
    
})