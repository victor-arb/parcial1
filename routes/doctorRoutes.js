import express from 'express';
import {
    loginDoctor,
    getAppointmentsByDoctor,
    createAppointment,
    updateAppointment,
    deleteAppointment,
} from '../controllers/doctorController.js';
import { verifyDoctorJWT } from '../middleware/authMiddleware.js';
import { validateAppointment } from '../middleware/validationMiddleware.js';

const router = express.Router();

router.post('/login', loginDoctor);
router.get('/appointment', verifyDoctorJWT, getAppointmentsByDoctor);
router.post('/appointment', verifyDoctorJWT, validateAppointment, createAppointment);
router.put('/appointment/:appointmentId', verifyDoctorJWT, validateAppointment, updateAppointment);
router.delete('/appointment/:appointmentId', verifyDoctorJWT, deleteAppointment);

export default router;
