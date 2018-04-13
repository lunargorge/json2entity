/***************************************************
 * Use its to git description or docs
 ***************************************************/

import { Json2Entity, Entity2Json, ArrayCollection } from '../src/index';
import { personJson, addressesJson, PersonEntity, AddressEntity } from './mock';

// Entity
let personEntity: PersonEntity = (new Json2Entity()).process(personJson, PersonEntity);
let serializePerson  = (new Entity2Json()).process(personEntity);

console.log(serializePerson);

console.log('===================');

let personEntity2: PersonEntity = (new Json2Entity()).process(personJson, PersonEntity, true);
let serializePerson2  = (new Entity2Json()).process(personEntity2);

console.log(serializePerson2);
