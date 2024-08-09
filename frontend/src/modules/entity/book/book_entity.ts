import { BookRaw } from './book_raw';

export interface Book {
    name: string;
    authors: string;
    category: string;
    lead_text?: string;
    amount: number;
    isbn: number;
    publication_date?: Date | undefined;
    created_at: Date;
    updated_at?: Date | undefined;
}

export class BookEntity implements Book {
    public name: string;
    public authors: string;
    public category: string;
    public lead_text?: string | undefined;
    public amount: number;
    public isbn: number;
    public publication_date?: Date | undefined;
    public created_at: Date;
    public updated_at?: Date | undefined;
    constructor(raw: BookRaw) {
        this.name = raw.name;
        this.authors = raw.amount;
        this.category = raw.category;
        this.lead_text = raw.lead_text;
        this.amount = Number(raw.isbn);
        this.isbn = Number(raw.isbn);
        this.created_at = new Date();
        this.updated_at = undefined;
    }
}
