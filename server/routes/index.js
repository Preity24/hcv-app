import express from "express";

import {
    getAllOpportunities,
    getOpportunityById,
    createOpportunity,
    updateOpportunity,
} from "../controllers/opportunities.js";

const router = express.Router();

router.get('/', getAllOpportunities);
router.get('/:id', getOpportunityById);
router.post('/', createOpportunity);
router.patch('/:id', updateOpportunity);

export default router;