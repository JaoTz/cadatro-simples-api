import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario/usuario.controller';
import { UserController } from './user/user.controller';

@Module({
  imports: [],
  controllers: [UsuarioController, UserController],
  providers: [],
})
export class AppModule {}
