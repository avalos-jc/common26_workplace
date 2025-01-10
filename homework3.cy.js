import "cypress-iframe"; 

describe("Handling Iframe and Fixure", ()=>{
    let data
    before(()=>{
        
        cy.fixture("data").then(function(x){
            d=x
        })


    })

it('Data driving(fixture)', () => {
    cy.visit("https://rahulshettyacademy.com/angularpractice/")
   
      //cy.get(':nth-child(1) > .form-control').type("Eyerusalem") //optinal
     cy.get(':nth-child(1) > .form-control').type("d.Name")// for name input
     cy.wait(2000)
    
     cy.get('input[name="Email"]').type("d.Email") // for Email input
    
     cy.get('#exampleInputPassword1').type("d.Password") //for Password

     cy.get('#exampleCheck1').check() //for checkbox
    
     cy.get('#exampleFormControlSelect1').select("d.Gender") // select Gender(Female)

     cy.get(':nth-child(7) > :nth-child(3)').type("d(0)") //// Select "student" employment status

     
     cy.get(':nth-child(8) > .form-control').type("d.DOB") // Enter date of birth
    
     
     cy.contains('Submit').click() // Submit the form
     


   
    



})


it("Iframe", () => {


    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.frameLoaded("#courses-iframe")   //used to load the Iframe
    
   //<a href="mentorship">Mentorship</a> //css==tagname[attribute='value]

    cy.iframe().find("a[href='mentorship']").eq(0).click() 

    


});

})