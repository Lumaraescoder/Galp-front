export type CardInfoProps = {
  _id: string;
  description: string;
  business: string;
  stakeholder: string;
  email: string;
};
export type Stack = {
  stakeholder: CardInfoProps;
};

export type Contract = {
  url: string;
  name: string;
  createdBy: string;
  _id: string;
  createdAt: string;
};

export type Stakeholder = {
  _id: string;
  description: string;
  business: string;
  stakeholder: string;
  location: string;
  ceo: string;
  contact: string;
  cashflow: string;
  logo: string;
  email: string;
  cellphone: string;
  contracts: Contract[];
  stakeholderType: string;
  address: string;
  phone: string;
  name: string;
  focalPoint: string;
};
export interface CompanyInfo {
  name: string;
  description: string;
  location: string;
  contactNumber: string;
  email: string;
  logoUrl: string;
}

export interface StacekHolderProps {
  company: string;
  stakeholder: string;
  address: string;
}
