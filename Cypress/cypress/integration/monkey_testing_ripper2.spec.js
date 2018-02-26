describe('Los estudiantes under monkeys', function() {
    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('https://losestudiantes.co');
        cy.contains('Cerrar').click();
        cy.wait(1000);
        randomEvent(10);
    })
})

function randomEvent(monkeysLeft) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var monkeysLeft = monkeysLeft;
    var random = getRandomInt(0,4);
    if(monkeysLeft > 0) {
      cy.log("random ......."+random);
        if(random == 0){
          cy.get('button').then($links => {
              var randomLink = $links.get(getRandomInt(0, $links.length));
              if(!Cypress.dom.isHidden(randomLink)) {
                  cy.wrap(randomLink).click({force: true});
                  monkeysLeft = monkeysLeft - 1;
              }

              setTimeout(randomEvent(monkeysLeft), 2000  );
          });
      }else if(random == 1){
        cy.get('input').then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length));
            if(!Cypress.dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click().type("ALGO");
                monkeysLeft = monkeysLeft - 1;
            }

            setTimeout(randomEvent(monkeysLeft), 2000  );
        });
      }else if(random == 2){
        cy.get('select').then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length));
            if(!Cypress.dom.isHidden(randomLink)) {
                cy.wrap(randomLink).children();
                monkeysLeft = monkeysLeft - 1;
            }

            setTimeout(randomEvent(monkeysLeft), 2000  );
        });
        }else if(random == 3){
          cy.get('a').then($links => {
              var randomLink = $links.get(getRandomInt(0, $links.length));
              if(!Cypress.dom.isHidden(randomLink)) {
                  cy.wrap(randomLink).click({force: true});
                  monkeysLeft = monkeysLeft - 1;
              }
              setTimeout(randomEvent(monkeysLeft), 2000  );
          });
      }
      cy.log("monkeys2.."+monkeysLeft);
      //setTimeout(randomEvent, 1000, monkeysLeft);
    }
}
