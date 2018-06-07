/***************************************************
 * Use its to git description or docs
 ***************************************************/

import { Json2Entity, Entity2Json, ArrayCollection } from '../src/index';
import { personJson, addressesJson, PersonEntity, AddressEntity } from './mock';

// Entity
let person: PersonEntity = (new Json2Entity()).process(personJson, PersonEntity);
let serializePerson  = (new Entity2Json()).process(person);

console.log(serializePerson);

console.log('===================');

let person2: PersonEntity = (new Json2Entity()).process(personJson, PersonEntity, true);
let serializePerson2  = (new Entity2Json()).process(person2);

console.log(serializePerson2);
