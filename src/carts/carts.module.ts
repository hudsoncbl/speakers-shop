import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';
import { JblSpeakersModule } from 'src/jbl-speakers/jbl-speakers.module';

@Module({
  imports: [JblSpeakersModule],
  controllers: [CartsController],
  providers: [CartsService],
})
export class CartsModule {}
