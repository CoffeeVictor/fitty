import { BadRequestException, PipeTransform } from '@nestjs/common';
import { ZodError, ZodSchema } from 'zod';

export class ZodValidationPipe implements PipeTransform {
	constructor(private schema: ZodSchema) {}

	transform(value: unknown) {
		try {
			const parsedValue = this.schema.parse(value);
			return parsedValue;
		} catch (err) {
			const error = err as ZodError;

			throw new BadRequestException({
				message: 'Validation failed',
				errors: error.issues.map((issue) => issue.message),
			});
		}
	}
}
