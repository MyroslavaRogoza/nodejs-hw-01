import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
    let contactsSum = 0;
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const parsedData = JSON.parse(data);
    for (const contact of parsedData) {
        contactsSum += 1;
    }
    return contactsSum;
};

console.log(await countContacts());
