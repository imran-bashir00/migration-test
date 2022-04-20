module.exports = {
  apps: [
    {
      name: 'polinate-strapi-development',
      script: 'npm',
      args: 'run develop',
      autorestart: true,
      max_restarts: 5,
    },
  ],
};
