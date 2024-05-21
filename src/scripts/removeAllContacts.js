import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  let parsedData = null;
  try {
    const contactsArray = await fs.readFile(PATH_DB, 'utf-8');
    parsedData = JSON.parse(contactsArray);
  } catch (error) {
    console.error('Error reading file:', error);
  }
  if (parsedData.length > 0) {
    const removedContacts = parsedData.toSpliced(0, parsedData.length);
    try {
      await fs.writeFile(PATH_DB, JSON.stringify(removedContacts), 'utf-8');
    } catch (error) {
      console.error('Error:', error);
    }
  }
};

await removeAllContacts();
