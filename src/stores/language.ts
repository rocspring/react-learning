/**
 * @desc 国际化语言 store(暂时不需要引用)
 */
import { observable, action, computed } from 'mobx';
import zhCN from 'src/language/i18n/zh-CN';
import enUS from 'src/language/i18n/en-US';
import { LanguageType } from 'src/common/i18n';

export default class LanguageStore {
  @observable self: LanguageStore;
  @observable language: LanguageType = LanguageType.zhCN;

  constructor() {
    this.self = this;
  }

  @computed get currentLanguage() {
    return this.language;
  }

  @computed get resource() {
    switch (this.language) {
      case LanguageType.zhCN:
        return zhCN;
      case LanguageType.enUS:
        return enUS;
      default:
        return zhCN;
    }
  }

  @action changeLanguageTo(language: LanguageType) {
    this.language = language;
  }
}
