import { NextFunction, Request, Response } from 'express';

export default (
  callback: (Request, Response, NextFunction) => Promise<void>
) => (req: Request, res: Response, next: NextFunction): Promise<void> =>
  callback(req, res, next).catch(next);
