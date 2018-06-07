import { Serializer, ArrayCollection } from '../../../src/index';

import { AddressEntity } from './address.entity';
import { PhoneEntity } from './phone.entity';
import { ItemEntity } from './item.entity';

export class PersonEntity {
    @Serializer()
    public name: string;

    @Serializer()
    public surname: string;

    @Serializer({type: ItemEntity})
    public emailPrivate: ItemEntity;

    @Serializer({type: ItemEntity})
    public emailBusiness: ItemEntity;

    @Serializer({type: [PhoneEntity]})
    public phones: ArrayCollection<PhoneEntity>;

    // You can use public getter and setter.
    @Serializer({name: 'addresses', type: [AddressEntity]})
    private _addresses: ArrayCollection<AddressEntity>;

    set addresses(v: ArrayCollection<AddressEntity>) {
        this._addresses = v;
    }

    get addresses(): ArrayCollection<AddressEntity> {
        return this._addresses;
    }
}