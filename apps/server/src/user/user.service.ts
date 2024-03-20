import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { SocialProviderTypes } from 'src/auth/schema/authProvider.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}
  findByCredentials(user: {
    email?: string;
    username?: string;
  }): Promise<User | null> {
    const orQuery = [];
    if (user.email) {
      orQuery.push({ email: user.email });
    }
    if (user.username) {
      orQuery.push({ username: user.username });
    }
    return this.userModel
      .findOne({
        $or: orQuery,
      })
      .exec();
  }
  findOneByUsername(username: string): Promise<User | null> {
    const user = this.userModel.findOne({ username }).exec();
    return user;
  }
  saveProviderAndUser(
    _user: Partial<User>,
    provider: { provider: SocialProviderTypes; socialId: string },
  ): Promise<User> {
    const user = new this.userModel({
      ..._user,
      socialProviders: [provider],
    });
    return user.save();
  }
  saveUser(userDTO: any): Promise<User> {
    const user = new this.userModel(userDTO);
    return user.save();
  }
  findOneBySocialId(provider: SocialProviderTypes, socialId: string) {
    try {
      const user = this.userModel
        .findOne({
          'socialProviders.socialId': socialId,
          'socialProviders.provider': provider,
        })
        .exec();
      return user;
    } catch (error) {
      console.error('Error finding user by socialId:', error.message);
      throw error;
    }
  }

  findOneByEmail(email: string): Promise<User | null> {
    const user = this.userModel.findOne({ email }).exec();
    return user;
  }
  existsBySocialId(
    provider: SocialProviderTypes,
    socialId: any,
  ): Promise<boolean> {
    return this.findOneBySocialId(provider, socialId).then((user) => {
      if (!user) return false;
      return true;
    });
  }
}
