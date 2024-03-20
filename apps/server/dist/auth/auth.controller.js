"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const google_guard_1 = require("../common/guards/google.guard");
const facebook_guard_1 = require("../common/guards/facebook.guard");
const passport_1 = require("@nestjs/passport");
const userLocalLogin_dto_1 = require("./dto/userLocalLogin.dto");
const userLocalRegister_dto_1 = require("./dto/userLocalRegister.dto");
const authProvider_schema_1 = require("./schema/authProvider.schema");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async register(userLocalRegisterDTO) {
        const user = await this.authService.registerUser(userLocalRegisterDTO);
        return user;
    }
    async login(req, _user) {
        return req.user;
    }
    async loginWithGoogleAuth(_req) { }
    async registerWithGoogleAuth(_req) { }
    async googleAuthRedirect(req, res) {
        const user = await this.authService.loginSocial(req.user, authProvider_schema_1.SocialProviderTypes.GOOGLE);
        const accessToken = await this.authService.signToken({
            email: user.email,
            sub: user._id,
        });
        res.status(200).json({
            accessToken,
            user,
        });
    }
    async loginWithFacebookAuth(_req) { }
    async registerWithFacebookAuth(_req) { }
    async facebookAuthRedirect(req, _res) {
        return req.user;
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userLocalRegister_dto_1.UserLocalRegisterDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('local')),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, userLocalLogin_dto_1.UserLocalLoginDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('login/google'),
    (0, common_1.UseGuards)(google_guard_1.GoogleOauthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginWithGoogleAuth", null);
__decorate([
    (0, common_1.Get)('register/google'),
    (0, common_1.UseGuards)(google_guard_1.GoogleOauthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registerWithGoogleAuth", null);
__decorate([
    (0, common_1.Get)('google/callback'),
    (0, common_1.UseGuards)(google_guard_1.GoogleOauthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "googleAuthRedirect", null);
__decorate([
    (0, common_1.Get)('login/facebook'),
    (0, common_1.UseGuards)(facebook_guard_1.FacebookOauthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginWithFacebookAuth", null);
__decorate([
    (0, common_1.Get)('register/facebook'),
    (0, common_1.UseGuards)(facebook_guard_1.FacebookOauthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registerWithFacebookAuth", null);
__decorate([
    (0, common_1.Get)('facebook/callback'),
    (0, common_1.UseGuards)(facebook_guard_1.FacebookOauthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "facebookAuthRedirect", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map