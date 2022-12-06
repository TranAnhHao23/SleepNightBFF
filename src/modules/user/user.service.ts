import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { SuccessResponse } from '../../common/helpers/success-response';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const existUser = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });
    if (existUser !== null) {
      throw new NotFoundException('This email already in user');
    }

    const userCreated = await this.userRepository.save(createUserDto);
    return SuccessResponse.from(userCreated);
  }

  async findAll() {
    const userList = await this.userRepository.find();
    return SuccessResponse.from(userList);
  }

  async findOne(id: string) {
    const getUserById = await this.userRepository.findOneById(id);
    return SuccessResponse.from(getUserById);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.userRepository.update(id, updateUserDto);
    return SuccessResponse.from(await this.userRepository.findOneById(id));
  }

  async remove(id: string) {
    const user = await this.userRepository.findOneById(id);
    await this.userRepository.remove(user);
    return SuccessResponse.from(user);
  }
}
