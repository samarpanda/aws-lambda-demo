module.exports.hello = (event, ctx, done) => {

  const response = {
    statusCode: 200,
    body: {
      message: "Hello",
      input: event
    },
  };

  done(null, response);
}