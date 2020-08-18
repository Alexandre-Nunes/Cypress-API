import * as GETSearch from '../requests/GETSearch.request'

describe('GET Produtos Sueridos', () => {
  it('Listar os produtos sugeridos', () => {
    GETSearch.busca ().should((response) => {
          // cy.log(response.status)
          // cy.log(response.statusText)
          // cy.log(response.body.products)
         
          expect(response.status).to.eq(200)	
          expect(response.body).to.be.not.null
          expect(response.body.banners).to.be.not.null
          expect(response.body.filters).to.be.not.null
          expect(response.body.pagination).to.be.not.null
          expect(response.body.products).to.be.not.null
          expect(response.body.products).to.have.length(20)
          expect(response.body.queries).to.be.not.null
          expect(response.body.requestId).to.be.not.null
          expect(response.body.searchId).to.be.not.null
          expect(response.body.size).to.be.not.null
          expect(response.body.sort).to.be.not.null
          expect(response.body.suggestions).to.be.not.null

        
        })
    })
})