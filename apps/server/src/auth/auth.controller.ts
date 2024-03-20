import {
  Body,
  Controller,
  Get,
  Logger,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleOauthGuard } from 'src/common/guards/google.guard';
import { FacebookOauthGuard } from 'src/common/guards/facebook.guard';
import { AuthGuard } from '@nestjs/passport';
import { UserLocalLoginDTO } from './dto/userLocalLogin.dto';
import { UserLocalRegisterDTO } from './dto/userLocalRegister.dto';
import { SocialProviderTypes } from './schema/authProvider.schema';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() userLocalRegisterDTO: UserLocalRegisterDTO) {
    const user = await this.authService.registerUser(userLocalRegisterDTO);
    return user;
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Req() req: any, @Body() _user: UserLocalLoginDTO) {
    return req.user;
  }

  @Get('login/google')
  @UseGuards(GoogleOauthGuard)
  async loginWithGoogleAuth(@Req() _req: Request) {}

  @Get('register/google')
  @UseGuards(GoogleOauthGuard)
  async registerWithGoogleAuth(@Req() _req: Request) {}

  @Get('google/callback')
  @UseGuards(GoogleOauthGuard)
  async googleAuthRedirect(@Req() req: any, @Res() res: any) {
    const user = await this.authService.loginSocial(
      req.user,
      SocialProviderTypes.GOOGLE,
    );
    const accessToken = await this.authService.signToken({
      email: user.email,
      sub: user._id,
    });
    res.status(200).json({
      accessToken,
      user,
    });
  }

  @Get('login/facebook')
  @UseGuards(FacebookOauthGuard)
  async loginWithFacebookAuth(@Req() _req: Request) {}

  @Get('register/facebook')
  @UseGuards(FacebookOauthGuard)
  async registerWithFacebookAuth(@Req() _req: Request) {}

  @Get('facebook/callback')
  @UseGuards(FacebookOauthGuard)
  async facebookAuthRedirect(@Req() req: any, @Res() _res: any) {
    return req.user;
  }
}
