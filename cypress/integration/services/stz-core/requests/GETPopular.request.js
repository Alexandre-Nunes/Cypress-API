/// <reference types="cypress" />

function topBuscas() {
    return cy.request({
        method: 'GET',
        url: 'https://api.linximpulse.com/engage/search/v3/autocompletes/popular?apiKey=stz-core&secretKey=e0ZX2wetOk2ZY8ZNGRasLw==',
        failOnStatusCode: false,
    })
  }
  
  export { topBuscas }
  