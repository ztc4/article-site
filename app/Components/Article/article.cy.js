const { default: Article } = require("./article")

describe("article test",()=>{
    it("Check if rendered correcly",()=>{

        const data = {
            title: "Hello",
            author: "Zachary Coats",
            posterImage:"",
            timePosted:"",
            category: "",
            article: [
                {type:"paragraph",
                paragraph: "The first paragraph in the sentence"},
                {type:"image",
                paragraph: "The first paragraph in the sentence"},
                {type:"paragraph",
                paragraph: "the second paragraph"},

            ]
        }

    //render data

    cy.mount(<Article data={data}/>)

    //check render
    //title
    cy.get('h4').contains(data.title)

    //first paragraph
    cy.get('p').contains(data.article[0].paragraph)
    //author render??
    cy.get('p').contains(data.author)
    //Category renders
    cy.get('p').contains(data.category)
    // click the wrapper
    cy.get("#article-component-wrapper").click()

    
})}
)