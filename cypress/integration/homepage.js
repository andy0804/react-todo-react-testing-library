describe('render the home page',()=>{
    it('renders correctly',()=>{
        cy.visit('/');
        cy.get("#toDoContainer").should("exist")
    })

    it("allows input box to be used",()=>{
        const newItem = 'newItem';
        cy.get('[data-test=new-todo]').type(`${newItem}{enter}`);
        cy.get('[data-test=to-do-listitem]')
        .should('have.length', 1)
        .last()
        .should('have.text', newItem);

    })
})