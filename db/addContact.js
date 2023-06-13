const fs = require("fs/promises");
const listContacts = require("./listContacts");
const { nanoid } = require("nanoid");
const filePath = require("./filePath");

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = { id: nanoid(), ...{ name, email, phone } };
  contacts.push(newContact);
  await fs.writeFile(filePath, JSON.stringify(contacts));
  return newContact;
};

module.exports = addContact;
