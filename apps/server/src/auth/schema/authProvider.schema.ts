import { Prop, Schema } from '@nestjs/mongoose';

export enum SocialProviderTypes {
  FACEBOOK = 'FACEBOOK',
  GOOGLE = 'GOOGLE',
}

@Schema({ timestamps: {} })
export class SocialProvider {
  @Prop({ enum: SocialProviderTypes })
  provider: SocialProviderTypes;
  @Prop({ unique: true })
  socialId: string;
}
