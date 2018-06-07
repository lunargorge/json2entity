/***************************************************
 * Use its to git description or docs
 ***************************************************/

import { Json2Entity, ArrayCollection } from '../src/index';
import { personJson, addressesJson, PersonEntity, AddressEntity } from './mock';

// Entity
let person: PersonEntity = (new Json2Entity()).process(personJson, new PersonEntity());

console.log('--personEntity--');
console.log('name: ' + person.name);
console.log('surname: ' + person.surname);
console.log('emailPrivate.val: ' + person.emailPrivate.value);
console.log('emailBusiness.val: ' + person.emailBusiness.value);
console.log('phones.first().id: ' + person.phones.first().id);
console.log('phones.first().value: ' + person.phones.first().value);
console.log('phones.last().id: ' + person.phones.last().id);
console.log('phones.last().value: ' + person.phones.last().value);
console.log('phones.get(1).value: ' + person.phones.get(1).value);
console.log('addresses.first().id: ' + person.addresses.first().id);
console.log('addresses.first().calle.val: ' + person.addresses.first().calle.value);
console.log('addresses.first().city.val: ' + person.addresses.first().city.value);
console.log('addresses.last().id: ' + person.addresses.last().id);
console.log('addresses.last().calle.val: ' + person.addresses.last().calle.value);
console.log('addresses.last().city.val: ' + person.addresses.last().city.value);
console.log('addresses.get(1).id: ' + person.addresses.get(1).id);
console.log('addresses.get(1).calle.val: ' + person.addresses.get(1).calle.value);
console.log('addresses.get(1).city.val: ' + person.addresses.get(1).city.value);

console.log('---------------------');
console.log(personJson);

// ArrayCollection Entity
let addresses: ArrayCollection<AddressEntity> = (new Json2Entity()).process(addressesJson, new AddressEntity());
console.log('--addressEntites--');
console.log('isEmpty(): ' + addresses.isEmpty());
console.log('first().id: ' + addresses.first().id);
console.log('first().city.id: ' + addresses.first().city.id);
console.log('first().calle.id: ' + addresses.first().calle.id);
console.log('first().calle.value: ' + addresses.first().calle.value);
console.log('last().id: ' + addresses.last().id);
console.log('last().city.id: ' + addresses.last().city.id);
console.log('last().city.value: '  + addresses.last().city.value);
console.log('last().calle.id: ' + addresses.last().calle.id);
console.log('last().calle.value: ' + addresses.last().calle.value);

console.log('=====================');

// Array Entity
let addresses2: AddressEntity[] = (new Json2Entity()).process(addressesJson, new AddressEntity(), true);
console.log('--addressEntites2--');
console.log('isEmpty(): ' + addresses2.length);
console.log('first().id: ' + addresses2[0].id);
console.log('first().city.id: ' + addresses2[0].city.id);
console.log('first().calle.id: ' + addresses2[0].calle.id);
console.log('first().calle.value: ' + addresses2[0].calle.value);
console.log('last().id: ' + addresses2[1].id);
console.log('last().city.id: ' + addresses2[1].city.id);
console.log('last().city.value: '  + addresses2[1].city.value);
console.log('last().calle.id: ' + addresses2[1].calle.id);
console.log('last().calle.value: ' + addresses2[1].calle.value);
console.log('---------------------');
console.log(addressesJson);
