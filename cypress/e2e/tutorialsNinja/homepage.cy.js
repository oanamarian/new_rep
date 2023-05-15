

describe('Homepage', function()
{
    this.beforeEach(() =>
    {
        //cy.VisitURL();
        cy.visit('/');
    })

it ('homepage assignement', () =>
{
    //cy.visit('/');
    //cy.url().should('eq', 'https://tutorialsninja.com/demo/');
    cy.url().should('include', '//tutorialsninja');
    
    cy.get('h1 > a').should('be.visible').should('have.text', 'Qafox.com');
    //cy.get('h1 > a').should('be.visible')
    //cy.get('h1 > a').should('have.text', 'Qafox.com');
    cy.get('.form-control').should('be.visible');
    cy.get('.form-control').type('testing');
    cy.get('.input-group-btn > .btn').click();
    assert.equal
})


//adjusting with sintax - Homepage without Login yet

it ('dropdown presence hover and click', () =>
{
    cy.get('.nav > :nth-child(1) > .dropdown-toggle').should('be.visible');
    cy.get('.dropdown-menu').eq(3).invoke('show');
    cy.contains('PC (0)').click();
    cy.get('#content').contains('PC');

    cy.get('.nav > :nth-child(2) > .dropdown-toggle').should('exist');
    cy.get('.nav > :nth-child(2) > .dropdown-toggle').contains('Laptops & Notebooks');
    cy.get('.dropdown-menu').eq(4).invoke('show');
    cy.contains('Show AllLaptops & Notebooks').click();
    cy.get('#content').should('contain', 'Laptops & Notebooks');


    cy.get(':nth-child(3) > .dropdown-toggle').should('contain', 'Components');
    cy.get('.dropdown-menu').eq(5).invoke('show');
    cy.contains('Monitors (2)').click();

    cy.get('.nav > :nth-child(4) > a').should('be.visible');

    cy.get('.nav > :nth-child(5) > a').should('exist');

    cy.get(':nth-child(6) > a').should('exist');

    cy.get(':nth-child(7) > a').should('be.visible');

    cy.get(':nth-child(8) > .dropdown-toggle').should('exist');



})
})