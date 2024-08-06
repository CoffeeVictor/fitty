import { Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { DrizzleService } from 'src/drizzle/drizzle.service';
import { users } from 'src/drizzle/schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
	constructor(private readonly drizzle: DrizzleService) {}

	public async findUserById(id: string) {
		const user = await this.drizzle.getDb().query.users.findFirst({
			where: eq(users.id, id),
		});

		if (!user) return null;

		return user;
	}

	public async create(createUserDto: CreateUserDto) {
		return await this.drizzle
			.getDb()
			.insert(users)
			.values({
				name: createUserDto.username,
			})
			.returning({ id: users.id, email: users.email });
	}
}
