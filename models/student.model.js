import { pool } from "../database/db_connection.js";

const one = async (rut) => {
  const { rows } = await pool.query("SELECT * FROM STUDENTS WHERE rut = $1", [
    rut,
  ]);
  return rows;
};

const all = async () => {
  const { rows } = await pool.query("SELECT * FROM STUDENTS ORDER BY rut ASC");
  return rows;
};

const create = async (student) => {
  const { rut, name, course, level } = student;
  const { rows } = await pool.query(
    "INSERT INTO STUDENTS(rut, name, course, level) VALUES ($1, $2, $3, $5) RETURNING *;",
    [rut, name, course, level]
  );
  return rows;
};

const update = async (_rut, student) => {
  const { rut = _rut, name, course, level = 1 } = student;
  const { rows } = await pool.query(
    "UPDATE STUDENTS SET rut = $1, name = $2, course = $3, level = $4 WHERE rut = $5 RETURNING *;",
    [rut, name, course, level, _rut]
  );
  return rows;
};

const remove = async (rut) => {
  const { rows } = await pool.query(
    "DELETE FROM STUDENTS WHERE rut = $1 RETURNING *;",
    [rut]
  );
  return rows;
};

export const studentModel = {
  all,
  one,
  create,
  update,
  remove,
};
