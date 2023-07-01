import API from "../API/API";
import Endpoints from "../API/Endpoints";

class ResumeServices {
  static createResume(resume) {
    return API.post(Endpoints?.api?.resumes?.create, resume);
  } //createUser

  static updateResume(id, resume) {
    return API.put(Endpoints?.api?.resumes?.update + id, resume);
  } //updateUser

  static deleteResume(id) {
    return API.delete(Endpoints?.api?.resumes?.delete + id);
  } //deleteUser

  static fetchOneResume(id) {
    return API.get(Endpoints?.api?.resumes?.getOne + id);
  } //fetchOneUser

  static fetchAllResume(query = "") {
    return API.get(Endpoints?.api?.resumes?.getAll + query);
  } //fetchAllUser
}

export default ResumeServices;
