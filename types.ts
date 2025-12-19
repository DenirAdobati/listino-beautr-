
export enum Tab {
  Home = 'home',
  Memo = 'memo'
}

export type Gender = 'donna' | 'uomo' | null;

// Fix: Added Service interface to resolve 'Service' is not exported error
export interface Service {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  category: string;
}

// Fix: Added Client interface to resolve 'Client' is not exported error
export interface Client {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  lastVisit: string;
  hairType: string;
  notes: string;
}
