/// <reference types="cypress" />

function termosSugeridos() {
    return cy.request({
        method: 'GET',
        url: 'https://api.linximpulse.com/engage/search/v3/autocompletes?apiKey=stz-core&secretKey=e0ZX2wetOk2ZY8ZNGRasLw==&prefix=bota',
        failOnStatusCode: false,
    })
  }
  
  export { termosSugeridos }
  