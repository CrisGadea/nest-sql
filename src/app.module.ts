import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // Configuración de la DB con el ORM TypeORM de Nest
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-cm7errmn7f5s73db6820-a',
      port: 5432,
      username: 'root',
      password: 'Ago9ecdlbx002kQQZcK6SWZ8aMxyV1Rv',
      database: 'appdb_rqxh',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PostsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
