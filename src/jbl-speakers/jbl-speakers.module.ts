import { Module } from '@nestjs/common';
import { JblSpeakersController } from './jbl-speakers.controller';
import { JblSpeakersService } from './jbl-speakers.service';

@Module({
  controllers: [JblSpeakersController],
  providers: [JblSpeakersService],
  exports: [JblSpeakersService]
})
export class JblSpeakersModule {}
