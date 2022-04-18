import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

export default nc<NextApiRequest, NextApiResponse>({
  onError: (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).end('Something went wrong!')
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Not found!')
  },
})
