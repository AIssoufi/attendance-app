import express from 'express';
import User from '../models/user';

const authRouter = express.Router();

//POST route for updating data
authRouter.post('/signin', (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({
      message: "All fields required.",
    });
    return;
  }

  const userData = {
    username,
    password
  }

  User.create(userData, (error, user) => {
    if (error) {
      console.log("error : ", error)
      res.status(500).json({
        message: "Impossible de créer l'utilisateur."
      });
    } else {
      req.session.userId = user._id;
      res.status(201).json(user);
    }
  });
});


authRouter.post('/login', (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({
      message: "All fields required.",
    });
    return;
  }

  User.authenticate(username, password, (error, user) => {
    if (error || !user) {
      res.status(401).json({
        message: "Wrong username or password.",
      });
    } else {
      req.session.userId = user._id;
      res.status(200).json(user);
    }
  });
});

// GET for logout logout
authRouter.get('/logout', (req, res) => {
  const { session } = req;

  if (!session) return res.status(403).send({
    message: "La déconnexion à échoué."
  });

  // delete session object
  session.destroy(err => {
    return err ?
      res.status(403).send({
        message: err
      }) :
      res.status(200).send({
        message: "Vous êtes déconnecté"
      });
  });
});

export default authRouter;