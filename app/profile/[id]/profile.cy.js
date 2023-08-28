const { default: Profile } = require("./page")

describe("Profile Integration test",()=>{

    it("render properly",()=>{
        cy.mount(<Profile/>)

        let data={
            background: "",
            avatar: "",
            username: "",
            category: "",
            articles: 0,
            subscribers: 0,
            id: userId,
            lastPost: "",
            About: ""

        }




        cy.get('h2').eq(0).contains(data.username);
        cy.get('button[name=subscriber]').contains("Subscribe");


        //Profile Information

        cy.get('p').eq(0).contains(`${data.category} Account`);
        cy.get('p').eq(1).contains(`${data.subscribers} Subscribers`);
        cy.get('p').eq(2).contains(`${data.articles} Articles Posted`);
        cy.get('p').eq(3).contains(/Posted/);

        //Render Article Viewing Options

        cy.get('h4').eq(0).contains("Latest");
        cy.get('h4').eq(1).contains("Most Liked");
        cy.get('h4').eq(2).contains("Favorite");

    })
})