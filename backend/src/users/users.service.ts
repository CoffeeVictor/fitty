import { Injectable } from '@nestjs/common';

type User = {
	id: string;
	name: string;
};

@Injectable()
export class UsersService {
	private db: Array<User> = [
		{
			id: '1',
			name: 'Alcina',
		},
		{
			id: '2',
			name: 'Bela',
		},
		{
			id: '3',
			name: 'Cassandra',
		},
	];

	public findUserById(id: string): User | null {
		const user = this.db.find((user) => user.id === id);

		if (!user) return null;

		return user;
	}
}
