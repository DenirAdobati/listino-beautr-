
import { Service, Client } from './types';

export const SERVICES: Service[] = [
  {
    id: 's1',
    name: 'Analisi Microcamera HD',
    description: 'Analisi dettagliata del bulbo e del cuoio capelluto con ingrandimento 200x.',
    duration: '30 min',
    price: 50,
    category: 'Analisi'
  },
  {
    id: 's2',
    name: 'Trattamento Ossigenoterapia',
    description: 'Rigenerazione cellulare tramite infusione di ossigeno puro e principi attivi.',
    duration: '45 min',
    price: 85,
    category: 'Trattamento'
  },
  {
    id: 's3',
    name: 'Peeling Enzimatico',
    description: 'Pulizia profonda del cuoio capelluto per eliminare tossine e sebo in eccesso.',
    duration: '40 min',
    price: 60,
    category: 'Trattamento'
  },
  {
    id: 's4',
    name: 'Terapia Laser Biostimolante',
    description: 'Stimolazione dei follicoli dormienti tramite luce LLLT a bassa frequenza.',
    duration: '20 min',
    price: 45,
    category: 'Trattamento'
  },
  {
    id: 's5',
    name: 'Protocollo Anticaduta PRP-Like',
    description: 'Trattamento urto per il diradamento localizzato con fattori di crescita.',
    duration: '60 min',
    price: 120,
    category: 'Trattamento'
  }
];

export const MOCK_CLIENTS: Client[] = [
  {
    id: 'c1',
    firstName: 'Marco',
    lastName: 'Rossi',
    email: 'marco.rossi@email.it',
    phone: '+39 333 1234567',
    lastVisit: '2024-05-10',
    hairType: 'Grasso / Diradato',
    notes: 'Soggetto a dermatite seborroica stagionale.'
  },
  {
    id: 'c2',
    firstName: 'Giulia',
    lastName: 'Bianchi',
    email: 'giulia.b@email.it',
    phone: '+39 347 9876543',
    lastVisit: '2024-04-22',
    hairType: 'Secco / Sfibrato',
    notes: 'Richiede trattamenti idratanti profondi.'
  }
];
