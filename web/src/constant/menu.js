import config from "/public/static/config.json";

export const MENU_LOCKSCREEN = config.APPS.MENU_LOCKSCREEN;
export const MENU_GARAGE = config.APPS.MENU_GARAGE;
export const MENU_EMAIL = config.APPS.MENU_EMAIL;
export const MENU_ADS = config.APPS.MENU_ADS;
export const MENU_BANK = config.APPS.MENU_BANK;
export const MENU_HOUSE = config.APPS.MENU_HOUSE;
export const MENU_SERVICE = config.APPS.MENU_SERVICE;
export const MENU_CAMERA = config.APPS.MENU_CAMERA;
export const MENU_GALLERY = config.APPS.MENU_GALLERY;
export const MENU_PHONE = config.APPS.MENU_PHONE;
export const MENU_MESSAGE = config.APPS.MENU_MESSAGE;
export const MENU_LOOPS = config.APPS.MENU_LOOPS;
export const MENU_SETTING = config.APPS.MENU_SETTING;
export const MENU_CONTACT = config.APPS.MENU_CONTACT;
export const MENU_DEFAULT = config.APPS.MENU_DEFAULT;
export const MENU_MESSAGE_CHATTING = config.APPS.MENU_MESSAGE_CHATTING;
export const MENU_EMAIL_DETAIL = config.APPS.MENU_EMAIL_DETAIL;
export const MENU_NEWS = config.APPS.MENU_NEWS;
export const MENU_LOVY = config.APPS.MENU_LOVY;
export const MENU_INCOMING_CALL_NOTIFICATION =
  config.APPS.MENU_INCOMING_CALL_NOTIFICATION;
export const MENU_START_CALL_NOTIFICATION =
  config.APPS.MENU_START_CALL_NOTIFICATION;
export const MENU_NEW_MESSAGE_NOTIFICATION =
  config.APPS.MENU_NEW_MESSAGE_NOTIFICATION;
export const MENU_INCALL = config.APPS.MENU_INCALL;
export const MENU_NEW_NEWS_NOTIFICATION =
  config.APPS.MENU_NEW_NEWS_NOTIFICATION;
export const MENU_INTERNAL_NOTIFICATION =
  config.APPS.MENU_INTERNAL_NOTIFICATION;
export const NAME = config.name;
export const LOGO = config.logo;
export const CLOSE_CALL = "CLOSE_CALL";

export const MENU_CONSTANT = [
  {
    icon: "/images/contact.svg",
    path: "/contact",
    label: MENU_CONTACT,
  },
  {
    icon: "/images/mail.svg",
    path: "/mail",
    label: MENU_EMAIL,
  },
  {
    icon: "/images/ads.svg",
    path: "/ads",
    label: MENU_ADS,
  },
  {
    icon: "/images/service.svg",
    path: "/service",
    label: MENU_SERVICE,
  },
  {
    icon: "/images/garage.svg",
    path: "/garage",
    label: MENU_GARAGE,
  },
  {
    icon: "/images/house.svg",
    path: "/house",
    label: MENU_HOUSE,
  },
  {
    icon: "/images/wallet.svg",
    path: "/wallet",
    label: MENU_BANK,
  },
  {
    icon: "/images/twitter.svg",
    path: "/twitter",
    label: MENU_LOOPS,
  },
  {
    icon: "/images/news.svg",
    path: "/news",
    label: MENU_NEWS,
  },
  {
    icon: "/images/gallery.svg",
    path: "/gallery",
    label: MENU_GALLERY,
  },
];

export const BOTTOM_MENU_CONSTANT = [
  {
    icon: "/images/phone.svg",
    path: "/phone",
    label: MENU_PHONE,
  },
  {
    icon: "/images/message.svg",
    path: "/message",
    label: MENU_MESSAGE,
  },
  {
    icon: "/images/camera.svg",
    path: "/camera",
    label: MENU_CAMERA,
  },
  {
    icon: "/images/setting.svg",
    path: "/setting",
    label: MENU_SETTING,
  },
];

export const PHONE_FRAME_HEIGHT = 610;
export const PHONE_FRAME_WIDTH = 300;
export const PHONE_HEIGHT = 610 - 30;
export const PHONE_WIDTH = 310 - 40.5;
export const PHONE_ROUNDED = 40;