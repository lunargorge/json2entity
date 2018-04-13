import { Property, ArrayCollection } from '../../../src/index';

import { AddressEntity } from './address.entity';
import { PhoneEntity } from './phone.entity';
import { ItemEntity } from './item.entity';

export class PersonEntity {
    @Property('name')
    public name: string;

    @Property('surname')
    public surname: string;

    @Property('emailPrivate', ItemEntity)
    public emailPrivate: ItemEntity;

    @Property('emailBusiness', ItemEntity)
    public emailBusiness: ItemEntity;

    @Property('phones', [PhoneEntity])
    public phones: ArrayCollection<PhoneEntity>;

    // You can use public getter and setter.
    @Property('addresses', [AddressEntity])
    private _addresses: ArrayCollection<AddressEntity>;

    set addresses(v: ArrayCollection<AddressEntity>) {
        this._addresses = v;
    }

    get addresses(): ArrayCollection<AddressEntity> {
        return this._addresses;
    }
}