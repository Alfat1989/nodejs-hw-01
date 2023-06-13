const fs = require("fs/promises");
const listContacts = require("./listContacts");
const filePath = require("./filePath");

const removeContact = async (id) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((el) => el.id === id);
  if (idx === -1) {
    return null;
  }

  const deleteContact = contacts.splice(idx, 1);
  await fs.writeFile(filePath, JSON.stringify(contacts));
  return deleteContact;
};

module.exports = removeContact;
