module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          uploadStream: {
            folder:'/platformablewebsite'
            },
          delete: {},
        },
      },
    },
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: 'smtp.gmail.com',
          port:  587,
          auth: {
            user: 'alexei@platformable.com',
            pass: process.env.NODEMAILERPASSWORD,
          },
          // ... any custom nodemailer options
        },
        settings: {
          defaultFrom: 'alexei@platformable.com',
          defaultReplyTo: 'alexei@platformable.com',
        },
      },
    },
    // ...
  });