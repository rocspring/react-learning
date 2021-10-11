/**
 * @desc 国际化配置组件
 */
import React from 'react';
import intl from 'react-intl-universal';
import { ConfigProvider } from 'antd';
import moment from 'moment';
import zhCN from 'antd/lib/locale/zh_CN';
import { LanguageType } from 'src/common/i18n';
import 'moment/locale/zh-cn';

export interface Props {
  locale?: LanguageType;
}

interface State {
  initDone: boolean;
}

const locales = {
  'en-US': require('src/language/i18n/en-US'),
  'zh-CN': require('src/language/i18n/zh-CN')
};

// TODO: 支持国际化自定义
moment.locale('zh-cn');

export default class I18nConfigProvider extends React.Component<Props, State> {
  state = { initDone: false };

  componentDidMount() {
    this.loadLocales();
  }

  loadLocales() {
    // init method will load CLDR locale data according to currentLocale
    // react-intl-universal is singleton, so you should init it only once in your app
    intl
      .init({
        currentLocale: LanguageType.zhCN,
        locales
      })
      .then(() => {
        // After loading CLDR locale data, start to render
        this.setState({ initDone: true });
      });
  }

  render() {
    const { children } = this.props;

    return this.state.initDone && <ConfigProvider locale={zhCN}>{children}</ConfigProvider>;
  }
}
