import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OptionController } from './option.controller';
import { Option } from './option.class';
import { OptionService } from './option.service';

@Module({
  imports: [TypeOrmModule.forFeature([Option])],
  exports: [TypeOrmModule],
  controllers: [OptionController],
  providers: [OptionService, Option],
})
export class OptionModule {}
