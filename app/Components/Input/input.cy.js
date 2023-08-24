const { default: Input } = require("./input")

describe("Test your input",()=>{


   it("test your input",()=>{ 
    let input = {
        title:"title",
        placeholder: "Enter Username",
        type:"text",
        id:"username",
        name:"username",
        // value:"",
        handleChange:(e)=>  e.target.value
    }
    
    cy.mount(<Input data={input} />)

    cy.get(".input").should("have.class","input")

    let username = cy.get('input').click();

    username.should("have.focus")

    username.type("ztc4");
    
    username.should("have.value", "ztc4")

    username.type("546")

    username.should("have.value", "ztc4546")

    username.clear()

    username.should("have.value", "")


    username.type("red")

    username.should("not.have.value", "ztc4546")

    username.should("have.value", "red")




    }

    ,("test the search div",()=>{



        let input = {
            title:"title",
            placeholder: "Enter Username",
            type:"text",
            id:"username",
            name:"username",
            // value:"",
            handleChange:(e)=>  e.target.value,
            handleSearch: ()=>{}
        }

        cy.mount(<Input data={input} />)


        let searchButton = cy.get("div").eq(0)
        
        searchButton.should("not.be.visible")

    })

)
})