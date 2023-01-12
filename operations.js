/**
 * This can be useful if you want to separate the request controller (which
 * might be concerned with data encoding / decoding, parsing parameters,
 * checking query parameters) from the actual code that queries the database.
 * It's important to ensure that users never recieve data they're not allowed
 * to get. So, if we have a layer of operation functions that talk to the
 * database separated from our controllers, it'll help us, because now there is
 * a single place to audit and ensure that the proper permission checks occur.
 *
 * If we change the data associated with a certain type, like adding a field
 * to product, for example, we'll deal with those changes in the operations
 * file. This means that those changes will always be close to our permissions
 * checks.
 */

module.exports = {
  getSecretHomepageContentOperation: (isAdmin) => {
    if (isAdmin) {
      return 'super secret internal company details\n';
    }
    return 'hi\n';
  }
}
