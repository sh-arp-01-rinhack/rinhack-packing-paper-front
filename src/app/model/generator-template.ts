export interface Paper {
    width: number,
    height: number,
}

export interface Image {
    imageData: string,
    name: string,
    order: number,
}

export interface Border {
    width: number,
    color: string,
}

export interface TemplateData {
    images?: Image[]
    paper: Paper
    border: Border
    imageColumns: columns,
    imageMixSeed: number | undefined,
}

export enum columns {
    'Одна' = 1,
    'Две',
    'Три',
    'Четыре',
    'Пять',
    'Шесть',
    'Семь',
    'Восемь',
    'Девять',
    'Десять',
}