import { Serializer } from '../../../src/index';

export class PhoneEntity {
    @Serializer()
    public id: number;
    
    @Serializer()
    public prefix: string;

    @Serializer()
    public value: string;
}