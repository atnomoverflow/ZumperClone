import { ConfigType } from '@nestjs/config';
import { Profile } from 'passport';
import facebookConfig from 'src/config/facebook.config';
import { Strategy } from 'passport-facebook';
declare const FacebookStrategy_base: new (...args: any[]) => Strategy;
export declare class FacebookStrategy extends FacebookStrategy_base {
    private facebookConf;
    constructor(facebookConf: ConfigType<typeof facebookConfig>);
    validate(accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any, info?: any) => void): Promise<void>;
}
export {};
