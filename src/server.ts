import app from './app';

const post = process.env.PORT || `3000`;

const httpServer = app.listen (post, () => {
  console.log(`App listening on post ${post}`);
})