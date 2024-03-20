import { AuthService } from './auth.service';
import { UserLocalLoginDTO } from './dto/userLocalLogin.dto';
import { UserLocalRegisterDTO } from './dto/userLocalRegister.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(userLocalRegisterDTO: UserLocalRegisterDTO): Promise<import("../user/schema/user.schema").User>;
    login(req: any, _user: UserLocalLoginDTO): Promise<any>;
    loginWithGoogleAuth(_req: Request): Promise<void>;
    registerWithGoogleAuth(_req: Request): Promise<void>;
    googleAuthRedirect(req: any, res: any): Promise<void>;
    loginWithFacebookAuth(_req: Request): Promise<void>;
    registerWithFacebookAuth(_req: Request): Promise<void>;
    facebookAuthRedirect(req: any, _res: any): Promise<any>;
}
