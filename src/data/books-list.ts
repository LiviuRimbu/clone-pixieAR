// src/data/books.ts
export interface books {
	id: number;
	src: string;
	imageSrc: string;
}

export const books: books[] = [
	{ id: 0, src: 'https://mywebar.com/', imageSrc: '/images/english.png' },
	{ id: 1, src: 'https://mywebar.com/', imageSrc: '/images/grammar.png' },
	{ id: 2, src: 'https://mywebar.com/', imageSrc: '/images/france.png' },
];
