import { Router } from 'express'
const router = Router()

router.get('/', (_, res) => res.send('Hola Mundo mundial'))

router.get('/ping', (_, res) => res.send('pong'))

export default router