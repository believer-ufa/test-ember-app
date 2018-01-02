module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  postsRouter.get('/', function(req, res) {
    if (/Bearer .+/.test(req.headers.authorization)) {
      var response = {
        data: [
          {
            type: 'posts',
            id: '1',
            attributes: {
              title: 'заголовок 1',
              body: 'содержимое 1'
            }
          },
          {
            type: 'posts',
            id: '2',
            attributes: {
              title: 'заголовок 2',
              body: 'содержимое 2'
            }
          }
        ]
      };
      res.status(200).send(response);
    } else {
      res.status(401).end();
    }
  });

  postsRouter.get('/3', function(req, res) {
    res.status(401).end();
  });

  app.use('/posts', postsRouter);
};
