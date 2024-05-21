import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  let createdContactArray = [];
  let parsedData = null;
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    parsedData = JSON.parse(data);
  } catch (error) {
    console.error('Error reading file:', error);
  }
  for (let i = 0; i < number; i += 1) {
    createdContactArray.push(createFakeContact());
    if (parsedData.length > 0) {
      const addedContacts = [...parsedData, ...createdContactArray];
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
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }
};

await generateContacts(8);
