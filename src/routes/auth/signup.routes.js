import { Router } from 'express';
import signupController from '../../controllers/auth/signup.controller.js';
import passport from '../../passport/passport-local.js';

const router = Router();

/* --------------------------- registro de usuario -------------------------- */
router.get('/signup', signupController.getSignup);

router.post(
  '/signup',
  passport.authenticate('signup', {
    failureRedirect: '/failsignup',
    passReqToCallBack: true,
  }),
  signupController.postSignup
);

router.get('/failsignup', signupController.getFailSignup);

export default router;
