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

