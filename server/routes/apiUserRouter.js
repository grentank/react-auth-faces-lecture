const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    res.json({});
  });

router.route('/signin')
  .post(async (req, res) => {
    const { name, email, password } = req.body;
    if (name && email && password) {
      try {
        const [user] = await User.findOrCreate({
          where: {
            name, email, password: await bcrypt.hash(password, 10),
          },
        });
        req.session.user = { id: user.id, name };
        return res.json({ id: user.id, name });
      } catch (err) {
        console.log(err);
        return res.sendStatus(500);
      }
    }
    res.sendStatus(200);
  });

router.route('/signup')
  .post(async (req, res) => {
    console.log(req.body);
    const { name, email, password } = req.body;
    if (name && email && password) {
      const pass = await bcrypt.hash(password, 10);
      const newUser = await User.create({ name, email, password: pass });
      req.session.user = { name: newUser.name, id: newUser.id };
      return res.json({ name: newUser.name, id: newUser.id });
    }
    return res.sendStatus(401);
  });

router.route('/check')
  .post((req, res) => {
    if (req.session.user) {
      return res.json(req.session.user);
    }
    res.sendStatus(401);
  });

router.route('/logout')
  .get((req, res) => {
    req.session.destroy();
    res.clearCookie('sid').sendStatus(200);
  });

module.exports = router;
