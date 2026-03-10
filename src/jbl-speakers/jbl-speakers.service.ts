import { Injectable } from '@nestjs/common';

@Injectable()
export class JblSpeakersService {
  private speakers = [
    { id: 101, name: 'JBL Flip 6', power: 30, price: 4500, bluetooth: true },
    { id: 102, name: 'JBL Charge 5', power: 40, price: 6200, bluetooth: true },
    { id: 103, name: 'JBL CEBSNU', power: 400, price: 3000, bluetooth: true },
  ];

  findAll() {
    return this.speakers;
  }

  findOne(sId: number) {
    return this.speakers.find((speaker) => speaker.id === sId);
  }

  create(data: any) {
    const speaker = {
      id: this.speakers.length + 1,
      ...data,
    };

    this.speakers.push(speaker);
    return speaker;
  }

  update(id: number, data: any) {
    const speaker = this.findOne(id);

    if (speaker) {
      Object.assign(speaker, data);
    }

    return speaker;
  }

  remove(id: number) {
    this.speakers = this.speakers.filter((s) => s.id !== id);

    return { message: 'Deleted successfully' };
  }
}
