import { HashTable } from "./hash-tables/hashtable";
import { LinkedList } from "./linked-list/linked-list";
// Import stylesheets
import "./style.css";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

/// Hashtable
// const hashtable  = new HashTable(50);
// hashtable.set('Nishant', '25');
// console.log(hashtable.get('Nishant'))
///End

/// LinkedList
const linkedList = new LinkedList(50);
linkedList.append(20);
linkedList.append(57);
linkedList.prepend(1);
console.log(linkedList);
///End
