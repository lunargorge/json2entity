import { Property } from '../../../src/index';

export class PhoneEntity {
    @Property('id')
    public id: number;
    
    @Property('prefix')
    public prefix: string;

    @Property('value')
    public value: string;
}