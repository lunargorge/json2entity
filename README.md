# handy-data
---
In SPA application (single page application) we use data sources are obtained from API server, usually we use it directly. 
This library provide simple way to transform api data to custom typescript entity class - the reverse process is also possible.
In other words, we can easily carry out the serialization / deserialization process.

## Installation

```javascript
 npm install json2entity --save
```

Add to tsconfig.json
```json
{
  "compilerOptions": {
    [...]
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    [...]
}
```

## Run test

``` javascript
git clone https://github.com/lunargorge/json2entity.git
cd json2entity
npm install
npm run test
```

## Example

Mock data.

```typescript
export const personObj = {
    name: 'Rodric',
    surname: 'Brave',
    emailPrivate: {id: 1, value: 'rodric@gmail.com'},
    emailBusiness: {id: 2, value: 'brave@gmail.com'},
    phones: [
        {id: 1, prefix: '+55', value: '123123123'},
        {id: 2, prefix: '+56', value: '234234234'}
    ],
    addresses: [
        {
            id: 1,
            type: 1,
            city: {
                id: 2,
                value: 'Belfaxt'
            },
            street: {
                id: 1,
                value: 'Paradise Street'
            }
        },
        {
            id: 2,
            type: 2,
            city: {
                id: 4,
                value: 'Bristol'
            },
            street: {
                id: 3,
                value: 'Broad Street'
            }
        }
    ]
};

export const personJson = JSON.stringify(personObj);
```

Create person.entity.ts file

```typescript
import { Property, ArrayCollection } from 'json2entity';

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
```

Create item.entity.ts file

```typescript
import { Property } from 'json2entity';

export class ItemEntity {
    @Property('id')
    public id: number;
    
    @Property('value')
    public value: string;
}
```

Create phone.entity.ts file

```typescript 
import { Property } from 'json2entity';

export class PhoneEntity {
    @Property('id')
    public id: number;
    
    @Property('prefix')
    public prefix: string;

    @Property('value')
    public value: string;
}
```

Create address.entity.ts file

```typescript
import { Property } from 'json2entity';
import { ItemEntity } from './item.entity';

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
```

```typescript
import { Json2Entity, ArrayCollection } from 'json2entity';
import { PersonEntity } from './address.entity';

// personJson - JSON/"JS literal object"
let person: PersonEntity = (new Json2Entity()).process(personJson, new PersonEntity());

console.log('name: ' +  person.name);
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
```

## Example - angular 5

```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
class AppComponent implements OnInit {
    public person: PersonEntity;
    
    constructor(private http: HttpClient) {}
  
    ngOnInit(): void {
        this.http.get('<URL>').subscribe(data => {
            this.person = (new Json2Entity()).process(data, new PersonEntity());
    });
  }
}
```

## Example - serialize/deserialize

Use data from the previous example

```typescript
import { Json2Entity, Entity2Json, ArrayCollection } from 'json2entity';

// use ArrayCollection (default)
let person: PersonEntity = (new Json2Entity()).process(personJson, new PersonEntity());
let serializePerson  = (new Entity2Json()).process(person);

console.log(serializePerson);

console.log('===================');

// use Array instead ArrayCollection (In this case, also use arrays in the entities !)
let person2: PersonEntity = (new Json2Entity()).process(personJson, new PersonEntity(), true);
let serializePerson2  = (new Entity2Json()).process(person2);

console.log(serializePerson2)
```
