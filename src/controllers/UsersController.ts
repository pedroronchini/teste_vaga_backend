import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import User from '../models/User';
import userView from '../views/users_view';

export default {
  async index( request: Request, response: Response) {
    const userRepository = getRepository(User);

    const users = await userRepository.find();
    
    return response.json(userView.renderMany(users));
  },

  async show( request: Request, response: Response) {
    const { id } = request.params;

    const userRepository = getRepository(User);

    const user = await userRepository.findOneOrFail(id);
    
    return response.json(userView.render(user));
  },

  async create(request: Request, response: Response) {
    const {
      name,
      lastname,
      nickname,
      address,
      bio,
      createdAt,
      updatedAt,
    } =  request.body;
  
    const userRepository = getRepository(User);

    const data = {
      name,
      lastname,
      nickname,
      address,
      bio,
      createdAt,
      updatedAt,
    }

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      lastname: Yup.string().required(),
      nickname: Yup.string().required().max(30),
      address: Yup.string().required(),
      bio: Yup.string().required().max(300),
      createdAt: Yup.date(),
      updatedAt: Yup.date(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });
  
    const user = userRepository.create(data);
  
    await userRepository.save(user);
  
    return response.status(201).json(user);

  },

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const userRepository = getRepository(User);

    const user = await userRepository.delete(id);


    return response.status(200).json({message: "Usuário derrotado com sucesso!"});
  },

  async update(request: Request, response: Response) {
    const { id } = request.params;

    const {
      name,
      lastname,
      nickname,
    } = request.body;

    const userRepository = getRepository(User);

    const data = {
      name,
      lastname,
      nickname,
    }

    await userRepository.update(id, data);

    return response.status(200).json(data);
  }
}
