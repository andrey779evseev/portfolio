import type enType from "../locales/en.json";
import type ruType from "../locales/ru.json";
import en from "../locales/en.json";
import ru from "../locales/ru.json";

export type LocalesType = typeof enType & typeof ruType;

export const LocalesList = ["en", "ru"] as const;
export type LocalesListType = (typeof LocalesList)[number];

export const createLocale = (
  locale: LocalesListType | string | undefined,
): LocalesType => {
  return locale === "ru" ? ru : en;
};
