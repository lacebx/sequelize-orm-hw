// Import necessary modules
const { User } = require('C:\\Users\\a.manzi\\Desktop\\sequelize-orm-hw\\models'); 
// Create an array of user data
const userData = [
  { name: 'Naruto Uzumaki', email: 'naruto@example.com' },
  { name: 'Sasuke Uchiha', email: 'sasuke@example.com' },
  { name: 'Luffy Monkey D.', email: 'luffy@example.com' },
  { name: 'Goku Kakarot', email: 'goku@example.com' },
  { name: 'Mikasa Ackerman', email: 'mikasa@example.com' },
];

// Create user records using Sequelize's bulkCreate method
User.bulkCreate(userData)
  .then((createdUsers) => {
    console.log('Users created:', createdUsers);
  })
  .catch((error) => {
    console.error('Error creating users:', error);
  });
