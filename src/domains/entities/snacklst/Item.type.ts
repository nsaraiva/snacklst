import { Comment } from './Comment.type';
export type Item = {
    id: string;
    title: string;
    votes: number;
    comments: Comment[];
};