export default {
  serverBaseURL: "http://127.0.0.1:9090",
  api: {
    users: {
      create: "/users",
      update: "/users/",
      delete: "/users/",
      getOne: "/users/",
      getAll: "/users",
    },
    appointments: {
      create: "/appointments",
      update: "/appointments/",
      delete: "/appointments/",
      getOne: "/appointments/",
      getAll: "/appointments",
    },
    resumes: {
      create: "/resumes",
      update: "/resumes/",
      delete: "/resumes/",
      getOne: "/resumes/",
      getAll: "/resumes",
    },
    contacts: {
      create: "/contacts",
      update: "/contacts/",
      delete: "/contacts/",
      getOne: "/contacts/",
      getAll: "/contacts",
    },
    auth: {
      userLogin: "/auth/signup",
      adminLogin: "/adminAuth/admin",
      validateToken: "/auth/validate-token",
      refreshToken: "/auth/refresh-token",
    },
  },
};
