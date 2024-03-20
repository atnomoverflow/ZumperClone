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
exports.GoogleStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const auth_types_1 = require("../types/auth.types");
const common_1 = require("@nestjs/common");
const passport_google_oauth20_1 = require("passport-google-oauth20");
const google_config_1 = require("../../config/google.config");
let GoogleStrategy = class GoogleStrategy extends (0, passport_1.PassportStrategy)(passport_google_oauth20_1.Strategy, auth_types_1.AuthTypes.GOOGLE) {
    constructor(googleConf) {
        super({
            clientID: googleConf.clientID,
            clientSecret: googleConf.clientSecret,
            callbackURL: googleConf.callbackURL,
            scope: ['email', 'profile', 'openid'],
            passReqToCallback: true,
        });
        this.googleConf = googleConf;
    }
    async validate(request, _accessToken, _refreshToken, profile, done) {
        common_1.Logger.log(profile);
        if (!profile) {
            return done(new common_1.UnauthorizedException(), false);
        }
        return done(null, profile);
    }
};
exports.GoogleStrategy = GoogleStrategy;
exports.GoogleStrategy = GoogleStrategy = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(google_config_1.default.KEY)),
    __metadata("design:paramtypes", [void 0])
], GoogleStrategy);
//# sourceMappingURL=google.strategy.js.map