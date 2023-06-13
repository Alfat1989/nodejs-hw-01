const listContacts = require("./listContacts");

const getContactById = async (contactId) => {
  const data = await listContacts();
  const contact = data.find((el) => el.id === contactId);
  return contact;
};

module.exports = getContactById;
