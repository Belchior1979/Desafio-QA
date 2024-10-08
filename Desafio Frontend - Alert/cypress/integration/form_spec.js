describe('Teste de Janela do Navegador', () => {

  before(() => {
    // Acessar o site
    cy.visit('https://demoqa.com/', { timeout: 10000 }); 
  });

  it('Deve validar a mensagem e fechar a janela', () => {
    
    cy.contains('Alerts').click();    
    cy.contains('Browser').click();   
    cy.get('#windowButton').click({ force: true });   

        // Verificar se a URL da nova janela é a correta
        cy.url().should('eq', 'https://demoqa.com/sample');

        // Validar o texto na nova página
        cy.contains('This is a sample page').should('be.visible');

        cy.window().then((win) => {
          // Fechar a nova janela
          win.close();
      });

        // Voltar para a janela anterior
        cy.go('back');    

  });
});
