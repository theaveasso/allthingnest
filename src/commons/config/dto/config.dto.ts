import { IsNotEmpty } from 'class-validator'

export default class ConfigDto {
  @IsNotEmpty()
  PORT!: number
}

