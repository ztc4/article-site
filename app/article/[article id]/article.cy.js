//integration test

const { default: Article } = require("./page")

describe("article page test",()=>{
    it("render screen",()=>{
        let data = {
            title: "Hello",
            author: "Zachary Coats",
            posterImage:"",
            likes:0,
            comments: 0,
            timePosted:"",
            category: "",
            article: [
                {type:"paragraph",
                paragraph: "The first paragraph in the sentence"},
                {type:"image",
                paragraph: "The first paragraph in the sentence"},
                {type:"paragraph",
                paragraph: "the second paragraph"},

            ],
            comments: [

            ]
        }

        cy.mount(<Article/>)

        cy.get('h2').eq(0).contains(data.title);
        cy.get('button[name=back]')
        cy.get('button[name=like]');


        //Profile Information

        cy.get('p').eq(0).contains(`Likes: ${data.likes}`);
        cy.get('p').eq(1).contains(`Comments: ${data.comments}`);
        cy.get('p').eq(2).contains(/Posted/);
        cy.get('p').eq(3).contains(`by: ${data.title}`);

        //Render Article Viewing Options

        cy.get('h4').eq(0).contains("Articles");
        cy.get('h4').eq(1).contains("Comment");
        

    })
})