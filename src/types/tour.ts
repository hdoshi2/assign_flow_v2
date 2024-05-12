import { InputDateValue, DatePickerValue } from 'src/utils/format-time';

// ----------------------------------------------------------------------

export type ITourFilterValue = string | string[] | DatePickerValue | ITourGuide[];

export type ITourFilters = {
  services: string[];
  destination: string[];
  tourGuides: ITourGuide[];
  startDate: DatePickerValue;
  endDate: DatePickerValue;
};

// ----------------------------------------------------------------------

export type ITourGuide = {
  id: string;
  name: string;
  avatarUrl: string;
  phoneNumber: string;
};

export type ITourBooker = {
  id: string;
  name: string;
  guests: number;
  avatarUrl: string;
};

export type ITourItem = {
  id: string;
  name: string;
  price: number;
  totalViews: number;
  tags: string[];
  content: string;
  publish: string;
  images: string[];
  durations: string;
  priceSale: number;
  services: string[];
  destination: string;
  ratingNumber: number;
  bookers: ITourBooker[];
  tourGuides: ITourGuide[];
  createdAt: InputDateValue;
  available: {
    startDate: InputDateValue;
    endDate: InputDateValue;
  };
};
