import { Json2Entity, ArrayCollection } from '../index';
import { personJson, addressesJson, PersonEntity, AddressEntity } from './../../examples';

describe("A suite is just a Json2Entity (root is object), use ArrayCollection", () => {
    let personEntity: PersonEntity;

    beforeEach(() => {
        personEntity = (new Json2Entity()).process(personJson, new PersonEntity());
    });

    it('should deserialze personJson', () => {
        expect(personEntity.name).toBe('Rodric');
        expect(personEntity.surname).toBe('Brave');
        
        expect(personEntity.emailPrivate.id).toBe(1);
        expect(personEntity.emailPrivate.value).toBe('rodric@gmail.com');
        
        expect(personEntity.emailBusiness.id).toBe(2);
        expect(personEntity.emailBusiness.value).toBe('brave@gmail.com');
        
        expect(personEntity.phones.count()).toBe(2);
        
        expect(personEntity.phones.first().id).toBe(1);
        expect(personEntity.phones.first().prefix).toBe('+55');
        expect(personEntity.phones.first().value).toBe('123123123');
        
        expect(personEntity.phones.last().id).toBe(2);
        expect(personEntity.phones.last().prefix).toBe('+56');
        expect(personEntity.phones.last().value).toBe('234234234');
        
        expect(personEntity.addresses.count()).toBe(2);

        expect(personEntity.addresses.first().id).toBe(1);
        expect(personEntity.addresses.first().type).toBe(1);
        expect(personEntity.addresses.first().city.id).toBe(2);
        expect(personEntity.addresses.first().city.value).toBe('Belfaxt');
        expect(personEntity.addresses.first().calle.id).toBe(1);
        expect(personEntity.addresses.first().calle.value).toBe('Paradise Street');
        
        expect(personEntity.addresses.last().id).toBe(2);
        expect(personEntity.addresses.last().type).toBe(2);
        expect(personEntity.addresses.last().city.id).toBe(4);
        expect(personEntity.addresses.last().city.value).toBe('Bristol');
        expect(personEntity.addresses.last().calle.id).toBe(3);
        expect(personEntity.addresses.last().calle.value).toBe('Broad Street');
    });
});

describe("A suite is just a Json2Entity (root is array), use ArrayCollection", () => {
    let addressEntites: ArrayCollection<AddressEntity>

    beforeEach(() => {
        addressEntites = (new Json2Entity()).process(addressesJson, new AddressEntity());
    });

    it('should deserialze personJson', () => {
        expect(addressEntites.isEmpty()).toBeFalsy()
        expect(addressEntites.count()).toBe(2);

        expect(addressEntites.first().id).toBe(1);
        expect(addressEntites.first().type).toBe(1);
        expect(addressEntites.first().city.id).toBe(2);
        expect(addressEntites.first().city.value).toBe('Chester');
        expect(addressEntites.first().calle.id).toBe(1);
        expect(addressEntites.first().calle.value).toBe('Hurst Street');
        
        expect(addressEntites.last().id).toBe(2);
        expect(addressEntites.last().type).toBe(2);
        expect(addressEntites.last().city.id).toBe(4);
        expect(addressEntites.last().city.value).toBe('Derby');
        expect(addressEntites.last().calle.id).toBe(3);
        expect(addressEntites.last().calle.value).toBe('Edmund Street');
      
    });
});

describe("A suite is just a Json2Entity (root is object), use Array", () => {
    let personEntity: PersonEntity;

    beforeEach(() => {
        personEntity = (new Json2Entity()).process(personJson, new PersonEntity(), true);
    });

    it('should deserialze personJson', () => {
        expect(personEntity.name).toBe('Rodric');
        expect(personEntity.surname).toBe('Brave');
        
        expect(personEntity.emailPrivate.id).toBe(1);
        expect(personEntity.emailPrivate.value).toBe('rodric@gmail.com');
        
        expect(personEntity.emailBusiness.id).toBe(2);
        expect(personEntity.emailBusiness.value).toBe('brave@gmail.com');
        
        // PersonEntity używa ArrayCollection a nie Array, dlategotaki zapis ...
        expect(personEntity.phones['length']).toBe(2);

        expect(personEntity.phones[0].id).toBe(1);
        expect(personEntity.phones[0].prefix).toBe('+55');
        expect(personEntity.phones[0].value).toBe('123123123');
        
        expect(personEntity.phones[1].id).toBe(2);
        expect(personEntity.phones[1].prefix).toBe('+56');
        expect(personEntity.phones[1].value).toBe('234234234');
        
        // PersonEntity używa ArrayCollection a nie Array, dlatego taki zapis ...
        expect(personEntity.addresses['length']).toBe(2);

        expect(personEntity.addresses[0].id).toBe(1);
        expect(personEntity.addresses[0].type).toBe(1);
        expect(personEntity.addresses[0].city.id).toBe(2);
        expect(personEntity.addresses[0].city.value).toBe('Belfaxt');
        expect(personEntity.addresses[0].calle.id).toBe(1);
        expect(personEntity.addresses[0].calle.value).toBe('Paradise Street');
        
        expect(personEntity.addresses[1].id).toBe(2);
        expect(personEntity.addresses[1].type).toBe(2);
        expect(personEntity.addresses[1].city.id).toBe(4);
        expect(personEntity.addresses[1].city.value).toBe('Bristol');
        expect(personEntity.addresses[1].calle.id).toBe(3);
        expect(personEntity.addresses[1].calle.value).toBe('Broad Street');
    });
});
