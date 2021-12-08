import { Controller, Get } from '@nestjs/common';
import { ConversationsService } from '../../services';

@Controller('conversations')
export class ConversationsController {
  constructor(public readonly service: ConversationsService) {
  }

  @Get()
  conversations() {
    return [];
  }
}
