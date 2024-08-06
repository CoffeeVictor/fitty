import {
	Injectable,
	Logger,
	OnModuleDestroy,
	OnModuleInit,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';
import * as schema from 'src/drizzle/schema';
import { EnvConfiguration } from 'src/env.validation';

@Injectable()
export class DrizzleService implements OnModuleInit, OnModuleDestroy {
	private db: ReturnType<typeof drizzle<typeof schema>>;
	private readonly logger = new Logger(DrizzleService.name);

	constructor(
		private readonly configService: ConfigService<EnvConfiguration>,
	) {}

	onModuleInit() {
		try {
			const client = new Client(this.configService.get('DATABASE_URL'));

			this.db = drizzle(client, {
				schema,
			});

			this.logger.log('Connected to Database successfully');
		} catch (err) {
			this.logger.error('Error when connecting to Database:', err);
		}
	}

	onModuleDestroy() {}

	public getDb() {
		return this.db;
	}
}
