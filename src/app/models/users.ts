import { Property } from "./properties"

export interface User {
    id: number;
    name: string;
    properties: Property[];
    email:string;
    password:string;
}

export const users: User[] = [
    {
        id: 1,
        name: "Caroline",
        email:"carol@email.com",
        password:"123456",
        properties: [
          {
            id: 1,
            name: "Apartamento",
            description: "Espaço inteiro com sacada",
            location: "Bairro Primavera",
            price: 6200,
          },
          {
            id: 2,
            name: "Sítio",
            description: "Espaço inteiro com área privativa",
            location: "Campus do Jordão",
            price: 8690,
          }
        ]
    },
    {
      id: 2,
      name: "João Pedro",
      email:"jpedro@email.com",
      password:"123456",
      properties: []
  }
]
