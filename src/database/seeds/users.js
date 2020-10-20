const moment = require("moment");

const now = moment().utc().toDate();

module.exports = [
  {
    user_id: 1,
    first_name: "My",
    last_name: "Rosa",
    email: "my@rosa.com.fr",
    password: "$2y$10$plmEJw23mwBNxAhDvG3qJ.GtWbuXM11mPuPxjU1mnk1FYLvtbv5Da",
    created_at: now,
    updated_at: now,
  },
];
