export type Comment = {
    id: string;
    text: string;
    userId: string;
}
export type Snacklst = {
    id: string;
    title: string;
    votes: number;
    comments: Comment[];
};