import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  let parsedContacts = null;
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf-8');
    parsedContacts = JSON.parse(contacts);
  } catch (error) {
    console.error('Error reading file:', error);
  }
  return parsedContacts;
};

console.log(await getAllContacts());
