const { default: Signup } = require("./page")


//ERRORS With Page click its getting backward and forward mixed up
describe("Login Page test",()=>{

    it("render",()=>{
        cy.mount(<Signup/>)

        cy.get("h1").contains("Signup")

        //first page
        let submit = cy.get('button[name=signup]').should('be.enabled');
         let fname = cy.get("input[name=fname]");
        let lname = cy.get("input[name=lname]");
        let backward = cy.get("button[name=backward]");
        let forward = cy.get('button[name=forward]');

        backward.should("not.be.disabled")

        fname
        .type("Michael")
        .should("have.value","Michael")

        lname
        .type("Reed")
        .should("have.value","Reed")

        forward.click()




        //second page
        let age = cy.get("input[name=age]").should("be.visible")
        let email = cy.get("input[name=email]")

        forward.click()
        let username = cy.get("input[name=username]")
        let password = cy.get("input[name=password]")
        let confirmPassword = cy.get("input[name=confirm]")


        ///third page
        username.type("guest account")
        password.type("hello")
        confirmPassword.type("red")

        backward.click({force:true})
        
        //next form input
        



        
        //Check if button is enabkled

        submit.should('not.be.disabled')
        
    })
    
})