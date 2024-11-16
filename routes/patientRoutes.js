import express from 'express';
import { getPatient, getAppointmentsByPatient } from '../controllers/patientController.js';
import { verifyDoctorJWT } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/:patientId', verifyDoctorJWT, getPatient);
router.get('/:patientId/appointment', verifyDoctorJWT, getAppointmentsByPatient);

export default router;
