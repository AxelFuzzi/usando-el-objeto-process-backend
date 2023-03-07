import { Router } from 'express';
import loginController from '../../controllers/auth/login.controller.js';
import passport from '../../passport/passport-local.js';

const router = Router();

/* ---------------------------- inicio de sesión ---------------------------- */
router.get('/login', loginController.getLogin);

router.post(
  '/login',
  passport.authenticate('login', {
    failureRedirect: '/faillogin',
    passReqToCallBack: true,
  }),
  loginController.postLogin
);

router.get('/faillogin', loginController.getFailLogin);

export default router;
