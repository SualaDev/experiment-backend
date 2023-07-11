import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDetails } from './user-details.interface';
import { NewUserService } from './user.service';
import { UserDocument } from './user.schema';

@Controller('user')
export class NewUserConroller {
  constructor(private readonly userService: NewUserService) {}
  @Get('id')
  async getUser(@Param('id') id: string): Promise<UserDetails | null> {
    return this.userService.findById(id);
  }
}
