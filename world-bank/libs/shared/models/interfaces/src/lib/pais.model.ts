export interface Pais {
  id:          string;
  iso2Code:    string;
  name:        string;
  region:      AdminPais;
  adminregion: AdminPais;
  incomeLevel: AdminPais;
  lendingType: AdminPais;
  capitalCity: string;
  longitude:   string;
  latitude:    string;
}

export interface AdminPais {
  id:       string;
  iso2code: string;
  value:    string;
}
