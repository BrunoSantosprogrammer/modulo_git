/// <reference types="cypress" />

describe('Testes para o header', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve renderizar o título da página', () => {
        cy.get('h1')
        cy.screenshot('tela-título-página')
    })

    it('Deve renderizar o sub-título da página', () => {
        cy.get('h2')
    })

})