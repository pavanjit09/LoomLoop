import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const protect = async (req, res, next) => {
  let token;
  
  // 1. Get token from cookies
  token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ 
      message: 'Not authorized, no token' 
    });
  }

  try {
    // 2. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // 3. Get user from token
    req.user = await User.findById(decoded.id).select('-password');
    
    next();
  } catch (err) {
    return res.status(401).json({ 
      message: 'Not authorized, invalid token' 
    });
  }
};