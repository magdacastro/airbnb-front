export interface HostRecommendation {
  id: number;
  name: string;
  description: string;
  location: string;
  img: string;
}

export const hostRecommendations: HostRecommendation[] = [
  {
    id: 1,
    name: 'Marko',
    description: "Adoro hospedar em minha casa ecológica e assim promover a conexão das pessoas com a natureza e entre si.",
    location: 'Paraty',
    img: "assets/img/mark.jpg"
  },

  {
    id: 2,
    name: 'Mohhamed',
    description: "Hospedar em minha tenda beduína me permitiu conhecer pessoas do mundo todo.",
    location: 'Wadi Rum',
    img: "assets/img/mikel.jpg"
  },

  {
    id: 3,
    name: 'Clair',
    description: "O Airbnb me possibilitou trabalhar de forma independente fazendo algo que amo — cuidar dos hóspedes em nossa casa.",
    location: 'Chiang Mai',
    img: "assets/img/yuna.jpg"
  },

  {
    id: 4,
    name: 'Nerina',
    description: " Conseguimos manter nossa cultura viva ao oferecer nossa experiência de produção de massas.",
    location: 'Palombara Sabina',
    img: "assets/img/luna.jpg"
  }
]
