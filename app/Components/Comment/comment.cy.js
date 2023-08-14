const { default: Comment } = require("./comment")

describe("Render comment correctly",()=>{
    it("render comment correctly",()=>{

        let comment = {
            avatar: "",
            poster: "ztc4",
            comment:" You should really test the component correctly",
            likes: 10
        }

        //render component
        cy.mount(<Comment data={comment}/>)
        cy.get("h4").contains(comment.poster)
        cy.get('p').contains(comment.comment)
        cy.get('p').contains(comment.likes)
    })
})