const { default: Article } = require("./article")

describe("article test",()=>{
    it("Check if rendered correcly",()=>{

        //You would have errors rendering due to using router

        const data = {
            title: "Hello",
            author: "Zachary Coats",
            posterImage:"",
            timePosted:"",
            category: "Gaming",
          

        }

    //render data

    cy.mount(<Article data={data}/>)

    //check render
    //title
    cy.get('h4').contains(data.title)
    //author render??
    cy.get('p').contains(`Author:${data.author}`)
    //Category renders
    cy.get('p').contains(`Category:${data.category}`)


    // click the wrapper
    cy.get("div").eq(0).click({force:true})

    
})}
)