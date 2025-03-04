import {z} from 'zod';

const schema = z.object( {
    name : z.string().min(3),
    price : z.number().min(1).max(100) //min 1 dollar and max 100 dollar
})

export default schema;
