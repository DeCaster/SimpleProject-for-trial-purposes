import { body, param, validationResult } from 'express-validator';
import { BadRequestError, NotFoundError, UnauthenticatedError, UnauthorizedError } from '../Errors/customErrors.js';
import mongoose from 'mongoose';
import User from '../models/UserModel.js';

const withValidationErrors = (validateValues) => {
    return [
        validateValues,
        async (req, res, next) => {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                const errorMessages = errors.array().map((error) => error.msg);
                if (errorMessages.some(msg => msg.startsWith('No job'))) {
                    throw new NotFoundError(errorMessages);
                }
                if(errorMessages[0].startsWith('not authorized')){
                    throw new UnauthorizedError('not authorized to access this route')
                }

                return res.status(400).json({ errors: errorMessages });
            }

            next();
        },
    ];
};

export const validateRegisterInput = withValidationErrors([
    body('name').notEmpty().withMessage('Name is required'),
    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format')
        .custom(async (email) => {
            const user = await User.findOne({ email });

            if (user) {
                throw new BadRequestError('Email already exists');
            }
            return true;
        }),
    body('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
    body('lastName').notEmpty().withMessage('last name is required'),
]);


export const validateLoginInput = withValidationErrors([
    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format'),
    body('password')
        .notEmpty().withMessage('Password is required'),

]);


export const validateUpdateUserInput = withValidationErrors([
    body('name').notEmpty().withMessage('Name is required'),
    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format')
        .custom(async (email) => {
            const user = await User.findOne({ email });
            if (user && user._id.toString() !== req.user.userId) {
                throw new BadRequestError('Email already exists');
            }
        }),
    body('location').notEmpty().withMessage('Location is required'),
    body('lastName').notEmpty().withMessage('last name is required'),

])
