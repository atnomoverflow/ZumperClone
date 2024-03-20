import { PassportStrategy } from '@nestjs/passport';
import { AuthTypes } from '../types/auth.types';
import jwtConfig from 'src/config/jwt.config';
import { ConfigType } from '@nestjs/config';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, AuthTypes.JWT) {
  constructor(
    private readonly userService: UserService,
    @Inject(jwtConfig.KEY)
    private jwtConf: ConfigType<typeof jwtConfig>,
  ) {
    super({
      usernameField: 'email',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConf.secret,
    });
  }
  async validate(payload: any, done: VerifiedCallback) {
    const user = await this.userService.findByCredentials({
      email: payload.username,
    });
    if (!user) {
      return done(new UnauthorizedException(), false);
    }
    return done(null, user);
  }
}
