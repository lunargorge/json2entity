import { ItemEntity } from './item.entity';
import { Property } from '../../../src/index';

export class AddressEntity {
    @Property('id')
    public id: number;

    @Property('type')
    public type: number;
    
    @Property('city', ItemEntity)
    public city: ItemEntity;

    // You can use public getter and setter
    // source (english) street -> entity property (spanish) calle
    @Property('street', ItemEntity)
    private _calle: ItemEntity;

    set calle(v: ItemEntity) {
        this._calle = v;
    }

    get calle(): ItemEntity {
        return this._calle;
    }

}