import links from "@data/links.json";
import { LocalesList, LocalesType } from "@helpers/locale";
import { createSignal } from "solid-js";

type PropsType = {
  currentLanguage: string;
  currentPage: string;
  locale: LocalesType;
};

const Menu = (props: PropsType) => {
  const { currentLanguage, currentPage, locale } = props;
  const [visible, setVisible] = createSignal(false);
  const [isLanguagePopup, setIsLanguagePopup] = createSignal(false);

  return (
    <>
      {!visible() && (
        <img
          src="/assets/menu.svg"
          alt="Menu"
          onClick={() => setVisible(true)}
        />
      )}
      <div
        classList={{
          "fixed top-0 left-0 bg-background p-8 w-full h-full z-40 transition-opacity invisible opacity-0":
            true,
          "opacity-100 !visible": visible(),
        }}
      >
        <div class="mb-8 flex items-center justify-between">
          <a href={`/${currentLanguage}/home`} class="flex items-center gap-2">
            <img src="/assets/logo-filled.svg" alt="logo" class="h-4 w-4" />
            <div class="text-2xl font-bold">Malifor</div>
          </a>
          <img
            src="/assets/close.svg"
            alt="close"
            onClick={() => setVisible(false)}
          />
        </div>
        <div class="flex flex-col text-gray">
          {links.map((link, i) => (
            <a
              href={`/${currentLanguage}/${link}`}
              classList={{
                "font-medium flex mt-4 text-xl": true,
                "text-white": link === currentPage,
              }}
            >
              <span class="text-primary">#</span>
              {/* @ts-ignore */}
              {locale.header.links[link]}
            </a>
          ))}
          <div class="relative mt-4 cursor-pointer">
            <div
              class="flex gap-1"
              onClick={() => setIsLanguagePopup((prev) => !prev)}
            >
              {currentLanguage.toUpperCase()}
              <img src="/assets/arrow-down.svg" alt="arrow-down" />
            </div>
            <div
              classList={{
                "absolute invisible opacity-0 p-2 border border-gray transition-opacity z-50":
                  true,
                "!visible opacity-100": isLanguagePopup(),
              }}
            >
              {LocalesList.filter((l) => l !== currentLanguage).map((lang) => (
                <a
                  href={`/${lang}/${currentPage}`}
                  class="mb-1.5 block last:m-0 hover:text-white"
                >
                  {lang.toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
