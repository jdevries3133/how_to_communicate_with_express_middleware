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
