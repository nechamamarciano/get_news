import Joi from 'joi';
import { ValidationError } from './error_model';

export interface User {
    email: string;
    preferences: string;
}

export const userValidationSchema = Joi.object({
    email: Joi.string().email().required(),
    preferences: Joi.string().required(),
});

export const validateUser = (user: User) => {
    const result = userValidationSchema.validate(user);
    if(result.error) ValidationError(result.error.message)
}
