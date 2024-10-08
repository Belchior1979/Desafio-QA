describe('Teste de Interações - Sortable', () => {
    before(() => {
        // Acessar o site
        cy.visit('https://demoqa.com/');
    });

    it('Deve ordenar os elementos na ordem crescente', () => {
        // Escolher a opção Interactions
        cy.get('#interaction').click();

        // Clicar no submenu Sortable
        cy.contains('Sortable').click();

        // Arrastar e soltar os elementos na ordem crescente
        const elements = [
            'One',
            'Two',
            'Three',
            'Four',
            'Five',
            'Six',
            'Seven',
            'Eight',
            'Nine',
            'Ten'
        ];

        // Iterar sobre os elementos e ordená-los
        elements.forEach((element, index) => {
            cy.get('.vertical-list-container .list-group-item')
                .contains(element)
                .drag('.vertical-list-container .list-group-item', {
                    force: true,
                    position: 'top'
                });
        });

        // Validação da ordem final dos elementos
        cy.get('.vertical-list-container .list-group-item')
            .each(($el, index) => {
                expect($el.text().trim()).to.equal(elements[index]);
            });
    });
});
