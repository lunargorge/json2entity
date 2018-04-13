/***************************************************
 * Use its to git description or docs
 ***************************************************/

import { Json2Entity, ArrayCollection } from '../src/index';
import { personJson, addressesJson, PersonEntity, AddressEntity } from './mock';

// Entity
let personEntity: PersonEntity = (new Json2Entity()).process(personJson, new PersonEntity());

console.log('name: ' + personEntity.name);
console.log('surname: ' + personEntity.surname);
console.log('emailPrivate.val: ' + personEntity.emailPrivate.value);
console.log('emailBusiness.val: ' + personEntity.emailBusiness.value);
console.log('phones.first().id: ' + personEntity.phones.first().id);
console.log('phones.first().value: ' + personEntity.phones.first().value);
console.log('phones.last().id: ' + personEntity.phones.last().id);
console.log('phones.last().value: ' + personEntity.phones.last().value);
console.log('phones.get(1).value: ' + personEntity.phones.get(1).value);
console.log('addresses.first().id: ' + personEntity.addresses.first().id);
console.log('addresses.first().calle.val: ' + personEntity.addresses.first().calle.value);
console.log('addresses.first().city.val: ' + personEntity.addresses.first().city.value);
console.log('addresses.last().id: ' + personEntity.addresses.last().id);
console.log('addresses.last().calle.val: ' + personEntity.addresses.last().calle.value);
console.log('addresses.last().city.val: ' + personEntity.addresses.last().city.value);
console.log('addresses.get(1).id: ' + personEntity.addresses.get(1).id);
console.log('addresses.get(1).calle.val: ' + personEntity.addresses.get(1).calle.value);
console.log('addresses.get(1).city.val: ' + personEntity.addresses.get(1).city.value);

console.log('---------------------');
console.log(personJson);

// ArrayCollection Entity
let addressEntites: ArrayCollection<AddressEntity> = (new Json2Entity()).process(addressesJson, new AddressEntity());
console.log('isEmpty(): ' + addressEntites.isEmpty());
console.log('first().id: ' + addressEntites.first().id);
console.log('first().city.id: ' + addressEntites.first().city.id);
console.log('first().calle.id: ' + addressEntites.first().calle.id);
console.log('first().calle.value: ' + addressEntites.first().calle.value);
console.log('last().id: ' + addressEntites.last().id);
console.log('last().city.id: ' + addressEntites.last().city.id);
console.log('last().city.value: '  + addressEntites.last().city.value);
console.log('last().calle.id: ' + addressEntites.last().calle.id);
console.log('last().calle.value: ' + addressEntites.last().calle.value);

console.log('=====================');

// Array Entity
let addressEntites2: AddressEntity[] = (new Json2Entity()).process(addressesJson, new AddressEntity(), true);
console.log('isEmpty(): ' + addressEntites2.length);
console.log('first().id: ' + addressEntites2[0].id);
console.log('first().city.id: ' + addressEntites2[0].city.id);
console.log('first().calle.id: ' + addressEntites2[0].calle.id);
console.log('first().calle.value: ' + addressEntites2[0].calle.value);
console.log('last().id: ' + addressEntites2[1].id);
console.log('last().city.id: ' + addressEntites2[1].city.id);
console.log('last().city.value: '  + addressEntites2[1].city.value);
console.log('last().calle.id: ' + addressEntites2[1].calle.id);
console.log('last().calle.value: ' + addressEntites2[1].calle.value);
console.log('---------------------');
console.log(addressesJson);
