module.exports.handler = (evt, ctx, done) => {
  const response = {
    statusCode: 200,
    body: {
      message: 'Hello World',
      input: evt
    }
  };

  done(null, response);
};
