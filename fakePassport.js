/**
 * Inject an arbitrary user id for testing. The only admin user is the user
 * with an id of 1, so if we set the id here to anything else,
 * req.user.isAdmin will be false
 */

const MOCK_USER_ID = 1;

module.exports = {
  fakePassport: (req, _, next) => {
    req.user = {
      id: MOCK_USER_ID
    }
    next()
  }
}

