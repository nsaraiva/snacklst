import { injectable } from "inversify";

import { Snacklst } from '../../domains/entities';
import { IBaseRepository } from '../../domains/interfaces/IBaseRepository.interface';

@injectable()
export class BaseRepository<T> implements IBaseRepository<T> {
    async getAll(): Promise<T[]> {
        throw new Error('Method not implemented.');
    }
    async getById(id: string): Promise<T> {
        throw new Error('Method not implemented.');
    }
    async create(entity: T): Promise<T> {
        throw new Error('Method not implemented.');
    }
    async update(entity: T): Promise<T> {
        throw new Error('Method not implemented.');
    }
    async delete(id: string): Promise<T> {
        throw new Error('Method not implemented.');
    }
}