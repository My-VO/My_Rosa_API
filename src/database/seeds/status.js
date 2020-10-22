const moment = require("moment");

const now = moment().utc().toDate();

module.exports = [
  {
    description: "confirmation",
    created_at: now,
    updated_at: now,
  },
  {
    description: "en cours de préparation",
    created_at: now,
    updated_at: now,
  },
  {
    description: "en cours de livraison",
    created_at: now,
    updated_at: now,
  },
  {
    description: "livré",
    created_at: now,
    updated_at: now,
  },
  {
    description: "annuler",
    created_at: now,
    updated_at: now,
  },
];
