import pool from "../config/database.js";

export const getPatientById = async (patientId) => {
  const result = await pool.query("SELECT * FROM patient WHERE id = $1", [
    patientId,
  ]);
  return result.rows[0];
};

export const getAppointmentsByPatient = async (patientId) => {
  const result = await pool.query(
    `
    SELECT a.id, a.date, a.hour, d.name AS doctor_name, s.name AS specialty
    FROM medicalappointment a
    JOIN doctor d ON a.doctor_id = d.id
    JOIN specialty s ON d.specialty_id = s.id
    WHERE a.patient_id = $1
  `,
    [patientId]
  );
  return result.rows;
};
