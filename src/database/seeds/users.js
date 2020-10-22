const moment = require("moment");

const now = moment().utc().toDate();

module.exports = [
  {
    first_name: "My",
    last_name: "Rosa",
    email: "my@rosa.com.fr",
    password: "$2b$10$MzA9SKQIJqntCulMmda9DOCTi8qsAOLSMv02nmtVTTUEp6v8yHoGa",
    created_at: now,
    updated_at: now,
  },
];
