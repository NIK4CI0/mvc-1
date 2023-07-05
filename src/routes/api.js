import express from 'express';
import ApiController from '../controllers/apiControllers.js';

const route = express.Router();

route
.get("/", ApiController.getAllApis)