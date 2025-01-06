//describe("homework", ()=>{

//})
//it("Locaters", ()=>{
  //  cy.visit("https://rahulshettyacademy.com/angularpractice/")
    //cy get(selectctor:"[data-test=sign-in-creat-account-link]").click()
    //cy.get("#name").type("Eyerusalem")
//})
describe("homework", () =>{
    beforeEach(()=>{

        cy.visit("https://rahulshettyacademy.com/angularpractice/")
    })

    it("Get Method",()=> {
    //cy.get("#name").type(Name)
    //cy.get("#email").type(Email)
   // cy.get("input#password").type(Password)
    //cy.get("input#confirmpassword").type(comfirmPassword)
    
      // Fill in the form fields

      cy.get(':nth-child(1) > .form-control').type('Eyerusalem Avalos')
      cy.get('input[name="email"]').type('eyerusalembeyene2@gmail.com')
      cy.get('#exampleInputPassword1').type('password123')
    
      // Check the "Love Ice Creams!" checkbox
      cy.get('#exampleCheck1').check()
  
      // Select "male" gender
      cy.get('#exampleFormControlSelect1')
        .select('Female')
      //cy.get('#exampleFormControlSelect1')([value="Female"])
      //cy.get('#exampleFormControlSelect1')[value="male"]).check()
      //cy.get(':nth-child(7) > :nth-child(3)')
      //cy.get('[data-layer="Content"]')
      cy.get('#inlineRadio2').check()
      // Select "Employed" employment status
      //cy.get(':nth-child(3) > .form-check-label').check('Employed')

      //cy.get(':nth-child(3) > .form-check-label').check('Employed')
      cy.get(':nth-child(7) > :nth-child(3)')


      // Enter date of birth
      cy.get(':nth-child(8) > .form-control').type('1993-05-05')
  
      // Submit the form
      cy.contains('Submit').click()
     
      // Verify successful registration (e.g., by checking for a success message)
      //cy.contains('Registration successful!')
    })
  })