import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const parsedData = JSON.parse(data);
  return parsedData;
};

console.log(await getAllContacts());
