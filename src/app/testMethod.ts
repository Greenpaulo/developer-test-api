import { Request, Response } from 'express';

export default async (req: Request, res: Response): Promise<void> => {
  res.json({ message: 'Welcome to the Developer Test' }).end();
};
