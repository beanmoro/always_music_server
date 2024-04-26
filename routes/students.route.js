import { Router } from "express";
import { studentsController } from "../controllers/students.controller.js";

const router = Router();

router.get("/", studentsController.getStudents);
router.get("/:rut", studentsController.getStudent);
router.post("/", studentsController.createStudent);
router.put("/:rut", studentsController.updateStudent);
router.delete("/:rut", studentsController.removeStudent);

export default router;
