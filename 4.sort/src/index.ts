import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const nc = new NumbersCollection([10, 3, -5, 0]);
nc.sort();
console.log(nc.collection);

const cc = new CharactersCollection('Xaayb');
cc.sort();
console.log(cc.collection);

const ll = new LinkedList();
ll.add(500);
ll.add(-10);
ll.add(-3);
ll.add(4);
ll.sort();
ll.print();
