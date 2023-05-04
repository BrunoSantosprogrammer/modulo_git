/// <reference types="cypress" />

describe('Testes para os contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve renderizar os contatos adicionados', () => {
        cy.get('.sc-iAEyYk > :nth-child(1)')
        cy.screenshot('tela-contatos')
    })

    it('Deve renderizar os 3 dados dos inputs corretamente', () => {
        cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > li').should('have.length', 3)
        cy.screenshot('tela-dados-contatos')
    })

    it('Deve renderizar o contatos adicionados', () => {
        cy.get('.sc-iAEyYk > :nth-child(3)')
    })

        // Botão editar
    it('Deve editar o contato corretamente', () => {
    cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
    })
        // Botão salvar
    it('Deve deletar o contato corretamente', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
    })
        // Botão cancelar
    it('Deve deletar o contato corretamente', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
    })
        // Botão deletar
    it('Deve deletar o contato corretamente', () => {
    cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
    })
})