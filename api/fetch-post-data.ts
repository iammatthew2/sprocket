import { VercelRequest, VercelResponse } from '@vercel';

export default (request: VercelRequest, response: VercelResponse) => {
  const { name = 'World' } = request.query;
  response.status(200).json({ res: `Hello ${name}!` });
};
