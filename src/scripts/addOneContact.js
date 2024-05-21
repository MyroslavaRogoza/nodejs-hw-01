import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const addOneContact = async () => {
  let createdContactArray = [];
  let parsedContacts = null;
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf-8');
    parsedContacts = JSON.parse(contacts);
  } catch (error) {
    console.error('Error reading file:', error);
  }
  createdContactArray.push(createFakeContact());
  if (parsedContacts.length > 0) {
    const addedContacts = [...parsedContacts, ...createdContactArray];
    try {
      await fs.writeFile(
        PATH_DB,
        JSON.stringify(addedContacts, null, 2),
        'utf-8',
      );
    } catch (error) {
      console.error('Error:', error);
    }
  } else {
    try {
      await fs.writeFile(
        PATH_DB,
        JSON.stringify(createdContactArray, null, 2),
        'utf-8',
      );
      console.log('The contact was successfully written to a file.');
    } catch (error) {
      console.error('Error:', error);
    }
  }
};

await addOneContact();
