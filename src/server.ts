import express, { Application } from 'express';

import Routes from './routes';
import errorHandling from './shared/errorHandling';
import middleware from './shared/middleware';

// Create an Express instance
const app: Application = express();

// Add any middleware
middleware(app);

// Set up appropriate routes
Routes(app);

// Add any error handling
errorHandling(app);

export default app;
