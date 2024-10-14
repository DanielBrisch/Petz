import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entites/user.entity";
import { Repository } from "typeorm"

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private repository: Repository<User>
    ) {

    }

    findAll(): Promise<User[]> {
        return this.repository.find();
    }

    findById(id: string): Promise<User> {
        return this.repository.findOneBy({ id: id });
    }
}