import { Sex, Date } from "./data"
import { Property } from "./properties"

export interface User {
    id: number;
    name: string;
    socialname: string;
    properties: Property[];
    sex: Sex;
    datebirth: Date;
    email:string;
    password:string;
}

