import { Module } from '@nestjs/common';
import { DrizzleModule } from 'src/drizzle/drizzle.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
	providers: [UsersService],
	controllers: [UsersController],
	exports: [UsersService],
	imports: [DrizzleModule],
})
export class UsersModule {}
