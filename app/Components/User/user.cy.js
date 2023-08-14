const { contains } = require("cypress/types/jquery")
const { default: User } = require("./user")

 describe("User component test",()=>{
    it("Render User",()=>{

        let user = {
            username: "ztc4",
            avatar: "",
            subscribers: 0,
            lastPost:"",
            articles: 0
        }
        cy.mount(<User data={user}/>)


        //render the text
        cy.get("h4").contains(user.username)
        cy.get("p").contains(user.articles)
        cy.get("p").contains(user.lastPost)
        cy.get("p").contains(user.subscribers)

        //render image
        cy.get("img")
    })
 })