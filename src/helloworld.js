module.exports.handler = (event, ctx, done) => {

  const response = {
    statusCode: 200,
    body: {
      message: "Hello World",
      input: event
    },
  }

  done(null, response);
};
