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
    images: Image[]
    paper: Paper
    border: Border
    imageColumns: number,
    imageMixSeed: number | undefined,
}