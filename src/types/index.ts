// User types
export type UserRole = 'OWNER' | 'ADMIN' | 'PROVIDER';

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  avatar?: string;
  studioId?: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

// Studio types
export type StudioType = 'SALON' | 'BARBERSHOP' | 'STUDIO' | 'OTHER';

export interface Studio {
  id: string;
  name: string;
  type: StudioType;
  address?: string;
  phone?: string;
  email?: string;
  logo?: string;
  ownerId: string;
  createdAt: Date;
  updatedAt: Date;
}

// Provider types
export interface Provider {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  avatar?: string;
  studioId: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Service types
export interface ServiceCategory {
  id: string;
  name: string;
  studioId: string;
  createdAt: Date;
}

export interface Service {
  id: string;
  name: string;
  description?: string;
  price: number;
  duration: number; // in minutes
  categoryId?: string;
  studioId: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Product types
export interface Product {
  id: string;
  name: string;
  description?: string;
  cost: number;
  price: number;
  stock: number;
  minStock?: number;
  unit: string;
  isForSale: boolean;
  isForInternalUse: boolean;
  studioId: string;
  createdAt: Date;
  updatedAt: Date;
}

// Service Order types
export type PaymentMethod = 'CASH' | 'CREDIT_CARD' | 'DEBIT_CARD' | 'PIX' | 'OTHER';
export type OrderStatus = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';

export interface ServiceOrderItem {
  id: string;
  serviceId: string;
  service?: Service;
  quantity: number;
  price: number;
}

export interface ServiceOrderProduct {
  id: string;
  productId: string;
  product?: Product;
  quantity: number;
  cost: number;
}

export interface ServiceOrder {
  id: string;
  studioId: string;
  providerId: string;
  provider?: Provider;
  clientId?: string;
  items: ServiceOrderItem[];
  products: ServiceOrderProduct[];
  paymentMethod: PaymentMethod;
  totalAmount: number;
  totalCost: number;
  totalCommission: number;
  netProfit: number;
  status: OrderStatus;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Cash Register types
export interface CashRegisterEntry {
  id: string;
  type: 'INCOME' | 'EXPENSE' | 'COMMISSION' | 'PRODUCT_COST';
  amount: number;
  description: string;
  serviceOrderId?: string;
  createdAt: Date;
}

export interface CashRegister {
  id: string;
  studioId: string;
  date: string;
  entries: CashRegisterEntry[];
  totalIncome: number;
  totalExpenses: number;
  totalCommissions: number;
  totalProductCosts: number;
  netProfit: number;
  isOpen: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Provider Statement types
export interface ProviderStatement {
  providerId: string;
  providerName: string;
  startDate: Date;
  endDate: Date;
  services: {
    serviceId: string;
    serviceName: string;
    count: number;
    totalAmount: number;
    commission: number;
  }[];
  totalServices: number;
  totalAmount: number;
  totalCommission: number;
  status: 'PAID' | 'PENDING';
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Navigation types
export type RootStackParamList = {
  Auth: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  Main: undefined;
  Home: undefined;
  Services: undefined;
  ServiceDetail: { serviceId: string };
  NewService: undefined;
  Providers: undefined;
  ProviderDetail: { providerId: string };
  NewProvider: undefined;
  Products: undefined;
  ProductDetail: { productId: string };
  NewProduct: undefined;
  Cash: undefined;
  ProviderStatement: { providerId: string };
  Profile: undefined;
  Settings: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Services: undefined;
  Providers: undefined;
  Products: undefined;
  Cash: undefined;
};
