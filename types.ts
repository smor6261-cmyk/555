
export interface Reader {
    id: number;
    name: string;
    intro: string;
    teachers: string;
    narrators: string[];
}

export interface Narrator {
    id: number;
    name: string;
    reader: string;
    intro: string;
    path: string;
    origins: string;
    uniqueness: string;
}
