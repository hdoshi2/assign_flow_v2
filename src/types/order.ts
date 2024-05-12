import { InputDateValue, DatePickerValue } from 'src/utils/format-time';

// ----------------------------------------------------------------------

export type IOrderTableFilterValue = string | DatePickerValue;

export type IOrderTableFilters = {
  name: string;
  status: string;
  startDate: DatePickerValue;
  endDate: DatePickerValue;
};

// ----------------------------------------------------------------------

export type IOrderHistory = {
  orderTime: InputDateValue;
  paymentTime: InputDateValue;
  deliveryTime: InputDateValue;
  completionTime: InputDateValue;
  timeline: {
    title: string;
    time: InputDateValue;
  }[];
};

export type IOrderShippingAddress = {
  fullAddress: string;
  phoneNumber: string;
};

export type IOrderPayment = {
  cardType: string;
  cardNumber: string;
};

export type IOrderDelivery = {
  shipBy: string;
  speedy: string;
  trackingNumber: string;
};

export type IOrderCustomer = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  ipAddress: string;
};

export type IOrderProductItem = {
  id: string;
  sku: string;
  name: string;
  price: number;
  coverUrl: string;
  quantity: number;
};

export type IOrderItem = {
  id: string;
  taxes: number;
  status: string;
  shipping: number;
  discount: number;
  subTotal: number;
  orderNumber: string;
  totalAmount: number;
  totalQuantity: number;
  history: IOrderHistory;
  customer: IOrderCustomer;
  delivery: IOrderDelivery;
  items: IOrderProductItem[];
  createdAt: InputDateValue;
};
