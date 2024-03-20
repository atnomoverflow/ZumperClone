import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthTypes } from '../../auth/types/auth.types';

@Injectable()
export class JwtAuthGuard extends AuthGuard(AuthTypes.JWT) {}
