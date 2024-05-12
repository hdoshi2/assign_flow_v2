import { InputDateValue, DatePickerValue } from 'src/utils/format-time';

import { IAddressItem } from './address';

// ----------------------------------------------------------------------

export type IInvoiceTableFilterValue = string | string[] | DatePickerValue;

export type IInvoiceTableFilters = {
  name: string;
  status: string;
  service: string[];
  endDate: DatePickerValue;
  startDate: DatePickerValue;
};

// ----------------------------------------------------------------------

export type IInvoiceItem = {
  id: string;
  title: string;
  price: number;
  total: number;
  service: string;
  quantity: number;
  description: string;
};

export type IInvoice = {
  id: string;
  sent: number;
  taxes: number;
  status: string;
  subTotal: number;
  discount: number;
  shipping: number;
  totalAmount: number;
  invoiceNumber: string;
  items: IInvoiceItem[];
  dueDate: InputDateValue;
  invoiceTo: IAddressItem;
  invoiceFrom: IAddressItem;
  createDate: InputDateValue;
};
