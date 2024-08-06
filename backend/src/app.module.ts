import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { DrizzleModule } from './drizzle/drizzle.module';
import { validate } from './env.validation';
import { UsersModule } from './users/users.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			validate,
			isGlobal: true,
		}),
		UsersModule,
		AuthModule,
		DrizzleModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
