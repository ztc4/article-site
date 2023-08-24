const { default: NText } = require("./n-text");

describe("test for the test",()=>{

    it("render test",()=>{

        let data={
            text:"header",
            active: true,
            arrow: false
        }
        cy.mount(<NText data={data}/>)

        cy.get("div")
        .eq(0)

        cy.get("h4")
        .contains(data.text)
        .should("have.class","underline")
        .should("have.class","scale-110")
    })

        it("render test",()=>{

        let data={
            text:"header",
            active: false,
            arrow: true
        }
        cy.mount(<NText data={data}/>)

        cy.get("div")
        .eq(0)

        cy.get("h4")
        .contains(data.text)
        .should("not.have.class","underline")
        .should("not.have.class","drop-shadow")
    })
})