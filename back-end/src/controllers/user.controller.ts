import { Controller, Get, Param } from "@nestjs/common";
import { User } from "src/entites/user.entity";
import { UserService } from "src/services/user.service";

@Controller('user')
export class UserController {

    constructor(
        private service: UserService
    ) { }

    @Get()
    findAll(): Promise<User[]> {
        return this.service.findAll()
    }

    @Get(':id')
    findById(@Param('id') id: string): Promise<User> {
        return this.service.findById(id);
    }

}