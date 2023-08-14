const { default: Input } = require("./input")

describe("Test your input",()=>{


   it("test your input",()=>{ 
    let input = {
        placeholder: "Enter Username",
        handleChange: (e)=>{},
        name:"username"
    }
    
    cy.mount(<Input data={input}/>)

    let username = cy.get('#input');
    username.type("ztc4");
    username.should("have.value", "ztc4")})
})