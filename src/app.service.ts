import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private shortenedUrls = new Map<string, string>();

  shortenUrl(data: { urlToShort: string; alias?: string }) {
    if (!data.urlToShort) {
      return null;
    } else if (this.shortenedUrls.has(data.alias)) {
      return null;
    } else if (data.urlToShort && data.alias) {
      this.shortenedUrls.set(data.alias, data.urlToShort);
      console.log(this.shortenedUrls);
      return data.alias;
    } else if (data.urlToShort && !data.alias) {
      let alias = (Math.random() + 1).toString(36).substring(7);
      while (this.shortenedUrls.has(alias)) {
        alias = (Math.random() + 1).toString(36).substring(7);
      }
      this.shortenedUrls.set(alias, data.urlToShort);
      return alias;
    }
  }

  redirect(alias: string) {
    console.log(
      `Getting shorten url with alias ${alias} => ${this.shortenedUrls.get(
        alias,
      )}`,
    );
    return this.shortenedUrls.get(alias);
  }
}
