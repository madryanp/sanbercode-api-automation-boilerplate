const newman = require("newman")

newman.run({
    collection: "json-collection/Api.postman_collection.json",
    environment: "json-env/Api.postman_environment.json",
    reporters: ["cli", "htmlextra"]
})
