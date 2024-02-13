export interface Expense {
    id: number;
    date: Date;
    name: string;
    value: number;
}

export const expenses = [
    {
        id: 1,
        date: new Date(2024, 2, 4),
        name: "Aluguel",
        value: 850
    },
    {
        id: 2,
        date: new Date(2024, 2, 4),
        name: "Condomínio",
        value: 300
    },
    {
        id: 3,
        date: new Date(2024, 2, 2),
        name: "Tim",
        value: 42.99
    },
    {
        id: 4,
        date: new Date(2024, 2, 11),
        name: "Internet",
        value: 99.99
    },
    {
        id: 5,
        date: new Date(2024, 2, 13),
        name: "Energia",
        value: 155.96
    }
];