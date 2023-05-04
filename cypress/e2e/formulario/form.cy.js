/// <reference types="cypress" />

describe('Testes para o formulário', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve renderizar 3 inputs', () => {
        cy.get('.sc-gLDzan > input').should('have.length', 3)
    })

    it('Deve preencher os campos corretamente', () => {
        cy.get('input[placeholder="Nome"]').type('Bruno Santos')
        cy.get('input[placeholder="E-mail"]').type('BrunoSantos@teste.com')
        cy.get('input[placeholder="Telefone"]').type('11 1234 12345')
        cy.screenshot('tela-campos-preenchidos')
    })
        // Botão adicionar
    it('Deve adicionar o contato corretamente', () => {
        cy.get('.adicionar').click()
    })

})