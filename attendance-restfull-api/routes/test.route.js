import express from 'express';

const TestRouter = express.Router();

TestRouter.get('/test', (req, res) => {
  res.status(200).json({
    message: "it's works!"
  })
});

export default TestRouter;