import * as GETTermosSugeridos from '../requests/GETAcTermos.request'

describe('GET Termos Sueridos', () => {
  it('Listar os termos sugeridos', () => {
    GETTermosSugeridos.termosSugeridos().should((response) => {
          // cy.log(response.status)
          // cy.log(response.statusText)
          // cy.log(response.body.queries)
          // cy.log(response.body.products)
                  
          expect(response.status).to.eq(200)	
          expect(response.body).to.be.not.null
          expect(response.body.searchId).to.be.not.null
          expect(response.body.queries).to.have.length(5)
        })
    })
})