const { default: Signup } = require("./page")

describe("Login Page test",()=>{

    it("render",()=>{
        cy.mount(<Signup/>)

        cy.get("h1").contains("Login")

        //Check button is disabled
        cy.get('button[name=submit]').should('be.disabled')

        //Enter Input for names

        cy.get("input[name=fname]").type("Zachary")
        cy.get("input[name=lname]").type("Coats")

        //next form input
        cy.get('button[name=forward]').click()

        //Enter email and age
        cy.get("input[name=email]").type("zachary123@gmail.com")
        cy.get("input[name=age]").type(19)

        //next form input
        cy.get('button[name=forward]').click()


        cy.get("input[name=password]").type("123Zachary")

        cy.get("input[name=confirm-password]").type("123Zachary")

        
        //Check if button is enabkled

        cy.get('button[name=submit]').should('not.be.disabled')
        

        cy.get('button[name=submit]').click()
    })
    
})