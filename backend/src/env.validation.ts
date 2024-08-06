import { z } from 'zod';

const EnvSchema = z.object({
	DATABASE_URL: z.string(),
});

export type EnvConfiguration = z.infer<typeof EnvSchema>;

export const validate = (config: Record<string, any>) => {
	const valid = EnvSchema.parse(config);

	return valid;
};
