import { PassportStrategy } from '@nestjs/passport';
import { AuthTypes } from '../types/auth.types';
import { ConfigType } from '@nestjs/config';
import {
  Inject,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import googleConfig from 'src/config/google.config';
@Injectable()
export class GoogleStrategy extends PassportStrategy(
  Strategy,
  AuthTypes.GOOGLE,
) {
  constructor(
    @Inject(googleConfig.KEY)
    private googleConf: ConfigType<typeof googleConfig>,
  ) {
    super({
      clientID: googleConf.clientID,
      clientSecret: googleConf.clientSecret,
      callbackURL: googleConf.callbackURL,
      scope: ['email', 'profile', 'openid'],
      passReqToCallback: true,
    });
  }

  async validate(
    request: any,
    _accessToken: string,
    _refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ) {
    Logger.log(profile);

    if (!profile) {
      return done(new UnauthorizedException(), false);
    }
    // TODO: check if user exist in DB if not register the user
    return done(null, profile);
  }
}
