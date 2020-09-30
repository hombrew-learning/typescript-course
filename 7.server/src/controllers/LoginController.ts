import { Request, Response } from 'express';
import { controller, get, post, validation } from './decorators';

@controller('/auth')
export class LoginController {
  @get<LoginController>('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
        <div>
          <label>Email</label>
          <input name="email" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <button>Submit</button>
      </form>
    `);
  }

  @post<LoginController>('/login')
  @validation('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    req.session = {
      loggedIn: true,
    };

    res.redirect('/');
  }

  @get<LoginController>('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
}
