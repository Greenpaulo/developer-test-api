import { Application } from 'express';
import getCreditInfo from '../controllers/credit';

export default (app: Application): void => {
  app.post('/credit-search', getCreditInfo);
};