const getTable = (mpn, wgar, wotvod, mtlc, msm, wbp, mbb, w, tgar, tr, tbp) => {
  const tableResult = [
    {
      name: "Перед началом работы",
      param: [mpn, w, null, 0, null, null],
    },

    {
      name: "Компенсация недолета",
      param: [null, null, wgar, null, tgar, null],
    },
    {
      name: "Перед началом разворота",
      param: [mpn - wgar, w - wgar, null, tgar, null, null],
    },
    {
      name: "Разворот",
      param: [null, null, wotvod, null, tr, null],
    },
    {
      name: "Перед отделением ТЛЦ и СМ",
      param: [
        mpn - wgar - wotvod,
        w - wgar - wotvod,
        null,
        tgar + tr,
        null,
        null,
      ],
    },
    {
      name: "Отделение ТЛЦ и СМ",
      param: [null, null, null, null, null, mtlc + msm],
    },
    {
      name: "После отделения ТЛЦ и СМ",
      param: [
        mpn - wgar - wotvod - mtlc - msm,
        w - wgar - wotvod,
        null,
        tgar + tr,
        null,
        null,
      ],
    },
    {
      name: "Построение БП",
      param: [null, null, wbp / 2, null, tbp, null],
    },
    {
      name: "Перед отделением ТЛЦ и СМ",
      param: [
        mpn - wgar - wotvod - mtlc - msm - wbp / 2,
        w - wgar - wotvod - wbp / 2,
        null,
        tgar + tr + tbp,
        null,
        null,
      ],
    },
    {
      name: "Отделение ТЛЦ и СМ",
      param: [null, null, null, null, null, mtlc + msm],
    },
    {
      name: "После отделения ТЛЦ и СМ",
      param: [
        mpn - wgar - wotvod - mtlc - msm - wbp / 2 - mtlc - msm,
        w - wgar - wotvod - wbp / 2,
        null,
        tgar + tr + tbp,
        null,
        null,
      ],
    },
    {
      name: "Построение БП",
      param: [null, null, wbp / 2, null, tbp, null],
    },
    {
      name: "Перед отделением ББ и СМ",
      param: [
        mpn - wgar - wotvod - 2 * mtlc - 2 * msm - wbp,
        w - wgar - wotvod - wbp,
        null,
        tgar + tr + 2 * tbp,
        null,
        null,
      ],
    },
    {
      name: "Отделение ББ и СМ",
      param: [null, null, null, null, null, mbb + msm],
    },
    {
      name: "После отделения ББ и СМ",
      param: [
        mpn - wgar - wotvod - 2 * mtlc - 3 * msm - wbp - mbb,
        w - wgar - wotvod - wbp,
        null,
        tgar + tr + 2 * tbp,
        null,
        null,
      ],
    },
    {
      name: "Отход и увод БС",
      param: [null, null, wotvod, null, tr, null],
    },
    {
      name: "После отхода и увода БС",
      param: [
        mpn - wgar - 2 * wotvod - 2 * mtlc - 3 * msm - wbp - mbb,
        w - wgar - 2 * wotvod - wbp,
        null,
        tgar + 2 * tr + 2 * tbp,
        null,
        null,
      ],
    },
  ];
  return tableResult;
};

const getText = (
  mbb,
  lbb,
  dbb,
  mksp,
  ltlc,
  dtlc,
  mbo,
  mpl,
  mkbs,
  msu,
  mdu,
  mpn,
  lpn
) => {
  const textResult = [
    {
      name: "Масса ББ, кг",
      param: mbb,
    },

    {
      name: "Масса КСП, кг",
      param: mksp,
    },
    {
      name: "Масса БО, кг",
      param: mbo,
    },
    {
      name: "Масса платформы, кг",
      param: mpl,
    },
    {
      name: "Масса конструкции БС, кг",
      param: mkbs,
    },
    {
      name: "Масса СУ, кг",
      param: msu,
    },
    {
      name: "Масса ДУ, кг",
      param: mdu,
    },
    {
      name: "Масса ПН, кг",
      param: mpn,
    },
  ];
  const imgResult = {
    bb: [lbb, dbb],

    tlc: [ltlc, dtlc],

    pn: [lpn],
  };
  const result = {
    text: textResult,
    img: imgResult,
  };
  return result;
};

export const getParams = (inputFields) => {
  const { location, Lmax, J1, ΔPф, σr, P1, Rц, Δpф, M1 } = inputFields;
  const { pow, log, sqrt, cos, PI } = Math;

  const nbb = 1; // так как моноблочная

  //опционально менять потом?
  //для стационарной моноблочной МБР

  const Kz = location ? 1.15 : 1.1;
  // const Kz = 1.15;коэффициента учета затраты масс на защиту УБР от ПФЯВ И ОНФП стационарного базирования
  // const Kz = 1.1; //подвижного базирования

  const alfa = 15; //альфа угол 15 градусов
  const betta = 25; //альфа угол 15 градусов

  const tr = 5; //  время разворота и стабилизации
  const toth = tr; //, отвода и увода
  const Vv = 10; // 10м/с скоростной интервал для моноблочной УБР

  //по таблицам
  let q;
  let mbb;
  let Lvk;

  //1.Мощность ББ и потребная мощность

  //для точечной цели
  const Ксpl = 0.97 * pow(ΔPф, -0.37);
  const qpl =
    pow(2 / nbb, 1.5) * pow(σr / Ксpl, 3) * pow(log(1 / (1 - P1)), 1.5);

  //для площадной цели
  const Ксt = 0.78 * pow(Rц, -0.5);
  const qt = pow(M1 / nbb, 1.5) * pow(Δpф / Ксt, 3);

  //Мощность для поражения заданных целей должна быть больше максимально получившейся
  q = qpl > qt ? qpl : qpl;

  //2.Параметры боевого оснащения
  //нужно как-то анализировать таблицу
  q = 1.5; //Мт
  mbb = 450; //450 кг надо как-то из таблицы достать

  const dbb = 0.037 * sqrt(mbb);
  const lbb = 2.5 * dbb;
  console.log(lbb);

  // const wdubs = 48; //должно как-то задаваться в приближении
  const mksp = 0.25 * mbb;
  const mtlc = (0.8 * mksp) / 2;
  const msm = (0.2 * mksp) / 3;

  const dtlc = 0.037 * sqrt(mtlc);
  const ltlc = 2.5 * dtlc;
  const lpn = 2 + pow(nbb, 1 / 3) * dbb;

  //Масса боевого оснащения
  const mbo = mksp + mbb;

  // 3.Масса доводочной ДУ и поленой нагрузки
  //масса в начальном приближении

  const mpl = 10 * nbb + 0.1 * mbo; //масса платформы
  const msu = 95 + 5 * sqrt(nbb); //масса системы управления
  const mkbs = 45 + 0.06 * mbo; //масса конструкции БС

  Lvk = 5.69; //надо как то из таблицы доставать
  //при угле альфа=15

  const Lgar = 0.04 * Lmax;

  // let mpn = Kz * (166 * pow(nbb, 0.155) + 1.16 * mbo) * (1 + (0.132 * (2 * nbb - 1) * Ks * Kl) / nbb);
  let mpn, P, wbp, wnav, wgar, mk, mdu, w;

  for (let i = 10; i < 100; i++) {
    w = i; //масса топлива
    mk = 9.7 * pow(w, 0.33); //масса конструкции двухрежимной доводочной ду
    mdu = mk + w;
    mpn = Kz * (mbo + mpl + msu + mkbs + mdu);
    wgar = (Lgar * mpn) / (Lvk * J1 * cos((alfa * PI) / 180)); //запас топлива на компенсацию недолета

    //тяга доводочной ду
    P = 2 * mpn;
    //при угле betta=25
    wbp = (2 * Vv * (mpn - wgar)) / (J1 * cos((betta * PI) / 180)); //топливо на После построение ТЛЦ и СМ
    wnav = (P / J1) * (toth + tr) + wbp; //запас топлива на наведения бо на цель

    let wdu = wgar + wnav; //расчетная масса топлива

    mk = 9.7 * pow(w, 0.33); //масса конструкции двухрежимной доводочной ду
    mdu = mk + w;

    mpn = Kz * (mbo + mpl + msu + mkbs + mdu);
    if (w - wdu < 1 && w - wdu > 0) {
      //если остается меньше 1 кг топлива в баке
      break;
    }
  }

  // данные для построения таблицы
  //расход продуктов сгорания и время работы ДУ
  const msec = P / J1; //расход продуктов сгорания
  const tres = w / msec; // время работы ду
  const tgar = wgar / msec;
  const wotvod = tr * msec; // масса на разворот или отвод/увод
  const tbp = (wbp * msec) / 2; //время на После построение ТЛЦ и СМ*2

  const results = {
    info: getText(
      mbb,
      lbb,
      dbb,
      mksp,
      ltlc,
      dtlc,
      mbo,
      mpl,
      mkbs,
      msu,
      mdu,
      mpn,
      lpn
    ),
    table: getTable(mpn, wgar, wotvod, mtlc, msm, wbp, mbb, w, tgar, tr, tbp),
  };
  return results;
};

export const getDimensions = (inputDimensions) => {
  const { pow, sqrt, PI } = Math;
  const { D, Rскр, l, Pmax, E1, E2, ν12, ν21, ρ } = inputDimensions;
  const lobr = sqrt(pow(D / 2 - Rскр, 2) + pow(l - Rскр, 2));
  const b = pow(
    (3 * sqrt(6) * Pmax * lobr * pow(D / 2, 1.5) * pow(1 - ν12 * ν21, 0.75)) /
      (2 * PI * pow(E1 * 1000, 0.75) * pow(E2 * 1000, 0.25)),
    0.4
  );
  console.log(lobr);
  return b;
};
export default getParams;
