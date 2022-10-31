import { v4 as uuidv4 } from 'uuid';

export type Uuid = string & { readonly _: unique symbol };
export function GetNewUuid(): Uuid {
    return uuidv4() as Uuid;
}