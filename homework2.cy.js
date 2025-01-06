describe("homework2", ()=>{
    it('Test Alert',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get ('#alertbtn').click()
        cy.get("tr td:nth-child(3)").each(($el,$index,$list)=>{
            const txt =$el.text()
           if(txt.includes("Pune")){
                cy.get("tr td:nth-child(3)").eq($index).next().then(function(price){
                    const p= price.text() 
         cy.log(p)
          })
                cy.get("tr td:nth-child(3)").eq($index).prev().then(function(price){
                   const p= price.text()
                    cy.log(p)
                })

          }  
      

    })
       
       })
    })