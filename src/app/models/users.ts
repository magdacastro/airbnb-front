import { Date, Gender } from "./data"
import { Property } from "./properties"

export interface User {
    id: number;
    name: string;
    socialName:string;
    properties: Property[];
    gender: Gender;
    dtNasc: Date;
    email:string;
    password:string;
}

export const users: User[] = [
    {
        id: 1,
        name: "Caroline",
        email:"carol@email.com",
        socialName: "Carol",
        gender: { name: "Female", value: "F"},
        dtNasc: { day: 3, month: 5, year: 1995 },
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
      socialName: "João",
      gender: { name: "Male", value: "M"},
      dtNasc: { day: 3, month: 5, year: 1995 },
      email:"jpedro@email.com",
      password:"123456",
      properties: []
  }
]
