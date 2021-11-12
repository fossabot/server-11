import { Module } from '@nestjs/common';
import { AccessTokenModule } from './access-token/access-token.module';
import { UserProfileModule } from './user-profile/user-profile.module';
import { UserModule } from './user/user.module';
import { VerificationCodeModule } from './verification-code/verification-code.module';

@Module({
  imports: [
    AccessTokenModule,
    VerificationCodeModule,
    UserModule,
    UserProfileModule,
  ],
})
export class AppModule {}
