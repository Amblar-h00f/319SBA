router.get('/:id/shells', async (req, res) => {
try {
 const shells = await Shell.find({ owner: req.params.id });
    res.json(shells);
} catch (error) {
    res.status(500).json({ error: error.message });
  }
  });
  
  router.patch('/:id/role', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: { role: req.body.role } },
      { new: true, runValidators: true }
    );
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  });
  