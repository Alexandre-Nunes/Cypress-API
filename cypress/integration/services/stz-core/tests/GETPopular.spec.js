import * as GETTopBuscas from '../requests/GETPopular.request'

describe('GET TopBuscas', () => {
  it('Listar termos mais buscados', () => {
    GETTopBuscas.topBuscas().should((response) => {
          // cy.log(response.status)
          // cy.log(response.statusText)
          // cy.log(response.body.queries)
          
          expect(response.status).to.eq(200)	
          expect(response.body).to.be.not.null
          expect(response.body.searchId).to.be.not.null
          expect(response.body.queries).to.have.length(10)
        })
    })
})