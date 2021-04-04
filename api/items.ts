import { VercelRequest, VercelResponse } from '@vercel/node';

export default (request: VercelRequest, response: VercelResponse) => {
  response.status(200).json({
    data: [
      {
        type: 'item',
        id: '888',
        magicBlarf: 'no thank you',
        title: 'cheese',
        attributes: {
          title: 'some title',
          id: 88,
          'magic-chicken': 77,
        },
      },
      {
        type: 'item',
        id: '999',
        magicBlarf: 'no thank you',
        title: 'cheese',
        attributes: {
          title: 'one',
          id: 899999999,
          'magic-chicken': 77,
        },
      },
    ],
  });
};
