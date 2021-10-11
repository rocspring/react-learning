import { observable, action, computed, autorun } from 'mobx';

export default class BasicStore {
  @observable count: number = 0;

  constructor() {
    autorun(() => {
      console.log(this.count);
    });
  }

  @computed get testValue() {
    return this.count;
  }

  @action plus(page) {
    this.count++;
  }
}
