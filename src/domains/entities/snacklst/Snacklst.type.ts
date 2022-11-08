import { Item } from "./Item.type";

export type Snacklst = {
    id: string;
    userId: string;
    title: string;
    items: Item[];
}