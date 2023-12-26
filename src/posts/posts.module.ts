import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { Post } from './post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsController } from './posts.controller';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import { Profile } from 'src/users/profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post, User, Profile])],
  controllers: [PostsController],
  providers: [PostsService, UsersService, PostsResolver],
})
export class PostsModule {}
