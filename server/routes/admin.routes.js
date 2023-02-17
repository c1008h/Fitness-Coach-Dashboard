import express from 'express'

import { getAllClients, getClientDetail, createClient, updateClient, deleteClient } from '../controllers/admin.controller.js'

const router = express.Router();

router.route('/').get(getAllClients)
router.route('/').post(createClient)

router.route('/:id').get(getClientDetail)
router.route('/:id').patch(updateClient)
router.route('/:id').delete(deleteClient)

export default router;