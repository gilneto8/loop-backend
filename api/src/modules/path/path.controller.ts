import { Controller, Delete, Param, ParseIntPipe, Post, Put, Request } from '@nestjs/common';
import { PathService } from './path.service';
import createPathDto from './dtos/createPath.dto';
import getPathDto from '../path/dtos/getPath.dto';
import updatePathDto from '../path/dtos/updatePath.dto';

@Controller('paths')
export class PathController {
  constructor(private pathService: PathService) {}

  @Post()
  async createPath(@Request() req: { body: createPathDto }) {
    return this.pathService.create(req.body);
  }

  @Put(':id')
  async updatePath(@Param('id', new ParseIntPipe()) id: getPathDto['id'], @Request() req: { body: updatePathDto }) {
    return this.pathService.update(id, req.body);
  }

  @Delete(':id')
  async deletePath(@Param('id', new ParseIntPipe()) id: getPathDto['id']) {
    return this.pathService.delete({ id });
  }
}
