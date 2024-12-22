// src/data/books.ts
export interface books {
	id: number;
	src: string;
	imageSrc: string;
}

export const books: books[] = [
	{ id: 0, src: 'https://mywebar.com/1', imageSrc: '/images/english.png' },
	{ id: 1, src: 'https://mywebar.com/2', imageSrc: '/images/grammar.png' },
	{ id: 2, src: 'https://mywebar.com/3', imageSrc: '/images/france.png' },
];
