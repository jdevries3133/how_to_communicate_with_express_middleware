const express = require('express');
const { FakeUser } = require('./mockUser')
const { fakePassport } = require('./fakePassport');

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
  if (req.user.isAdmin) {
    res.send('super secret internal company details\n');
    return;
  }
  res.send('hi\n');
})


app.listen(8000);
