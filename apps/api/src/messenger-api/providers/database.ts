import { Provider } from '@nestjs/common';
import { Db, MongoClient } from 'mongodb';
import { ConfigService } from '@nestjs/config';

export const Database: Provider = {
  provide: Db,
  inject: [ConfigService],
  useFactory: async (conf: ConfigService): Promise<Db> => {
    // todo add error handler
    const connection = conf.get<string>('DB_URI');
    const database = conf.get<string>('DB_NAME');

    const client = new MongoClient(connection);
    await client.connect();
    return client.db(database);
  },
};
