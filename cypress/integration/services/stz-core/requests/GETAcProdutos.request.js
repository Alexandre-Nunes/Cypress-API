/// <reference types="cypress" />

function produtosSugeridos() {
    return cy.request({
        method: 'GET',
        url: 'https://api.linximpulse.com/engage/search/v3/autocompletes/products?apiKey=stz-core&secretKey=e0ZX2wetOk2ZY8ZNGRasLw==&terms=bota',
        failOnStatusCode: false,
    })
  }
  
  export { produtosSugeridos }
  