describe('Teste de Formulário no DemoQA', () => {

  before(() => {
    // Acessar o site
    cy.visit('https://demoqa.com/', { timeout: 10000 }); 
  });

  it('Preenche e submete o formulário com valores aleatórios', () => {
    // Escolher a opção "Forms" na página inicial
    cy.contains('Form').click();

    // Clicar no submenu "Practice Form"
    cy.contains('Practice').click();

    // Preencher o formulário com valores aleatórios
    cy.get('#firstName').type('Isa');
    cy.get('#lastName').type('Tolentino');
    cy.get('#userEmail').type('isa.tolentino@example.com');

    // Selecionar o gênero
    cy.get('input[name="gender"][value="Female"]').check({ force: true });

    // Preencher o número de telefone
    cy.get('#userNumber').type('9999999999');

    // Preencher a data de nascimento
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('May');
    cy.get('.react-datepicker__year-select').select('1990');
    cy.get('.react-datepicker__day--015').click(); // Selecionar o dia 15

    // Preencher Subjects (matérias)
    cy.get('.subjects-auto-complete__value-container').type('Math{enter}');
    
    // Selecionar hobbies
    cy.get('input[type="checkbox"][value="1"]').check({ force: true }); // Sports
    cy.get('input[type="checkbox"][value="2"]').check({ force: true }); // Reading
    cy.get('input[type="checkbox"][value="3"]').check({ force: true }); // Music

    // Upload de arquivo .txt
    const filePath = 'testfile.txt';
    cy.get('#uploadPicture').attachFile(filePath);

    // Preencher o endereço
    cy.get('#currentAddress').type('123 Main St, Test City');

    // Selecionar estado e cidade
    cy.get('#state').click().contains('NCR').click();
    cy.get('#city').click().contains('Delhi').click();

    // Submeter o formulário
    cy.get('#submit').click({ force: true });

    // Verificar se o popup foi aberto
    cy.get('.modal-content').should('be.visible');

    // Fechar o popup
    cy.get('#closeLargeModal').click();
  });
});
