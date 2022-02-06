export const chartSelect = [
  {
    name: "dataType",
    label: "Typ danych",
    menuItems: [
      {
        name: "Obrót",
        value: "money-circulation"
      },
      {
        name: "Liczba sprzedanych sztuk",
        value: "sold-items"
      }
    ]
  },
  {
    name: "type",
    label: "Typ wykresu",
    menuItems: [
      {
        name: "Słupkowy",
        value: "bar"
      },
      {
        name: "Liniowy",
        value: "line"
      }
    ]
  },
  {
    name: "timeSpan",
    label: "Zakres czasu",
    menuItems: [
      {
        name: "Dzisiaj",
        value: "today"
      },
      {
        name: "Obecny tydzień",
        value: "current-week"
      },
      {
        name: "Ostatni tydzień",
        value: "next-week"
      }
    ]
  }
]