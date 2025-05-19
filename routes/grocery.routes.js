import { Router } from "express";
import {
  listGroceries,
  getGrocery,
  createGrocery,
  updateGrocery,
  patchGrocery,
  deleteGrocery,
  seedGroceries,
} from "../controllers/grocery.controller.js"

const router = Router();
router.get("/", listGroceries);
router.get("/:id", getGrocery);
router.post("/", createGrocery);
router.put("/:id", updateGrocery);
router.patch("/:id", patchGrocery);
router.delete("/:id", deleteGrocery);
router.post("/seed", seedGroceries);


export default router;