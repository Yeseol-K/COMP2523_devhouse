x�TKo�@�����R��*v�C�t�z(�P��g�m��hg����Y;N��{vf��浥�%�^^\<S�?~�p���4ܺ��^�jP��$Q-���с��t�f�6�{���=tEJ��!5��B�i�u��Z�eQڛS송F�(TE�0o�]�o	3�;�H�Ŭ�m.��	)߽�^e���r�\v'`��K`U�'�J_��`��wP9M$��琨��FE�mWy�m;��miY#ݳ߀|�*�փ��{��V���-W�y��V�� 
���mJ�S�I��ð���e��"�B&i��T.�c~�{����v�IY�z�a���C����I�DqT��!Z�PǤ#���0�V"K��N��4j��� �����f�|�-J�D҈IM�f?tc�N�lq~y�+�n|8�O-(��v��\�=;�UB����k�(n����@|�Ev����羧 �O�e���e�ܿq�~W�Zf�16񽭋�����	7��cͥ|�ч9����2j�$S�Dٱ�F��hK�-�2���!�Pg�wl��a�=O�� ��a�����u#CZ����ȴg�l���O�'�4��q6ǈ�V�@�x~��<�kA|U>\r��W�_�L]�                                                                                                                                                                                                                                                                                                                                                                                                              s.router.get(`${this.path}/logout`, this.logout);
  }

  private showLoginPage = (req: express.Request, res: express.Response) => {
    const errorMessage = req.query.error;
    res.render("authentication/views/login", { errorMessage });
  };

  private showRegistrationPage = (req: express.Request, res: express.Response) => {
    const errorMessage = req.query.error;
    res.render("authentication/views/register", { errorMessage });
  };

  // 🔑 These Authentication methods needs to be implemented by you
  private login = passport.authenticate("local", {
    successRedirect: "/posts",
    failureRedirect: "/auth/login?error=failed%20login",
    failureMessage: true,
  });

  private registration = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const { email, password, username, firstName, lastName } = req.body;
    // Check if user already exist in db
    const user = await this._service.findUserByEmail(email);
    if (user) {
      res.redirect("/auth/register?error=user%20exists%20already");
    } else {
      const createdUser = await this._service.createUser({
        ...
        username,
        email,
        password,
        firstName,
        lastName,
      });
      res.redirect("/auth/login");
    }
  };

  private logout = async (req: express.Request, res: express.Response) => {
    req.logOut((err) => {
      if (err) console.log(err);
    });
    res.redirect("/");
  };
}

export default AuthenticationController;
