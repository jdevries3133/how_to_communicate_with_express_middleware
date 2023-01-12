module.exports = {
  // the only admin user is the user with an ID of 1
  FakeUser: {
    find: ({_id}) => {
      if (_id === 1) {
        return { isAdmin: true };
      }

      return { isAdmin: false };
    }
  }
}
