export interface Indicator {
  version:           string;
  autor:             string;
  fecha:             Date;
  uf:                Bitcoin;
  ivp:               Bitcoin;
  dolar:             Bitcoin;
  dolar_intercambio: Bitcoin;
  euro:              Bitcoin;
  ipc:               Bitcoin;
  utm:               Bitcoin;
  imacec:            Bitcoin;
  tpm:               Bitcoin;
  libra_cobre:       Bitcoin;
  tasa_desempleo:    Bitcoin;
  bitcoin:           Bitcoin;
}

export interface Bitcoin {
  codigo:        string;
  nombre:        string;
  unidad_medida: UnidadMedida;
  fecha:         Date;
  valor:         number;
}

export enum UnidadMedida {
  Dólar = "Dólar",
  Pesos = "Pesos",
  Porcentaje = "Porcentaje",
}

export interface Detalle {
  version:       string;
  autor:         string;
  codigo:        string;
  nombre:        string;
  unidad_medida: string;
  serie:         Serie[];
}

export interface Serie {
  fecha: Date;
  valor: number;
}