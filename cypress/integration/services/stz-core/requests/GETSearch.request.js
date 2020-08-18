/// <reference types="cypress" />

function busca() {
    return cy.request({
        method: 'GET',
        url: 'https://api.linximpulse.com/engage/search/v3/search?apiKey=stz-core&secretKey=e0ZX2wetOk2ZY8ZNGRasLw==&terms=tenis',
        failOnStatusCode: false,
    })
  }
  
  export { busca }
  