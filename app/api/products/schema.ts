import {z} from 'zod';

const schema = z.object( {
    name : z.string().min(3),
    price : z.number().min(1), //min 1 dollar and max 100 dollar
    description: z.string().min(3).max(120).optional(), //max 100 dol
})

export default schema;
