import { Application } from 'express';
import bodyParser from 'body-parser'
import cors from 'cors';

export default (app: Application): void => {
  app.use(bodyParser.json());
  app.use(cors());
};
