const express = require('express');
const { FakeUser } = require('./mockUser')
const { fakePassport } = require('./fakePassport');
const { getSecretHomepageContentOperation } = require('./operations');

const app = new express()

// inject an abitrary user id, which is hard-coded in ./fakeExpress
app.use(fakePassport)

// middleware that provides information to all handlers
app.use((req, _, next) => {

  const { isAdmin } = FakeUser.find({_id: req.user.id});
  req.user.isAdmin = isAdmin;

  next();
})


app.get('/', (req, res) => {
  res.send(getSecretHomepageContentOperation(req.user.isAdmin));
})


app.listen(8000);
