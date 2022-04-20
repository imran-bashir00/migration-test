module.exports = {
  apps: [
    {
      name: 'polinate-strapi-production',
      script: 'npm',
      args: 'start',
      autorestart: true,
      max_restarts: 5,
    },
  ],
};
