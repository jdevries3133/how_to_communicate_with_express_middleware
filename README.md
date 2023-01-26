# How to Use Express Middleware to Communicate

With middleware, you can lookup values in a centralized place and mutate
express's `req.*`. You can add new properties to the request, or mutate
existing ones.

This is useful if, for example, you need to query the database to lookup user
details for every request.

# Real World Considerations

Note that there can be negative performance implications for repetitive DB
queries for _every_ request, especially for high throughput services. That is
why it is possible to store information in `jwt`s In a real-world use case, you
probably would put key information like this into you `jwt` so that you would
have access to it quickly at runtime without needing to pause for a network
hop.

# Side-Note

_Technically,_ express doesn't want people mutating anything in `req.*` directly,
and they say that hypothetically, if you do so, it's "unsafe" for future changes
to express. For example, if you set `req.user` but express later does something
internally to manipulate `req.user`, you'd have a problem!

In reality, express hasn't broken user-defined properties in `req.*`, and they
probably never will. If they did, it would break thousands of projects that
depend on express and don't bother reading the docs!

If you want to do the right thing by express's own docs, they say that
`req.locals` is a safe object for you to put your own stuff, and they promise
to always just forward the `req.locals` object to your controllers without
manipulating it. Ultimately, this side-note is all a technicality that you
probably need not worry about.
