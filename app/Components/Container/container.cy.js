const { default: Container } = require("./container")

describe("container component test",()=>{
    it("render container",()=>{
        let data = {
            header:"New articles created today"
        }



        cy.mount(<Container/>)


        cy.get("h4").eq(0).contains("")

        cy.get('#container')
    })
})