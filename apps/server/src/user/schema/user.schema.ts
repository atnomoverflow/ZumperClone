import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { SocialProvider } from 'src/auth/schema/authProvider.schema';
import * as bcrypt from 'bcrypt';

export type UserDocument = HydratedDocument<User>;
@Schema()
export class User {
  @Prop()
  email: string;
  @Prop()
  username: string;
  @Prop()
  firstName: string;
  @Prop()
  lastName: string;
  @Prop()
  avatar: string;
  @Prop()
  password: string;
  @Prop({
    type: [SocialProvider],
  })
  socialProviders: SocialProvider[];
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  async comparePassword(password: string) {
    return bcrypt.compare(password, this.password);
  }
}

export const UserSchema = SchemaFactory.createForClass(User);
