import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthTypes } from 'src/auth/types/auth.types';

@Injectable()
export class GoogleOauthGuard extends AuthGuard(AuthTypes.GOOGLE) {}
