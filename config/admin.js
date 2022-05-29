module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cc87f4e072771fa58dedd55fbe8feca3'),
  },
});
