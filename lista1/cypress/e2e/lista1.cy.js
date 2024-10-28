describe('Testes da interface da Wiki do DnD', () => {

    it('Acessar a página da wiki', () => {
        cy.visit('https://dnd5e.wikidot.com')
        cy.contains('Welcome to this Dungeons & Dragons 5th Edition wiki.')
    })

    it('Clicar no link para acessar a linhagem elfo', () => {
        cy.visit('https://dnd5e.wikidot.com')
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > ul > :nth-child(3) > a').click()
        cy.contains('Elf')
    })

    it('Clicar no link para acessar as magias de bardo', () => {
        cy.visit('https://dnd5e.wikidot.com')
        cy.get('[href="/spells:bard"]').click()
        cy.contains('Bard Spell List')
    })

    it('Clicar no link para acessar o antecedente de sábio', () => {
        cy.visit('https://dnd5e.wikidot.com')
        cy.get('[href="/background:sage"]').click()
        cy.contains('Background: Sage')
    })

    it('Clicar no link para acessar as informações do colégio da eloquencia do bardo', () => {
        cy.visit('https://dnd5e.wikidot.com')
        cy.get('[href="/bard:eloquence"]').click()
        cy.contains('Bard: College of Eloquence')
    })

    it('Garantir que o nome da linhagem Dragonborn não está escrito errado', () => {
        cy.visit('https://dnd5e.wikidot.com')
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > ul > :nth-child(1) > a').should('not.contain', 'Dragonborne')
    })
})