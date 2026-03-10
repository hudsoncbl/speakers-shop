import { Inject, Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { JblSpeakersService } from 'src/jbl-speakers/jbl-speakers.service';

export interface CartItem {
  itemId: number;
}

export interface Cart {
  id: number;
  title: string;
  currency: string;
  totalPrice: number;
  items: CartItem[];
}

@Injectable()
export class CartsService {
  private carts: Cart[] = [
    {
      id: 1,
      title: 'user1 cart',
      currency: 'dollars',
      totalPrice: 4500,
      items: [{ itemId: 101 }, { itemId: 102 }],
    },
    {
      id: 2,
      title: 'user2 cart',
      currency: 'dollars',
      totalPrice: 3000,
      items: [{ itemId: 103 }],
    },
  ];
  constructor(
    private readonly externalJblSpeakersService: JblSpeakersService,
  ) {}

  create(createCartDto: CreateCartDto) {
    return 'This action adds a new cart';
  }

  findAll() {
    return this.carts;
  }

  findOne(id: number) {
    return `This action returns a #${id} cart`;
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
  }

  updateSpeakerInCart(
    cartId: string,
    speakerId: string,
    updateSpeakerInCartDto,
  ) {
    console.log(`cartId = ${cartId} | speakerId = ${speakerId}`);
    console.log('updateSpeakerInCartDto');
    console.log(updateSpeakerInCartDto);

    const cart = this.carts.find((cart) => cart.id === Number(cartId));

    if (
      !cart ||
      !cart.items.some((item: CartItem) => item.itemId === Number(speakerId))
    ) {
      console.log(`===========Cart [${cart.title}]=================`);
      console.log(cart.items);
      console.log(`=====================DEBUG======================`);
      console.log(cart.items.includes({ itemId: Number(speakerId) }));
      console.log(`================================================`);
      console.error(
        `Error: Item [${speakerId}] was not found in cart [${cartId}]`,
      );
      return;
    }

    const jblSpeakerToUpdate = this.externalJblSpeakersService.findOne(
      Number(speakerId),
    );

    if (jblSpeakerToUpdate) {
      Object.assign(jblSpeakerToUpdate, updateSpeakerInCartDto);
    } else {
      console.error(
        `Error: Item [${speakerId}] doesn't exist in the items list.`,
      );
    }
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
