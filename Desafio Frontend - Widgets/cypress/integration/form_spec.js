describe('Teste da Progress Bar', () => {
    before(() => {
        // Acessar o site
        cy.visit('https://demoqa.com/');
    });

    it('Deve validar o funcionamento da Progress Bar', () => {
        // Escolher a opção Widgets
        cy.get('#widgets').click();

        // Clicar no submenu Progress Bar
        cy.contains('Progress Bar').click();

        // Clicar no botão Start
        cy.get('#startStopButton').click();

        // Aguarda um pouco antes de parar a progressão
        cy.wait(2000); // Espera 2 segundos (ajuste conforme necessário)

        // Parar antes dos 25%
        cy.get('#startStopButton').click(); // Para a progressão

        // Validar que o valor da progress Bar é menor ou igual a 25%
        cy.get('#progressBar')
            .invoke('text')
            .then((text) => {
                const progressValue = parseInt(text);
                expect(progressValue).to.be.lte(25);
            });

        // Apertar Start novamente
        cy.get('#startStopButton').click();

        // Espera até que a progressão chegue a 100%
        cy.get('#progressBar', { timeout: 10000 }).should('have.text', '100'); // Aguarda até que a barra chegue a 100%

        // Resetar a progress bar
        cy.get('#resetButton').click();

        // Validar que a barra foi resetada
        cy.get('#progressBar').should('have.text', '0');
    });
});
