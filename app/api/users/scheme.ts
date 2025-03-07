import {z} from 'zod';

const schema = z.object ( {
    // it provides user properties that we have, as for example for just below // using this syntax, we define validation rules
    // id: z.number(),
    name: z.string().min(3),
    email: z.string().email(), // email validation
    // role: z.enum(['admin', 'user']), // role validation
    //... other properties
})

//exported default object from this module
export default schema;