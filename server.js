const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

const port = process.env.PORT || 5000;
const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


app.listen(port, () => console.log(`Server listening on port ${port}`));