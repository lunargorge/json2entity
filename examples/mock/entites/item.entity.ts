import { Serializer } from '../../../src/index';

export class ItemEntity {
    @Serializer()
    public id: number;
    
    @Serializer()
    public value: string;
}
