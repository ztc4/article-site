
const { default: User } = require("./user")

 describe("User component test",()=>{
    it("Render User",()=>{

        let user = {
            id:1,
            username: "ztc4",
            articles:9,
            subscribers: 0,
            category:"gaming"
        }
        cy.mount(<User data={user}/>)


        //render the text
        cy.get("h4").contains(user.username)
        
        cy.get("p").contains(user.articles)
        
        cy.get("p").contains(user.subscribers)

        //render image
        cy.get("img")
    })
 })