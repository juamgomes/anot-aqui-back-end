import { ApiProperty } from "@nestjs/swagger";
import { createUserDto } from "./users.dto";
import { IsNotEmpty, IsString } from "class-validator";

export class updateUserDto extends createUserDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    id: string;
}