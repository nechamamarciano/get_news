import { Request, Response, NextFunction } from 'express';
import { logger } from '../01-utils/logger';


export const catchAll = (err: any, req: Request, res: Response, nextFunc: NextFunction) => {

    console.log(err); //console

    logger(err.message); //logger

    res.status(err.status).send(err.message); //send to the front
}