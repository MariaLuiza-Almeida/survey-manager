import { Injectable } from '@nestjs/common';
import { Option } from './option.class';

@Injectable()
export class OptionService {
  constructor(private option: Option) {}
  async getAllOptions(): Promise<Array<object>> {
    return await this.option.getAllOptions();
  }

  async getOptionById(id: number): Promise<Option> {
    return await this.option.getOptionById(id);
  }

  async getOptionsByQuestionId(questionid: number): Promise<Option> {
    return await this.option.getOptionByQuestionId(questionid);
  }

  async createOption(option): Promise<object> {
    return await this.option.createOption(option);
  }

  async updateOption(id: number, option: Option): Promise<object> {
    return await this.option.updateOption(id, option);
  }

  async deleteOption(id: number) {
    return await this.option.deleteOption(id);
  }
}
