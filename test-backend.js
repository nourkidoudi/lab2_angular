// Script simple pour tester le backend
const http = require('http');

console.log('Test du backend...\n');

// Test GET /api/appareils
const options = {
  hostname: 'localhost',
  port: 3001,
  path: '/api/appareils',
  method: 'GET'
};

const req = http.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('✅ GET /api/appareils - Status:', res.statusCode);
    console.log('Response:', JSON.parse(data));
    console.log('\n✅ Backend fonctionne correctement!');
    process.exit(0);
  });
});

req.on('error', (error) => {
  console.error('❌ Erreur:', error.message);
  console.log('\nAssurez-vous que le serveur est lancé avec: node server');
  process.exit(1);
});

req.end();
