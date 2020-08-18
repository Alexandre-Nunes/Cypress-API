import * as GETProdutosSugeridos from '../requests/GETAcProdutos.request'

describe('GET Produtos Sueridos', () => {
  it('Listar os produtos sugeridos', () => {
    GETProdutosSugeridos.produtosSugeridos().should((response) => {
          // cy.log(response.status)
          // cy.log(response.statusText)
          // cy.log(response.body.products)
         
          expect(response.status).to.eq(200)	
          expect(response.body).to.be.not.null
          expect(response.body.searchId).to.be.not.null
          expect(response.body.products).to.have.length(5)
        })
    })
})