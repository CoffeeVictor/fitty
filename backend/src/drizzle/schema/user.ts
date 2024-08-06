import { createId } from '@paralleldrive/cuid2';
import { pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
	id: text('id')
		.$defaultFn(() => createId())
		.primaryKey(),
	name: text('name').notNull(),
	email: text('email').unique(),
	createdAt: timestamp('createdAt').defaultNow(),
	updatedAt: timestamp('updatedAt').$onUpdate(() => new Date()),
});
