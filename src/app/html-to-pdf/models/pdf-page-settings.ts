export class PDFPageSettings {
    public orientation: string;
    public unit?: 'pt' | 'px' | 'in' | 'mm' | 'cm' | 'ex' | 'em' | 'pc' | undefined;
    public pageSize?: string | number[];
    public idOfTableHTMLElement?: string;
}