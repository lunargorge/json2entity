import { Property } from '../../../src/index';

export class ItemEntity {
    @Property('id')
    public id: number;
    
    @Property('value')
    public value: string;
}
