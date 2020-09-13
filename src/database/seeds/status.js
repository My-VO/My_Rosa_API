const moment = require("moment");

const now = moment().utc().toDate();

module.exports = [
  {
    status_id: 1,
    description: "confirmation",
    created_at: now,
    updated_at: now,
  },
  {
    status_id: 2,
    description: "en cours de préparation",
    created_at: now,
    updated_at: now,
  },
  {
    status_id: 3,
    description: "en cours de livraison",
    created_at: now,
    updated_at: now,
  },
  {
    status_id: 4,
    description: "livré",
    created_at: now,
    updated_at: now,
  },
  {
    status_id: 5,
    description: "annuler",
    created_at: now,
    updated_at: now,
  },
];
