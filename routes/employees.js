var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/get/:id', function(req, res) {
  let id = req.params.id;
  res.send("Getting " + id);
});

router.post('/add', (req, res) => {
  let { name, mobile, mail } = req.body;
  res.send("Adding " + name + " with " + mobile + " " + mail);
});

router.delete('/delete/:id', (req, res) => {
  let { id } = req.params;
  res.send("Deleting " + id);
});

router.post('/edit', (req, res) => {
  let { id, name, mobile, mail } = req.body;
  res.send("Editing " + id + " with " + name + ", " + mobile + " and " + mail);
})

module.exports = router;
