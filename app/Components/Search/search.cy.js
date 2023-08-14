const { default: Search } = require("./search")

describe("Search Test",()=>{
    it("render search works correctly",()=>{
 
        let search={
            filterpage: "subscribed" || "my",
            handleChange: (e)=>{console.log("chnage state function")}
 
         }


        cy.mount(<Search search={search}/>)

        cy.get('input').type("ztc4")
        cy.get("button").should("not.be.visible")
    })

    it("render search all articles",()=>{

        let search={
            filterpage: "all",
            handleChange: (e)=>{console.log("change state function")}
 
         }

         
        cy.get('input').type("Programming")


        cy.get("button").should("be.enabled")

    })
})