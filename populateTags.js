// Import necessary modules
const { Tag } = require('C:\\Users\\a.manzi\\Desktop\\sequelize-orm-hw\\models'); // Adjust the path as needed.

// Create an array of tag data
const tagData = [
  { name: 'Ninja' },
  { name: 'Revenge' },
  // Add more tag data as needed
];

// Create tag records using Sequelize's bulkCreate method
Tag.bulkCreate(tagData)
  .then((createdTags) => {
    console.log('Tags created:', createdTags);
  })
  .catch((error) => {
    console.error('Error creating tags:', error);
  });
