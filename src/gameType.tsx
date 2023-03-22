export type gameType = {
    code: string;
    desc: string;
};

export const gameModes: Array<gameType> = [
    {
        code: "rps",
        desc: "Rock Paper Scissors"
    },
    {
        code: "rpsls",
        desc: "Rock Paper Scissors Lizard Spock"
    }
];
