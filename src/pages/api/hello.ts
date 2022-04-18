import nc from '@/lib/next-connect'

const handler = nc.get((req, res) => {
  return res.status(200).json({ name: 'Hello World!' })
})

export default handler
