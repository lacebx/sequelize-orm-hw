// Import necessary modules
const { Post } = require('C:\\Users\\a.manzi\\Desktop\\sequelize-orm-hw\\models'); // Adjust the path as needed.

// Create an array of post data
const postData = [
  { title: 'Believe It!', content: 'I will become Hokage!', userId: 1 },
  { title: 'Revenge', content: 'I will avenge my clan!', userId: 2 },
  // Add more post data as needed
];

// Create post records using Sequelize's bulkCreate method
Post.bulkCreate(postData)
  .then((createdPosts) => {
    console.log('Posts created:', createdPosts);
  })
  .catch((error) => {
    console.error('Error creating posts:', error);
  });
