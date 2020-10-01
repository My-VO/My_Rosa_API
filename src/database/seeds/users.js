const moment = require("moment");

const now = moment().utc().toDate();

module.exports = [
  {
    user_id: 1,
    first_name: "My",
    last_name: "Rosa",
    email: "my@rosa.com.fr",
    password: "$2b$10$b7.UoLIcuxmaBn8NPjZSJOVe4ciOpx64SOGkquJOAAKvsbZpIDEA6",
    created_at: now,
    updated_at: now,
  },
];
