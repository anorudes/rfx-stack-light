import Express from 'express';

const Router = new Express.Router();

export default [

  Router.get('/api/posts', (req, res) => {
    res.json({
      posts: [
        {
          id: '1',
          text: 'example 1',
        },
        {
          id: '2',
          text: 'example 2',
        },
        {
          id: '3',
          text: 'example 3',
        },
      ],
    });
  }),
];
