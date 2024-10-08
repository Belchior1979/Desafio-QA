const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com', // URL base para os testes
    supportFile: 'cypress/support/commands.js', // Caminho para o arquivo de suporte
    specPattern: 'cypress/integration/**/*.js', // Padrão para os arquivos de teste
    setupNodeEvents(on, config) {
      // Implementar listeners de eventos de Node aqui, se necessário
    },
    viewportWidth: 1280, // Largura da viewport
    viewportHeight: 720, // Altura da viewport
    screenshotOnRunFailure: true, // Captura de tela em caso de falha
    video: false, // Desativa a gravação de vídeo durante os testes
  },
});
