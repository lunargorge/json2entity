
import { ArrayCollection } from '../src/index';
import { ItemEntity } from './mock';

let mock1 = new ItemEntity();
mock1.id = 1;
mock1.value = 'Value 1';

let mock2 = new ItemEntity();
mock2.id = 2;
mock2.value = 'Value2';

let mock3 = new ItemEntity();
mock3.id = 3;
mock3.value = 'Value 3';

let c = new ArrayCollection<ItemEntity>();
c.add(mock1);
c.add(mock2);
c.add(mock3);

console.log(c.count());
console.log(c.isEmpty());
console.log(c.first().value);
console.log(c.get(1).value);
console.log(c.last().value);
