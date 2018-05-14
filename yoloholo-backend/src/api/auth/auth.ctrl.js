const Auth = require('models/auth');
const Joi = require('joi');

exports.register = async(ctx) => {

    const schema = Joi
        .object()
        .keys({
            username: Joi
                .string()
                .required(),
            email: Joi
                .string()
                .email()
                .required(),
            password: Joi
                .string()
                .regex(/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{3,30}$/)
                .required()
        });

    const result = Joi.validate(ctx.request.body, schema);

    if (result.error) {
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    const {username, email, password} = ctx.request.body;

    const auth = new Auth({username, email, password});

    try {
        await auth.save();
        ctx.body = auth;
    } catch (e) {
        ctx.throw(e, 500);
    }
}

exports.login = async(ctx) => {
    ctx.body = "login";
}