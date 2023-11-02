// Import necessary modules
const { Comment } = require('C:\\Users\\a.manzi\\Desktop\\sequelize-orm-hw\\models'); // Adjust the path as needed.

// Create an array of comment data
const commentData = [
  { text: 'Dattebayo!', postId: 1 },
  { text: 'Sharingan!', postId: 2 },
  // Add more comment data as needed
];

// Create comment records using Sequelize's bulkCreate method
Comment.bulkCreate(commentData)
  .then((createdComments) => {
    console.log('Comments created:', createdComments);
  })
  .catch((error) => {
    console.error('Error creating comments:', error);
  });
