import { Router } from 'express'
import { form } from '../routes/form.route'

const router = Router()


router.post('/form', form)

export default router
