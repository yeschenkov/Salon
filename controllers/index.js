const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

const ctrlAuth = require('./auth');
const roleController = require('./role');
const userController = require('./user'); 
const serviceController = require('./service');
const bookingController = require('./booking');
// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

// roles 
router.get('/roles', auth, roleController.getAll);

// users
router.get('/users', userController.getAll);
router.get('/users/:id', userController.getById);
router.put('/users/:id', userController.update);

// services

router.get('/services', serviceController.getAll);
router.get('/services/:id', serviceController.getById);
router.put('/services/:id', serviceController.update);
router.delete('/services/:id', serviceController.delete);
router.post('/services', serviceController.create);

// booking

router.get('/bookings', auth, bookingController.getAll);
router.get('/bookings/:id', bookingController.getById);
router.put('/bookings/:id', bookingController.update);
router.delete('/bookings/:id', bookingController.delete);
router.post('/bookings', bookingController.create);
module.exports = router;