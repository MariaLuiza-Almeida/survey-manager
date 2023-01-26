import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Option } from './option.class';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(Option)
    private option: Option,
  ) {}

  async getAllOptions(): Promise<any> {
    console.log('bate no service');
    return this.option.getAllOptions();
  }

  async getOptionById(id: number): Promise<Option> {
    return this.option.getOptionById(id);
  }

  async createOption(option): Promise<object> {
    return this.option.createOption(option);
  }

  async updateOption(id: number, option: Option): Promise<object> {
    return this.option.updateOption(id, option);
  }

  async deleteOption(id: number) {
    return this.option.deleteOption(id);
  }
}
