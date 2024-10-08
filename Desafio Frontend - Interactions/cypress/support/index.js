Cypress.on('uncaught:exception', (err, runnable) => {
    // Impede que o Cypress falhe o teste por erro não capturado
    return false;
});
