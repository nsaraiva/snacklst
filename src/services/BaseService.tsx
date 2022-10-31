import Snacklst from '../States/Snacklst';

export function add<T>(obj: T[]): void{
    const [state, setState] = obj;
    console.log(obj);
}