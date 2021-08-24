import { Application } from 'express';
import testRoutes from './routes/test.routes';
import creditRoutes from './routes/credit.routes';

export default (app: Application): void => {
  testRoutes(app);
  creditRoutes(app);
};
