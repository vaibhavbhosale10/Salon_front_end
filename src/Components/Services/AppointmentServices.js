import API from "../API/API";
import Endpoints from "../API/Endpoints";

class AppointmentService {
  static createAppointment(appointment) {
    return API.post(Endpoints?.api?.appointments.create, appointment);
  } //createAppointment

  static updateAppointment(id, appointment) {
    return API.put(Endpoints?.api?.appointments?.update + id, appointment);
  } //updateUser

  static deleteAppointment(id) {
    return API.delete(Endpoints?.api?.appointments?.delete + id);
  } //deleteUser

  static fetchOneAppointment(id) {
    return API.get(Endpoints?.api?.appointments?.getOne + id);
  } //fetchOneUser

  static fetchAllAppointment(query = "") {
    return API.get(Endpoints?.api?.appointments?.getAll + query);
  } //fetchAllUser
}

export default AppointmentService;
