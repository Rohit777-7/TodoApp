const rateLimit = require('express-rate-limit');

const authLimiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX) || 10, // limit per window
  message: { message: 'Too many requests from this IP, please try again later.' }
});

module.exports = { authLimiter };
