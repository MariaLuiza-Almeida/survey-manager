import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Option } from './option.class';
import { OptionService } from './option.service';

@Controller('option')
export class OptionController {
  constructor(private optionService: OptionService) {}

  @Get()
  getAll(): Promise<Array<object>> {
    return this.optionService.getAllOptions();
  }

  @Get(':id')
  getOne(@Param() params): Promise<Option> {
    return this.optionService.getOptionById(params.id);
  }

  @Post()
  create(@Body() option: Option): Promise<object> {
    return this.optionService.createOption(option);
  }

  @Put(':id')
  update(@Param() params, @Body() option: Option): Promise<object> {
    return this.optionService.updateOption(params.id, option);
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.optionService.deleteOption(params.id);
  }
}
