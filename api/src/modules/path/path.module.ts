import { Module } from '@nestjs/common';
import { PathService } from './path.service';
import { PathController } from './path.controller';

@Module({
  providers: [PathService],
  controllers: [PathController]
})
export class PathModule {}
