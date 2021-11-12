export interface Property {
  id: number;
  name: string;
  description: string;
  location: string;
  price: number;
}

export const properties = [
  {
    id: 1,
    name: 'Casa na praia',
    description: 'Esta casa possui 5 quartos e 1 banheiro privativo.',
    location: 'Torres',
    price: 425.00
  },
  {
    id: 2,
    name: 'Cabana em sítio',
    description: 'Cabana com piscina e área para playground.',
    location: 'São Francisco de Paula',
    price: 800.00
  },
  {
    id: 3,
    name: 'Apartamento',
    description: 'Apartamento no centro da cidade com sacada e estacionamento.',
    location: 'Porto Alegre',
    price: 2500.00
  },
  {
    id: 4,
    name: 'Espaço inteiro: apartamento',
    description: 'Você terá a acomodação do tipo apartamento só para você..',
    location: 'Gramado',
    price: 311.00
  },
  {
    id: 5,
    name: 'Espaço inteiro: casa residencial',
    description: 'Você terá a acomodação do tipo casa só para você.',
    location: 'Gramado',
    price: 165.00
  }
];
