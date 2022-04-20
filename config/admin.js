module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '27863279df32e0ce4836bca576b72afc'),
  },
});
