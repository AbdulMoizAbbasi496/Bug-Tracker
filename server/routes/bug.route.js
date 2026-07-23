// const express = require('express');
// const { createbugSchema, updatebugSchema } = require('../schemas/bug.schema');
// const bugController = require('../controllers/bug.controller');
// const validateRequest = require('../middlewares/validate-request.middleware');

import express from 'express';
const router = express.Router();
import bugController from '../controllers/bug.controller.js';
import validateRequest from '../middlewares/validate-request.middleware.js';
import { createBugSchema, updateBugSchema } from '../schemas/bug.schema.js';

router.get('/', bugController.getAll);
router.post('/', validateRequest(createBugSchema), bugController.create);
router.get('/:id', bugController.getOne);
router.put('/:id', validateRequest(updateBugSchema), bugController.update);
router.delete('/:id', bugController.remove);

export default router;