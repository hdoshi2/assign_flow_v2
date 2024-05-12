import { InputDateValue } from 'src/utils/format-time';

// ----------------------------------------------------------------------

export type IJobFilterValue = string | string[];

export type IJobFilters = {
  roles: string[];
  experience: string;
  locations: string[];
  benefits: string[];
  employmentTypes: string[];
};

// ----------------------------------------------------------------------

export type IJobCandidate = {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
};

export type IJobCompany = {
  name: string;
  logo: string;
  phoneNumber: string;
  fullAddress: string;
};

export type IJobSalary = {
  type: string;
  price: number;
  negotiable: boolean;
};

export type IJobItem = {
  id: string;
  role: string;
  title: string;
  content: string;
  publish: string;
  skills: string[];
  totalViews: number;
  experience: string;
  salary: IJobSalary;
  benefits: string[];
  locations: string[];
  company: IJobCompany;
  createdAt: InputDateValue;
  employmentTypes: string[];
  workingSchedule: string[];
  expiredDate: InputDateValue;
  candidates: IJobCandidate[];
};
