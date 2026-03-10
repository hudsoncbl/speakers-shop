import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JblSpeakersModule } from './jbl-speakers/jbl-speakers.module';
import { CartsModule } from './carts/carts.module';


@Module({
  imports: [JblSpeakersModule, CartsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

