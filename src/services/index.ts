import BasicService from './basic';

export default class AppService {
  public token: string = '';
  static self: AppService;

  constructor(token: string, public basic?: BasicService) {
    AppService.self = this;

    this.basic = new BasicService();
  }

  updateToken(token: string) {
    this.token = token;
  }
}
