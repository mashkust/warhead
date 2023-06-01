export const inputsDimensions = [
  {
    label: "D",
    text: "Диаметр основания ГО, мм",
  },
  {
    label: "lobr",
    text: "Длина образующей ГО, мм",
  },
  {
    label: "dmin",
    text: "Диаметр меньшего основания конуса ГО, мм",
  },
  {
    label: "Pmax",
    text: "Максимальное расчетное давление, МПа",
  },
];

export const inputsMaterials = [
  {
    label: "E1",
    text: "Продольный модуль упругости, ГПа",
  },
  {
    label: "E2",
    text: "Поперечный модуль упругости, ГПа",
  },
  {
    label: "ν12",
    text: "Коэффициент Пуассона",
  },
  {
    label: "ν21",
    text: "Коэффициент Пуассона",
  },
  {
    label: "ρ",
    text: "Плотность",
  },
];

export const valuesMaterials = [
  {
    values: {
      E1: 140,
      E2: 9.6,
      ν12: 0.33,
      ν21: 0.023,
      ρ: 1500,
    },
    text: "Углепластик ЛУП",
  },
  {
    values: {
      E1: 48,
      E2: 10,
      ν12: 0.25,
      ν21: 0.052,
      ρ: 1900,
    },
    text: "Стеклопластик ВСП52",
  },
];
