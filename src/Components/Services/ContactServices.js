import API from "../API/API";
import Endpoints from "../API/Endpoints";

class ContactService {
  static createContact(contact) {
    return API.post(Endpoints?.api?.contacts.create, contact);
  } //createContact

  static updateContact(id, contact) {
    return API.put(Endpoints?.api?.contacts.update + id, contact);
  } //updateContact

  static deleteContact(id) {
    return API.delete(Endpoints?.api?.contacts.delete + id);
  } //deleteContact

  static fetchOneContact(id) {
    return API.get(Endpoints?.api?.contacts.getOne + id);
  } //fetchOneContact

  static fetchAllContact(query = "") {
    return API.get(Endpoints?.api?.contacts.getAll + query);
  } //fetchAllContact
}

export default ContactService;
