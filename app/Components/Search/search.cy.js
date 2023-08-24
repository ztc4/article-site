const { default: Search } = require("./search")

describe("Search Test",()=>{
    it("render search works correctly",()=>{
 
        let search={
            placeholder: "Search for Test",
          
            handleChange: (e)=> e.target.value,
            handleSearch: (e)=> console.log(),
            value:"Red"

 
         }


        cy.mount(<Search data={search}/>)

        cy.get("div").eq(1)
        .should("not.have.class","hover:bg-gray-500")
        

        cy.get('div').should("exist")
        cy.get('input').should("have.value","Red")
       
        
    })

    it("render search all articles",()=>{
        let search={
            placeholder: "Search for Test",
          
            handleSearch: (e)=> console.log(),
            handleChange: (e)=> e.target.value,

 
         }
         cy.mount(<Search data={search}/>)

         
        cy.get('input')
        .should("be.enabled")
        .click()
        .should("have.focus")
        .type("blue")

        cy.get("div>div").eq(0)
        .click()
        


    })
})