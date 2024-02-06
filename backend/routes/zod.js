const zod = require('zod');

const signupSchema = zod.object({
    username:zod.string().email(),
    firstname:zod.string(),
    lastname:zod.string(),
    password:zod.string().min(3)
})

const signinSchema = zod.object({
    username:zod.string().email(),
    password:zod.string().min(3)
})
const updateBody= zod.object({
    password:zod.string().min(3).optional(),
    firstname:zod.string().optional(),
    lastname:zod.string().optional()
})

module.exports ={
    signupSchema,
    signinSchema,
    updateBody
}