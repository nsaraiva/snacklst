export interface IBaseRepository<T> {
    getAll(): Promise<T[]>;
    getById(id: string): Promise<T>;
    create(entity: T): Promise<T>;
    update(entity: T): Promise<T>;
    delete(id: string): Promise<T>;
    
}