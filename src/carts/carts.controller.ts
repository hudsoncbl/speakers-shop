import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CartsService } from './carts.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { UpdateJblSpeakerDto } from 'src/jbl-speakers/dto/update-jbl-speaker.dto';

@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Post()
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartsService.create(createCartDto);
  }

  @Get()
  findAll() {
    return this.cartsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartsService.findOne(+id);
  }

  @Patch(':cartId/jbl-speakers/:speakerId')
  updateSpeakerPrice(
    @Param('cartId') cartId: string,
    @Param('speakerId') speakerId: string,
    @Body() updateSpeakerDto: UpdateJblSpeakerDto,
  ) {
    return this.cartsService.updateSpeakerInCart(
      cartId,
      speakerId,
      updateSpeakerDto,
    );
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartsService.update(+id, updateCartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartsService.remove(+id);
  }
}
