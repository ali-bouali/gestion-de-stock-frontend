
export interface Menu {
  id?: string;
  titre?: string;
  icon?: string;
  url?: string;
  active?: boolean;
  sousMenu?: Array<Menu>;
}
