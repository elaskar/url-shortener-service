import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @MessagePattern('shorten') handleShortenUrl(data: {
    urlToShort: string;
    alias?: string;
  }): string {
    return this.appService.shortenUrl(data);
  }

  @MessagePattern('redirect') handleRedirectUrl(alias: any): string {
    return this.appService.redirect(alias);
  }
}
