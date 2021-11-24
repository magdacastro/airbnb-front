import { Date, Gender } from "./data"
import { Property } from "./properties"

export interface User {
    id: number;
    name: string;
    socialname:string;
    properties: Property[];
    gender: Gender;
    datebirth: Date;
    email:string;
    password:string;
}

