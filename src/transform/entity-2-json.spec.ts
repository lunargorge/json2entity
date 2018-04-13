import { Json2Entity, Entity2Json, ArrayCollection } from '../index';
import { personJson, addressesJson, PersonEntity, AddressEntity } from './../../examples/mock';

describe("A suite is just a Entity2Json (root is object), use ArrayCollection", () => {
    var serializePerson: any;

    beforeEach(() => {
        let personEntity: PersonEntity = (new Json2Entity()).process(personJson, new PersonEntity());
        serializePerson  = JSON.parse((new Entity2Json()).process(personEntity));
    });

    it('should serialize Typescript entity', () => {
        expect(serializePerson.hasOwnProperty('name')).toBeTruthy();
        expect(serializePerson['name']).toBe('Rodric');

        expect(serializePerson.hasOwnProperty('surname')).toBeTruthy();
        expect(serializePerson['surname']).toBe('Brave');

        expect(serializePerson.hasOwnProperty('emailPrivate')).toBeTruthy();
        expect(serializePerson['emailPrivate']['id']).toBe(1);
        expect(serializePerson['emailPrivate']['value']).toBe('rodric@gmail.com');

        expect(serializePerson.hasOwnProperty('emailBusiness')).toBeTruthy();
        expect(serializePerson['emailBusiness']['id']).toBe(2);
        expect(serializePerson['emailBusiness']['value']).toBe('brave@gmail.com');

        expect(serializePerson.hasOwnProperty('phones')).toBeTruthy();
        expect(serializePerson['phones'][0].hasOwnProperty('id')).toBeTruthy();
        expect(serializePerson['phones'][0]['id']).toBe(1);
        expect(serializePerson['phones'][0].hasOwnProperty('prefix')).toBeTruthy();
        expect(serializePerson['phones'][0]['prefix']).toBe('+55');
        expect(serializePerson['phones'][0].hasOwnProperty('value')).toBeTruthy();
        expect(serializePerson['phones'][0]['value']).toBe('123123123');

        expect(serializePerson['phones'][1].hasOwnProperty('id')).toBeTruthy();
        expect(serializePerson['phones'][1]['id']).toBe(2);
        expect(serializePerson['phones'][1].hasOwnProperty('prefix')).toBeTruthy();
        expect(serializePerson['phones'][1]['prefix']).toBe('+56');
        expect(serializePerson['phones'][1].hasOwnProperty('value')).toBeTruthy();
        expect(serializePerson['phones'][1]['value']).toBe('234234234');

        expect(serializePerson.hasOwnProperty('addresses')).toBeTruthy();
        expect(serializePerson['addresses'][0].hasOwnProperty('id')).toBeTruthy();
        expect(serializePerson['addresses'][0]['id']).toBe(1);
        expect(serializePerson['addresses'][0].hasOwnProperty('type')).toBeTruthy();
        expect(serializePerson['addresses'][0]['type']).toBe(1);
        
        expect(serializePerson['addresses'][0].hasOwnProperty('city')).toBeTruthy();
        expect(serializePerson['addresses'][0]['city'].hasOwnProperty('id')).toBeTruthy();
        expect(serializePerson['addresses'][0]['city']['id']).toBe(2);
        expect(serializePerson['addresses'][0]['city'].hasOwnProperty('value')).toBeTruthy();
        expect(serializePerson['addresses'][0]['city']['value']).toBe('Belfaxt');

        expect(serializePerson.hasOwnProperty('addresses')).toBeTruthy();
        expect(serializePerson['addresses'][1].hasOwnProperty('id')).toBeTruthy();
        expect(serializePerson['addresses'][1]['id']).toBe(2);
        expect(serializePerson['addresses'][1].hasOwnProperty('type')).toBeTruthy();
        expect(serializePerson['addresses'][1]['type']).toBe(2);
        
        expect(serializePerson['addresses'][1].hasOwnProperty('city')).toBeTruthy();
        expect(serializePerson['addresses'][1]['city'].hasOwnProperty('id')).toBeTruthy();
        expect(serializePerson['addresses'][1]['city']['id']).toBe(4);
        expect(serializePerson['addresses'][1]['city'].hasOwnProperty('value')).toBeTruthy();
        expect(serializePerson['addresses'][1]['city']['value']).toBe('Bristol');

        expect(serializePerson['addresses'][0].hasOwnProperty('street')).toBeTruthy();
        expect(serializePerson['addresses'][0]['street'].hasOwnProperty('id')).toBeTruthy();
        expect(serializePerson['addresses'][0]['street']['id']).toBe(1);
        expect(serializePerson['addresses'][0]['street'].hasOwnProperty('value')).toBeTruthy();
        expect(serializePerson['addresses'][0]['street']['value']).toBe('Paradise Street');

        expect(serializePerson['addresses'][1].hasOwnProperty('street')).toBeTruthy();
        expect(serializePerson['addresses'][1]['street'].hasOwnProperty('id')).toBeTruthy();
        expect(serializePerson['addresses'][1]['street']['id']).toBe(3);
        expect(serializePerson['addresses'][1]['street'].hasOwnProperty('value')).toBeTruthy();
        expect(serializePerson['addresses'][1]['street']['value']).toBe('Broad Street');
    });
});
