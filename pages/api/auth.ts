import { NextApiRequest, NextApiResponse } from 'next';
import { signup, login, logout } from '../../lib/authHelpers';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  switch (method) {
    case 'POST':
      const { action, email, password, additionalInfo } = body;

      try {
        if (action === 'signup') {
          const user = await signup(email, password, additionalInfo);
          res.status(200).json({ user });
        } else if (action === 'login') {
          const user = await login(email, password);
          res.status(200).json({ user });
        } else {
          res.status(400).json({ message: 'Invalid action' });
        }
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
      break;
    
    case 'DELETE':
      // Handle logout
      try {
        await logout();
        res.status(200).json({ message: 'Logout successful' });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
      break;

    default:
      res.setHeader('Allow', ['POST', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
