describe('Automação de Web Tables', () => {
    before(() => {
        // Acessar o site
        cy.visit('https://demoqa.com/');
    });

    it('Deve criar, editar e deletar um registro', () => {
        // Escolher a opção Elements
        cy.get('#elements').click();

        // Clicar no submenu Web Tables
        cy.contains('Web Tables').click();

        // Criar um novo registro
        cy.get('#addNewRecordButton').click();
        cy.get('#firstName').type('John');
        cy.get('#lastName').type('Doe');
        cy.get('#userEmail').type('john.doe@example.com');
        cy.get('#age').type('30');
        cy.get('#salary').type('50000');
        cy.get('#department').type('Engineering');
        cy.get('#submit').click();

        // Editar o novo registro criado
        cy.get('.rt-tr-group').contains('John Doe').parent().find('button').contains('Edit').click();
        cy.get('#salary').clear().type('60000');
        cy.get('#submit').click();

        // Verificar se o registro foi editado
        cy.get('.rt-tr-group').contains('John Doe').parent().find('div').contains('60000').should('be.visible');

        // Deletar o novo registro criado
        cy.get('.rt-tr-group').contains('John Doe').parent().find('button').contains('Delete').click();

        // Verificar se o registro foi deletado
        cy.get('.rt-tr-group').contains('John Doe').should('not.exist');
    });

    it('Deve criar e deletar 12 novos registros de forma dinâmica', () => {
        const records = [];
        for (let i = 1; i <= 12; i++) {
            records.push({
                firstName: `User${i}`,
                lastName: `Last${i}`,
                email: `user${i}@example.com`,
                age: 20 + i,
                salary: 30000 + (i * 1000),
                department: `Department${i}`
            });
        }

        // Criar registros dinamicamente
        records.forEach((record) => {
            cy.get('#addNewRecordButton').click();
            cy.get('#firstName').type(record.firstName);
            cy.get('#lastName').type(record.lastName);
            cy.get('#userEmail').type(record.email);
            cy.get('#age').type(record.age);
            cy.get('#salary').type(record.salary);
            cy.get('#department').type(record.department);
            cy.get('#submit').click();
        });

        // Deletar todos os novos registros criados
        records.forEach((record) => {
            cy.get('.rt-tr-group').contains(record.firstName).parent().find('button').contains('Delete').click();
        });

        // Verificar se todos os registros foram deletados
        records.forEach((record) => {
            cy.get('.rt-tr-group').contains(record.firstName).should('not.exist');
        });
    });
});
