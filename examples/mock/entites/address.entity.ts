import { ItemEntity } from './item.entity';
import { Serializer } from '../../../src/index';

export class AddressEntity {
    @Serializer()
    public id: number;

    @Serializer()
    public type: number;
    
    @Serializer({type: ItemEntity})
    public city: ItemEntity;

    // You can use public getter and setter
    // source (english) street -> entity property (spanish) calle
    @Serializer({name: 'street', type: ItemEntity})
    private _calle: ItemEntity;

    set calle(v: ItemEntity) {
        this._calle = v;
    }

    get calle(): ItemEntity {
        return this._calle;
    }

}
