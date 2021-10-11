// import AppService from '../services';
import BasicStore from './basic';
import LanguageStore from './language';

const appStore = {
  basicStore: new BasicStore(),
  languageStore: new LanguageStore()
};

export default appStore;

export { BasicStore, LanguageStore };
