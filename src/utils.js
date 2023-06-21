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
  lpn,
  D,
  m0
) => {
  const { pow, sqrt, ceil } = Math;

  const lgo = lpn - 1.2;
  const rgo = 0.1 * D;
  const lobr = sqrt(pow(D / 2 - rgo, 2) + pow(lgo - rgo, 2));

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
    {
      name: "Диаметр, м",
      param: D,
    },
    {
      name: "Длина головной части, м",
      param: lpn,
    },
    {
      name: "Стартовая масса УБР, кг",
      param: m0,
    },
  ];
  const imgResult = {
    bb: [lbb, dbb],

    tlc: [ltlc, dtlc],
  };
  const dimensionsResult = {
    //в мм
    D: ceil(D * 1000),
    lobr: ceil(lobr * 1000),
  };
  const result = {
    text: textResult,
    img: imgResult,
    dimensions: dimensionsResult,
  };
  return result;
};

export const getParams = (inputFields) => {
  const { location, Lmax, J1, ΔPф, σr, P1, Rц, Δpф, M1 } = inputFields;
  const { pow, log, sqrt, cos, PI, exp } = Math;
  let message;

  if (
    Lmax <= 0 ||
    J1 <= 0 ||
    ΔPф <= 0 ||
    σr <= 0 ||
    P1 <= 0 ||
    Rц <= 0 ||
    Δpф <= 0 ||
    M1 <= 0
  ) {
    message = "Ошибка исходных данных.";
  }

  const nbb = 1; // так как моноблочная

  //для стационарной моноблочной УБР

  const Kz = location ? 1.15 : 1.1;
  // const Kz = 1.15; коэффициента учета затраты масс на защиту УБР от ПФЯВ И ОНФП стационарного базирования
  // const Kz = 1.1; //подвижного базирования

  const alfa = 15; //альфа угол 15 градусов
  const betta = 25; //альфа угол 15 градусов

  const tr = 5; //  время разворота и стабилизации
  const toth = tr; //, отвода и увода
  const Vv = 10; // 10м/с скоростной интервал для моноблочной УБР

  //по таблицам
  let mbb;
  let Lvk;

  //1.Мощность ББ и потребная мощность

  //для точечной цели
  const Ксpl = 0.97 * pow(ΔPф, -0.37);
  const qpl =
    pow(2 / nbb, 1.5) * pow(σr / Ксpl, 3) * pow(log(1 / (1 - P1)), 1.5);

  //для площадной цели
  const Ксt = 0.78 * pow(Δpф, -0.5);
  const qt = pow(M1 / nbb, 1.5) * pow(Rц / Ксt, 3);

  //Мощность для поражения заданных целей должна быть больше максимально получившейся
  const qmax = qpl > qt ? 0.9 * qpl : 0.9 * qt;

  //2.Параметры боевого оснащения
  if (qmax <= 0.1) mbb = 100;
  if (qmax <= 0.3 && qmax > 0.1) mbb = 135;
  if (qmax <= 0.5 && qmax > 0.3) mbb = 185;
  if (qmax <= 0.8 && qmax > 0.5) mbb = 270;
  if (qmax <= 1 && qmax > 0.8) mbb = 320;
  if (qmax <= 1.5 && qmax > 1) mbb = 450;
  if (qmax > 1.5) {
    mbb = 450;
    message = "Неккоректно произведен расчет. Мощность поражения больше 1.5Мт.";
  }

  const dbb = 0.037 * sqrt(mbb);
  const lbb = 2.5 * dbb;

  // const wdubs = 48; //должно как-то задаваться в приближении
  const mksp = 0.25 * mbb;
  const mtlc = (0.8 * mksp) / 2;
  const msm = (0.2 * mksp) / 3;

  const dtlc = 0.037 * sqrt(mtlc);
  const ltlc = 2.5 * dtlc;
  const lpn = 2.5 + pow(nbb, 1 / 3) * dbb;

  //Масса боевого оснащения
  const mbo = mksp + mbb;

  // 3.Масса доводочной ДУ и поленой нагрузки
  //масса в начальном приближении

  const mpl = 10 * nbb + 0.1 * mbo; //масса платформы
  const msu = 95 + 5 * sqrt(nbb); //масса системы управления
  const mkbs = 45 + 0.06 * mbo; //масса конструкции БС

  //  Lvk опционально менять
  if (Lmax <= 1000) Lvk = 0.46;
  if (Lmax <= 2500 && Lmax > 1000) Lvk = 0.69;
  if (Lmax <= 4500 && Lmax > 2500) Lvk = 0.88;
  if (Lmax <= 6000 && Lmax > 4500) Lvk = 0.97;
  if (Lmax <= 8000 && Lmax > 6000) Lvk = 4.04;
  if (Lmax <= 10000 && Lmax > 8000) Lvk = 5.69;
  if (Lmax > 10000) Lvk = 8;
  if (Lmax > 13000) {
    Lvk = 8;
    message = "Требуется проверка - большая дальность.";
  }
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

    const wdu = wgar + wnav; //расчетная масса топлива

    if (w - wdu < 1 && w - wdu > 0) {
      //если остается меньше 1 кг топлива в баке
      break;
    }
  }

  //диаметр
  const Jsr = 1.13 * J1;
  console.log(J1);
  const KvVk = 800 * pow(Lmax, 1 / 4);
  console.log(KvVk);
  const m0 = 1.65 * mpn * exp(KvVk / Jsr) + 1000 * 0.01 * pow(Lmax, 2 / 3); //стартовая масса ракеты уточни 1,65
  console.log(m0);
  const D = 0.52 * pow(m0 / 1000, 1 / 3);
  if (D < 0.5) {
    message = "Требуется проверка - возможна ошибка.";
  }

  //данные для построения таблицы
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
      lpn,
      D,
      m0
    ),
    table: getTable(mpn, wgar, wotvod, mtlc, msm, wbp, mbb, w, tgar, tr, tbp),
    message: message,
  };
  return results;
};

export const getDepth = (inputDepth) => {
  const { pow, sqrt, PI, ceil } = Math;
  const { D, lobr, dmin, Pmax, E1, E2, ν12, ν21, ρ } = inputDepth;
  const b = pow(
    (3 * sqrt(6) * Pmax * lobr * pow(D / 2, 1.5) * pow(1 - ν12 * ν21, 0.75)) /
      (2 * PI * pow(E1 * 1000, 0.75) * pow(E2 * 1000, 0.25)),
    0.4
  );
  const maxB = ceil(b);
  const V =
    (PI / 2) *
    sqrt(pow(lobr / 1000, 2) - pow((D / 1000 - dmin / 1000) / 2, 2)) *
    (maxB / 1000) *
    (D / 1000 + dmin / 1000 - 2 * (maxB / 1000));

  const mgo = V * ρ;
  return { b: b, mgo: mgo };
};

export default getParams;
