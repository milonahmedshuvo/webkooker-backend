import express from 'express'
import { sensitiveControllers } from './scan.controller'
const router = express.Router()

router.post('/scan', sensitiveControllers.scanWebsite )


export const sensitiveRoute = router