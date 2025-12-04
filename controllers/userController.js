exports.getProfile = async (req, res, next) => {
  try {
    const { name, email } = req.user;
    res.json({ name, email });
  } catch (err) {
    next(err);
  }
};
