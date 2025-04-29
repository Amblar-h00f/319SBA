// Seed data for Users
const sampleUsers = [
    { email: 'user1@example.com', age: 25 },
    { email: 'user2@example.com', age: 30 }
  ];
  
  await User.insertMany(sampleUsers);



// routes/test.mjs
router.post('/test-invalid-user', async (req, res) => {
    const invalidUser = new User({ age: 10 }); // Missing email
    try {
      await invalidUser.save();
    } catch (err) {
      res.status(400).json({
        validationError: err.errors.email.message
      });
    }
  });