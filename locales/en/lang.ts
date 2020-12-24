import { Language } from '../../next-env';

const t: Language = {
  name: 'english',
  value: 'en',
  name1: 'русский',
  value1: 'ru',
  interface: {
    settings: 'settings',
    registration: 'registration',
    select_lang: 'select language',
    login: 'login',
    icon: 'icon',
    name: 'name',
    email: 'email',
    password: 'password',
    passwordRepeat: 'password repeat',
    home: 'home',
    send: 'send',
    search: 'search',
    setLink: 'set link or video ID',
    selectLang: 'select lang of needed subtitles',
    subtitlesAreExists: 'previously saved subtitles found',
  },
  content: {
    siteName: 'Youtube subtitle search',
    siteDescription: 'provide a link to the video and search in its subtitles',
  },
  messages: {
    linkNotValid: 'link not valid',
  },
  server: {
    user: {
      errorGetByEmail: 'error while getting user by email',
      warningAreRegistered: 'this email was registered earlier',
      errorRegistration: 'error while added new user',
      successRegistration: 'registration successfully',
      warningEmailNotSend: 'email not send',
      warningEmailNotValid: 'email are not valid',
      warningPasswordNotSend: 'password not send',
      warningPasswordRepeatNotSend: 'password repeat not send',
      warningPasswordTooShort: 'password too short',
      warningPasswordsNotMatch: 'passwords not match',
      warningInputParamsNotSend: 'input params not send',
      infoMinimumPasswordLength: 'Minimum length of password is: ',
      warningGetUserData: 'user data not received',
      successLogin: 'success login',
      warningEmailNotRegister: 'email not registered',
      warningEmailOrPasswordNotMatch: 'email or password not match',
    },
    subtitles: {
      successFound: 'subtitles found',
      successReceived: 'subtitles received',
      warningVideoIDNotSend: 'video ID not send',
      errorGettingVideoCaptions: 'error getting video captions',
      warningSubtitlesNotFound: 'subtitles not found',
      warningVideoNotFound: 'video not found',
    },
  },
};

export default t;
