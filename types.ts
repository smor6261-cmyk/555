export interface Reader {
    id: number;
    name: string;
    intro: string;
    teachers: string;
    narrators: string[];
    color: string;
}

export interface Narrator {
    id: number;
    name: string;
    reader: string;
    intro: string;
    path: string;
    origins: string;
    uniqueness: string;
    color: string;
    readerColor: string;
}
