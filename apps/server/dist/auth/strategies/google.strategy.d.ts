import { ConfigType } from '@nestjs/config';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import googleConfig from 'src/config/google.config';
declare const GoogleStrategy_base: new (...args: any[]) => Strategy;
export declare class GoogleStrategy extends GoogleStrategy_base {
    private googleConf;
    constructor(googleConf: ConfigType<typeof googleConfig>);
    validate(request: any, _accessToken: string, _refreshToken: string, profile: any, done: VerifyCallback): Promise<void>;
}
export {};
