import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Doctor from '../models/Doctor.js';
import Appointment from '../models/Appointment.js';

class DoctorService {
    async login(email, password) {
        const doctor = await Doctor.findByEmail(email);
        if (!doctor || !(await bcrypt.compare(password, doctor.password))) {
            throw new Error('Credenciales inválidas');
        }
        const token = jwt.sign({ id: doctor.id, role: 'doctor' }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return token;
    }

    async getAppointments(doctorId, date) {
        return await Appointment.findByDoctor(doctorId, date);
    }

    async createAppointment(doctorId, patientId, date, hour) {
        return await Appointment.create({ doctorId, patientId, date, hour });
    }

    async updateAppointment(appointmentId, doctorId, patientId, date, hour) {
        return await Appointment.update({ appointmentId, doctorId, patientId, date, hour });
    }

    async deleteAppointment(appointmentId, doctorId) {
        return await Appointment.delete(appointmentId, doctorId);
    }
}

export default new DoctorService();
