import { observable, action, computed, autorun, makeAutoObservable } from 'mobx';

export default class BasicStore {
  @observable count: number = 0;

  constructor() {
    makeAutoObservable(this);
    autorun(() => {
      console.log(this.count);
    });
  }

  @computed get computedValue() {
    return Number(this.count) + 1;
  }

  @action changeCount(num) {
    this.count = Number(num);
  }
}
