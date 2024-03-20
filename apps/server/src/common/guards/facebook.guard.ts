import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthTypes } from 'src/auth/types/auth.types';

@Injectable()
export class FacebookOauthGuard extends AuthGuard(AuthTypes.FACEBOOK) {}
