// const Joi = require('joi');
import Joi from 'joi';

const createBugSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),

  description: Joi.string()
    .allow('', null)
    .required(),

  status: Joi.string()
    .valid('Open', 'In Progress', 'Resolved', 'Closed')
    .default('Open'),

  priority: Joi.string()
    .valid('Low', 'Medium', 'High')
    .default('Medium'),

  reporter: Joi.string()
    .min(2)
    .max(50)
    .required()
});

const updateBugSchema = Joi.object({
  title: Joi.string().min(3).max(100),

  description: Joi.string()
    .allow('', null),

  status: Joi.string()
    .valid('Open', 'In Progress', 'Resolved', 'Closed'),

  priority: Joi.string()
    .valid('Low', 'Medium', 'High'),

  reporter: Joi.string()
    .min(2)
    .max(50)
});

export{
  createBugSchema,
  updateBugSchema
};