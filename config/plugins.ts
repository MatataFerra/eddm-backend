export default ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: env("VERCEL_DEPLOY_HOOK"),
      apiToken: env("VERCEL_API_TOKEN"),
      appFilter: env("VERCEL_NAME_APP"),
      teamFilter: env("VERCEL_TEAM_ID"),
      roles: ["strapi-super-admin"],
    },
  },
});
