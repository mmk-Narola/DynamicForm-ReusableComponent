export interface FormField {
  id?: string;
  name?: string;
  label?: string;
  palceholder?: string;
  type?: string;
  fieldType?: string;
  value?: string;
  required?: boolean;
  options?: Option[];
  validations?: Validator[];
}

interface Option {
  _id?: string;
  name?: string;
  sortname?: string;
  label?: string;
  key?: string;
  value?: string;
}

export interface Validator {
  name: string;
  validator: any;
  message: string;
}
