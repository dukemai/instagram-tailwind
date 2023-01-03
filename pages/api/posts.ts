import { NextApiRequest, NextApiResponse } from 'next'


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const posts = [...new Array(10).keys()];
  res.status(200).json(posts)
}