import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  let contactsSum = 0;
  let parsedContacts = null;
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf-8');
    parsedContacts = JSON.parse(contacts);
  } catch (error) {
    console.error('Error reading file:', error);
  }
  for (let i = 0; i < parsedContacts.length; i += 1) {
    contactsSum += 1;
  }
  return contactsSum;
};

console.log(await countContacts());
