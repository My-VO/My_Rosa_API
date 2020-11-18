const moment = require("moment");

const now = moment().utc().toDate();

module.exports = [
  {
    description: "Commande enregistrée",
    created_at: now,
    updated_at: now,
  },
  {
    description: "Colis en attente de préparation",
    created_at: now,
    updated_at: now,
  },
  {
    description: "Préparation du colis",
    created_at: now,
    updated_at: now,
  },
  {
    description: "Colis expédié",
    created_at: now,
    updated_at: now,
  },
  {
    description: "Colis livré",
    created_at: now,
    updated_at: now,
  },
];
