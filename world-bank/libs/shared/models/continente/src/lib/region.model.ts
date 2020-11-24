export interface Region {
  id:          string;
  iso2Code:    string;
  name:        string;
  region:      Adminregion;
  adminregion: Adminregion;
  incomeLevel: Adminregion;
  lendingType: Adminregion;
  capitalCity: string;
  longitude:   string;
  latitude:    string;
}

export interface Adminregion {
  id:       ID;
  iso2code: Iso2Code;
  value:    Value;
}

export enum ID {
  Eca = "ECA",
  Ecs = "ECS",
  Empty = "",
  Hic = "HIC",
  Ibd = "IBD",
  Idb = "IDB",
  Idx = "IDX",
  Lic = "LIC",
  Lmc = "LMC",
  Lnx = "LNX",
  Umc = "UMC",
}

export enum Iso2Code {
  Empty = "",
  The7E = "7E",
  Xd = "XD",
  Xf = "XF",
  Xh = "XH",
  Xi = "XI",
  Xm = "XM",
  Xn = "XN",
  Xt = "XT",
  Xx = "XX",
  Z7 = "Z7",
}

export enum Value {
  Blend = "Blend",
  Empty = "",
  EuropeCentralAsia = "Europe & Central Asia",
  EuropeCentralAsiaExcludingHighIncome = "Europe & Central Asia (excluding high income)",
  HighIncome = "High income",
  Ibrd = "IBRD",
  Ida = "IDA",
  LowIncome = "Low income",
  LowerMiddleIncome = "Lower middle income",
  NotClassified = "Not classified",
  UpperMiddleIncome = "Upper middle income",
}
