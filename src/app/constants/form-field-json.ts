export interface FieldJSON {
  data: FieldJSON[];
}

export interface FieldJSON {
  id?: string;
  name?: string;
  label?: string;
  palceholder?: string;
  type?: string;
  fieldType?: string;
  value?: string;
  required?: boolean;
  options?: Option[];
  validators?: ValidatorJSON;
}

interface Option {
  _id?: string;
  name?: string;
  sortname?: string;
  label?: string;
  key?: string;
  value?: string;
}

export interface ValidatorJSON {
  required?: boolean;
  email?: boolean;
  minLength?: boolean;
  maxLength?: boolean;
  pattern?: string;
  min?: number;
  max?: number;
  requiredTrue?: boolean;
}
