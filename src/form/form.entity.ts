import { Injectable } from '@nestjs/common';
import { Option } from 'src/option/option.entity';
import { Question } from 'src/question/question.entity';
import { Survey } from 'src/survey/survey.entity';

@Injectable()
export class Form {
  id: number;
  fullForm: {
    survey: Survey;
    questions: Array<Question>;
    option: Array<Option>;
  };
}
