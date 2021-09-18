let express = require('express');
let router = express.Router();

const tripSuggestionsData = {  // TODO - ask from database
  restaurants: [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],
  attractions: [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]
}

/* Post user trip preferences */
router.post('/', (req, res, next) => {
  res.send(tripSuggestionsData);
});

module.exports = router;
