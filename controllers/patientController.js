import patientService from '../services/patientService.js';

export const getPatient = async (req, res, next) => {
    try {
        const { patientId } = req.params;
        const patient = await patientService.getPatientById(patientId);
        res.status(200).json(patient);
    } catch (error) {
        next(error);
    }
};

export const getAppointmentsByPatient = async (req, res, next) => {
    try {
        const { patientId } = req.params;
        const appointments = await patientService.getAppointments(patientId);
        res.status(200).json(appointments);
    } catch (error) {
        next(error);
    }
};
