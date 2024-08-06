import { z } from 'zod';

export const createUserSchema = z.object({
	username: z.string({
		invalid_type_error: 'Username must be of type string',
		required_error: 'Missing username',
	}),
	email: z.string().email().optional(),
});

export type CreateUserDto = z.infer<typeof createUserSchema>;
