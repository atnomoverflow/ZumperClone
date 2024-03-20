import { PassportStrategy } from '@nestjs/passport';
import { AuthTypes } from '../types/auth.types';
import { ConfigType } from '@nestjs/config';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { Profile } from 'passport';
import facebookConfig from 'src/config/facebook.config';
import { Strategy } from 'passport-facebook';

@Injectable()
export class FacebookStrategy extends PassportStrategy(
  Strategy,
  AuthTypes.FACEBOOK,
) {
  constructor(
    @Inject(facebookConfig.KEY)
    private facebookConf: ConfigType<typeof facebookConfig>,
  ) {
    super({
      clientID: facebookConf.clientID,
      clientSecret: facebookConf.clientSecret,
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (error: any, user?: any, info?: any) => void,
  ) {
    if (!profile) {
      return done(new UnauthorizedException(), false);
    }
    // TODO: check if user exist in DB if not register the user
    return done(null, profile);
  }
}
