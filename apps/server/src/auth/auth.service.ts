import { ConflictException, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { Profile } from 'passport';
import { SocialProviderTypes } from './schema/authProvider.schema';
import { User } from 'src/user/schema/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findByCredentials({ username });
    if (user && !(await user.comparePassword(pass))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async registerUser(registerUserDTO: any) {
    const { username, email } = registerUserDTO;
    if (
      await this.userService.findByCredentials({
        email,
        username,
      })
    ) {
      throw new ConflictException('user already exist');
    }
    const user = await this.userService.saveUser(registerUserDTO);
    return user;
  }

  async signToken(payload: any): Promise<string> {
    return this.jwtService.sign(payload);
  }

  async loginSocial(profile: Profile, provider: SocialProviderTypes) {
    const user = await this.userService.findOneBySocialId(provider, profile.id);
    if (!user) {
      throw new ConflictException('User is not registered');
    }
    return user;
  }
  async registerSocial(profile: Profile, provider: SocialProviderTypes) {
    const email = profile.emails![0].value;
    const socialId = profile.id;

    if (await this.userService.existsBySocialId(provider, socialId)) {
      throw new ConflictException('user already registered!');
    }
    if (
      await this.userService.findByCredentials({
        email,
      })
    ) {
      throw new ConflictException('email already used!');
    }

    const user = await this.userService.saveProviderAndUser(
      {
        email,
        firstName: profile.name?.givenName,
        lastName: profile.name?.familyName,
        ...(profile.photos?.at(0)?.value
          ? { avatar: profile.photos?.at(0)?.value }
          : {}),
      },
      { provider, socialId },
    );
    return user;
  }
}
