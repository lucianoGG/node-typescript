import { request, response, Router } from "express";
import { hash } from 'bcryptjs';
import knex from '../database/connection'

const userRoutes = Router();

userRoutes.get('/', async(request, response) =>{
    const users = await knex('users').select('*');

    return response.json(users);
});

userRoutes.post('/', async(request, response) =>{
    const { name, email, password } = request.body;

    const passwordHashed = await hash(password, 8);

    const user ={
        name,
        email,
        password: passwordHashed
    };

    const newIds = await knex('users').insert(user);

    return response.json({
        id: newIds[0],
        ...user
    });
});

export default userRoutes;