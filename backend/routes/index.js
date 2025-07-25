const express = require('express');
const router = express.Router();

// Import route modules
const authRoutes = require('./api/auth');
const userRoutes = require('./api/users');
const { router: roomsRouter } = require('./api/rooms');
const fileRoutes = require('./api/files');
const messageRoutes = require('./api/message');

// API documentation route
router.get('/', (req, res) => {
  res.json({
    name: 'Chat App API',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    endpoints: {
      auth: {
        base: '/auth',
        routes: {
          register: { method: 'POST', path: '/register' },
          login: { method: 'POST', path: '/login' },
          logout: { method: 'POST', path: '/logout' },
          verifyToken: { method: 'GET', path: '/verify-token' },
          refreshToken: { method: 'POST', path: '/refresh-token' }
        }
      },
      users: '/users',
      rooms: '/rooms',
      files: '/files',
      messages: '/messages',
      ai: '/ai'
    }
  });
});

// Mount routes
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/rooms', roomsRouter);  // roomsRouter로 변경
router.use('/files', fileRoutes);
router.use('/messages', messageRoutes);

module.exports = router;