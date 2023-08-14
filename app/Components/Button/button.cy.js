const { default: Button } = require("./button")

describe("button render correctly",()=>{



    it("render button",()=>{

        function handleClick(){
            console.log("clicked")
        }
    
        let data = {
            text:"Submit",
            size: small,
            name: "Submit"
           
        }

        cy.mount(<Button size={"small"} clickFunction={handleClick} text={""}/>)

        cy.get("button").contains(data.text);

        cy.get("button").click().should("be.calledOnce")
    })
})