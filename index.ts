import { HashTable } from './hash-tables/hashtable';
// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

/// Hashtable
const hashtable  = new HashTable(50);
hashtable.set('Nishant', '25');
console.log(hashtable.get('Nishant'))
///End 