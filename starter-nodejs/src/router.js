const express = require('express');

const router = express.Router();
router.get('/ping', async (req, res, next) => {
  try {
    const counters = await req.models.counter.findAll();
    if (counters.length === 0) {
      const counter = await req.models.counter.create({
        visit: 0,
      });
      counters[0] = counter;
    }
    counters[0].visit += 1;
    const saved = await counters[0].save();

    res.json({
      visit: saved.visit,
    }).end();
  } catch (e) {
    next(e);
  }
});
module.exports = router;
