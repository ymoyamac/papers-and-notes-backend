import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_DATABASE_HOST,
      port: Number(process.env.POSTGRES_DATABASE_PORT),
      database: process.env.POSTGRES_DATABASE_NAME,
      username: process.env.POSTGRES_DATABASE_USERNAME,
      password: process.env.POSTGRES_DATABASE_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
