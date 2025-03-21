import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenerateException, validateObjectConditions } from 'src/comon/utils';
import { User } from 'src/database/allSchemas/user.schema';
import { isEmpty } from 'lodash';
import { updateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(user: User) {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async getAllUsers() {
    try {
      const users = await this.userModel.find().exec();

      const conditions = {
        findAllUsers: {
          validate: isEmpty(users),
          message: 'Nenhuma usuário cadastrado!',
          status: HttpStatus.NOT_FOUND,
        },
      };

      validateObjectConditions(conditions);

      return {
        data: users,
        message: 'Success',
      };
    } catch (error) {
      GenerateException(error);
    }
  }

  async getUserById(id: string) {
    try {
      const user = await this.userModel.findById(id).exec();

      const conditions = {
        findUserById: {
          validate: isEmpty(user),
          message: 'Usuário não encontrado!',
          status: HttpStatus.NOT_FOUND,
        },
      };

      validateObjectConditions(conditions);

      return {
        data: user,
        message: 'Success',
      };
    } catch (error) {
      GenerateException(error);
    }
  }

  async updateUser(data: updateUserDto) {
    try {
      const user = await this.userModel.findById(data.id).exec();

      const conditions = {
        updateUser: {
          validate: isEmpty(user),
          message: 'Usuário não encontrado!',
          status: HttpStatus.NOT_FOUND,
        },
      };

      validateObjectConditions(conditions);

      await this.userModel
        .findByIdAndUpdate(data.id, data, { new: true })
        .exec();

      return {
        message: 'Usuário atualizado com sucesso!',
      };
    } catch (error) {
      GenerateException(error);
    } 
  }

  async deleteUserById(id: string) {
    try {
        const user = await this.userModel.findById(id).exec();

        const conditions = {
          deleteUser: {
            validate: isEmpty(user),
            message: 'Usuário não encontrado!',
            status: HttpStatus.NOT_FOUND,
          },
        };

        validateObjectConditions(conditions);

        await this.userModel.findByIdAndDelete(id).exec();

        return {
          message: 'Usuário deletado com sucesso!',
        };
    } catch (error) {
        GenerateException(error);
    }
  }
}
