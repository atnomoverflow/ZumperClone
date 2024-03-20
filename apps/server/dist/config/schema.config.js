"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envSchema = void 0;
const Joi = require("joi");
exports.envSchema = Joi.object({
    NODE_ENV: Joi.string()
        .valid('development', 'production', 'test', 'provision')
        .default('development'),
    PORT: Joi.number().default(8000),
    DB_PORT: Joi.number().default(27017),
    DB_HOST: Joi.string().when('NODE_ENV', {
        is: 'development',
        then: Joi.required(),
        otherwise: Joi.optional().default('localhost'),
    }),
    DB_NAME: Joi.string().when('NODE_ENV', {
        is: 'development',
        then: Joi.required(),
        otherwise: Joi.optional().default('rentals'),
    }),
    JWT_SECRET: Joi.string().when('NODE_ENV', {
        is: 'production',
        then: Joi.required(),
        otherwise: Joi.optional().default('jwt'),
    }),
    JWT_EXPIRES_IN: Joi.string().when('NODE_ENV', {
        is: 'production',
        then: Joi.required(),
        otherwise: Joi.optional().default('7 days'),
    }),
    FACEBOOK_ID: Joi.string().when('NODE_ENV', {
        is: 'production',
        then: Joi.required(),
        otherwise: Joi.optional().default('fake'),
    }),
    FACEBOOK_SECRET: Joi.string().when('NODE_ENV', {
        is: 'production',
        then: Joi.required(),
        otherwise: Joi.optional().default('fake'),
    }),
    GOOGLE_ID: Joi.string()
        .when('NODE_ENV', {
        is: 'development',
        then: Joi.required(),
        otherwise: Joi.optional().default('fake'),
    })
        .when('NODE_ENV', {
        is: 'production',
        then: Joi.required(),
        otherwise: Joi.optional().default('fake'),
    }),
    GOOGLE_SECRET: Joi.string()
        .when('NODE_ENV', {
        is: 'development',
        then: Joi.required(),
        otherwise: Joi.optional().default('fake'),
    })
        .when('NODE_ENV', {
        is: 'production',
        then: Joi.required(),
        otherwise: Joi.optional().default('fake'),
    }),
    GOOGLE_CALL_BACK_URL: Joi.string()
        .when('NODE_ENV', {
        is: 'development',
        then: Joi.required(),
        otherwise: Joi.optional().default('fake'),
    })
        .when('NODE_ENV', {
        is: 'production',
        then: Joi.required(),
        otherwise: Joi.optional().default('fake'),
    }),
});
//# sourceMappingURL=schema.config.js.map