import { Application } from 'express';
import asyncMethod from '../shared/async-method';
import test from '../app/testMethod';

export default (app: Application): void => {
  app.get('/test', asyncMethod(test));
};
