import { studentModel } from "../models/student.model.js";

const getStudents = async (_, res) => {
  try {
    const students = await studentModel.all();
    return res.json({ ok: true, students });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false });
  }
};

const getStudent = async (req, res) => {
  try {
    const { rut } = req.params;
    const student = await studentModel.one(rut);
    return res.json({ ok: true, student });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false });
  }
};

const createStudent = async (req, res) => {
  try {
    const { rut, name, course, level } = req.body;
    const student = await studentModel.create({ rut, name, course, level });
    return res.json({ ok: true, student });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false });
  }
};

const updateStudent = async (req, res) => {
  try {
    const _rut = req.params.rut;
    const { rut, name, course, level } = req.body;
    const student = await studentModel.update(_rut, {
      rut,
      name,
      course,
      level,
    });
    return res.json({ ok: true, student });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false });
  }
};

const removeStudent = async (req, res) => {
  try {
    const { rut } = req.params;
    const student = await studentModel.remove(rut);
    return res.json({ ok: true, removed: student });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false });
  }
};

export const studentsController = {
  getStudent,
  getStudents,
  createStudent,
  updateStudent,
  removeStudent,
};
