const { default: Button } = require("./button")

describe("button render correctly",()=>{



    it("render button",()=>{

        function handleClick(){
            console.log("clicked")
        }
    
        let data = {
            text:"Submit",
            size: "submit",
            name: "submit",
            disabled: false
        }

        cy.mount(<Button data={data} handleClick={handleClick} />)

        cy.get("button").contains(data.text);

        cy.get("button").click().should("be.calledOnce")
    })
})