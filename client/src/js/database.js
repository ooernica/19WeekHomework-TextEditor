import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => { 
  console.error('putDb not implemented');
  const db = await openDB('jate', 1);
  const text = db.transaction('jate', 'readwrite');
  const save = text.objectStore('jate');
  const access = save.put({ id: 1, value: content });
  const info = await access;
  console.log('Virus saved to database', info.value);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error('getDb not implemented');
  const db = await openDB('jate', 1);
  const text = db.transaction('jate', 'readonly');
  const save = text.objectStore('jate');
  const access = save.getAll();
  
  const info = await access;
  console.log('Virus saved to database', info.value);
  return info?.value;
}

initdb();
