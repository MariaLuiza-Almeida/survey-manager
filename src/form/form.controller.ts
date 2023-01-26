import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Form } from './form.entity';
import { FormService } from './form.service';

@Controller('form')
export class FormController {
  constructor(private formService: FormService) {}

  @Get(':id')
  getOne(@Param() params): Promise<object> {
    return this.formService.getFormById(params.id);
  }
}
