import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Panel sprzedawcy": "Seller dashboard",

      "Wykres sprzedaży": "Sales chart",
      Zamówienia: "Orders",
      "Ranking ofert": "Offer ranking",
      "Opinie kupujących": "Opinions",
      "Jakość sprzedaży": "Sales quality",
      "Tryb nocny": "Night mode",

      "Typ danych": "Data type",
      Obrót: "Circulation",
      "Liczba sprzedanych sztuk": "Sold items",

      "Typ wykresu": "Chart type",
      Słupkowy: "Bar",
      Liniowy: "Line",

      "Zakres czasu": "Time span",
      Dzisiaj: "Today",
      "Obecny tydzień": "Current week",
      "Ostatni tydzień": "Last week",

      "Poprzedni okres": "Previous time span",

      "dzisiaj": "today",
      "wczoraj": "yesterday",
      "ten tydzień": "this week",
      "ostatni tydzień": "last week",
      "poprzedni tydzień": "previous week",

      Nieopłacone: "Unpaid",
      Niewysłane: "Unsent",
      Zwroty: "Returns",

      OrdersAlert:
        "You don't have any orders! To increase visibility of offers click <2>here</2>.",

      Język: "Language",
      "Zaloguj się": "Log in",
      Hasło: "Password",
      "Adres e-mail lub login": "E-mail or login",
      "Zmień konto": "Switch account",
      "Wyloguj się": "Log out",
      "Dodaj konto": "Add account",
      "Wybierz konto": "Choose account",
      Razem: "Total",
      sortowanie: "sort by",
      "najczęściej kupowane": "most buyed",
      "najrzadziej kupowane": "least buyed",
      Sprzedano: "Sold",
      Wyświetlenia: "Views",
      Oferta: "Offer",
    }
  }
};
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "pl", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
