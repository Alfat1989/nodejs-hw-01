const yargs = require("yargs");
const contactsOperations = require("./db");
// const { hideBin } = require("yargs/helpers");
// const arr = hideBin(process.argv);
// const { argv } = yargs(arr);
const { program } = require("commander");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await contactsOperations.listContacts();
      console.log(contacts);
      break;

    case "get":
      const contact = await contactsOperations.getContactById(id);
      console.log(contact);
      break;

    case "add":
      const add = await contactsOperations.addContact(name, email, phone);
      console.log(add);
      break;

    case "remove":
      const remove = await contactsOperations.removeContact(id);
      console.log(remove);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

program
  .option("-a, --action <type>", "contact operation")
  .option("-i, --id <type>", "contact id")
  .option("-n, --name <type>", "contact name")
  .option("-e, --email <type>", "contact email")
  .option("-p, --phone <type>", "contact phone");

program.parse(process.argv);
const argv = program.opts();

invokeAction(argv);
