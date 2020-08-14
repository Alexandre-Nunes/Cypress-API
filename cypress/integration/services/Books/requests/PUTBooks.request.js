/// <reference types="cypress" />

const payloadChangeBook = require('../payloads/changeBook.json')

function changeBook(idBook) {
    return cy.request({
        method: 'PUT',
        url: `Books/${idBook}`,
        headers: {
            'Content-Type': 'application/json',
        },
        failOnStatusCode: false,
        body: payloadChangeBook
    })
}

export { changeBook }