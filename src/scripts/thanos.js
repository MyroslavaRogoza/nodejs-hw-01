import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
  let parsedContacts = null;
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf-8');
    parsedContacts = JSON.parse(contacts);
  } catch (error) {
    console.error('Error reading file:', error);
  }
  if (parsedContacts.length > 0) {
    const newContactsArray = parsedContacts.filter(
      (contact) => Math.random() >= 0.5 && contact,
    );
    try {
      await fs.writeFile(
        PATH_DB,
        JSON.stringify(newContactsArray, null, 2),
        'utf-8',
      );
    } catch (error) {
      console.error('Error:', error);
    }
  }
};

await thanos();
