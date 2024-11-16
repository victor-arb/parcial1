import doctorService from '../services/doctorService.js';

export const loginDoctor = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const token = await doctorService.login(email, password);
        res.status(200).json({ token });
    } catch (error) {
        next(error);
    }
};

export const getAppointmentsByDoctor = async (req, res, next) => {
    try {
        const { date } = req.query;
        const doctorId = req.user.id; // extraído del token JWT
        const appointments = await doctorService.getAppointments(doctorId, date);
        res.status(200).json(appointments);
    } catch (error) {
        next(error);
    }
};

export const createAppointment = async (req, res, next) => {
    try {
        const { patientId, date, hour } = req.body;
        const doctorId = req.user.id;
        const appointment = await doctorService.createAppointment(doctorId, patientId, date, hour);
        res.status(201).json(appointment);
    } catch (error) {
        next(error);
    }
};

export const updateAppointment = async (req, res, next) => {
    try {
        const { appointmentId } = req.params;
        const { patientId, date, hour } = req.body;
        const doctorId = req.user.id;
        const updatedAppointment = await doctorService.updateAppointment(appointmentId, doctorId, patientId, date, hour);
        res.status(200).json(updatedAppointment);
    } catch (error) {
        next(error);
    }
};

export const deleteAppointment = async (req, res, next) => {
    try {
        const { appointmentId } = req.params;
        const doctorId = req.user.id;
        await doctorService.deleteAppointment(appointmentId, doctorId);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};
