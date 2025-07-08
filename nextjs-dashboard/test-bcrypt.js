const bcrypt = require('bcryptjs');
(async function testHash() {
  const password = 'mypassword';
  const hashed = await bcrypt.hash(password, 10);
  const match = await bcrypt.compare('mypassword', hashed);
  console.log('Hashed Password:', hashed);
  console.log('Password Match:', match);
})();
z

