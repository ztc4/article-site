//integration test

const { default: Login } = require("./page")

describe("Login Page test",()=>{

    it("render",()=>{
        cy.mount(<Login/>)
       

        //Check if header rendered
        cy.get("h1").contains("Login")

        // //Check button is disabled

        // //Enter Information
        let username = cy.get("input[name=username]")
        username.should("have.value","")
        
        username.type("ztc4")

        username.should("have.value","ztc4")

        let password = cy.get("input[name=password]")

        password.should("have.value", "")
        
        password.type("Ogswag78")

        
        // //Check if button is enabled
        cy.get('button[name=login]').should('not.be.disabled')
        

        // //Click on the button
        cy.get('button[name=login]').click()
    })
    
})