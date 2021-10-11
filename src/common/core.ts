export const REACT_APP_ENV = process.env.REACT_APP_ENV;
export const isProd = REACT_APP_ENV === 'production' || REACT_APP_ENV === 'huawei';
export const isDev = REACT_APP_ENV === 'development';
export const resourceBase = process.env.PUBLIC_URL;
