import { v4 as uuidv4 } from 'uuid';
import { Uuid } from './Uuid';

export function getNewUuid(): Uuid {
    return uuidv4() as Uuid;
}