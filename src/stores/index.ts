import { RouterStore } from 'mobx-react-router';

// import AppService from '../services';
import BasicStore from './basic';
import LanguageStore from './language';

const routingStore = new RouterStore();

const stores = {
  routingStore,
  basicStore: new BasicStore(),
  languageStore: new LanguageStore()
};

export default stores;

export { BasicStore, LanguageStore };
