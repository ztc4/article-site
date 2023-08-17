const { default: Input } = require("./input")

describe("Test your input",()=>{


   it("test your input",()=>{ 
    let input = {
        placeholder: "Enter Username",
        type:"text",
        id:"username",
        name:"username"
    }
   let handleChange = (e)=>{};
    
    cy.mount(<Input data={input} handleChange={handleChange}/>)

    let username = cy.get('#input');
    username.type("ztc4");
    username.should("have.value", "ztc4")})
})