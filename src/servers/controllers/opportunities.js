import Opportunity from "../models/opportunitiesModel.js";

export const getAllOpportunities = async (req, res) => {
    try {
        const oppor = await Opportunity.findAll();
        res.json(oppor);
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const getOpportunityById = async (req, res) => {
    try {
        const oppor = await Opportunity.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(oppor[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const createOpportunity = async (req, res) => {
    try {
        // Create a opportunity data json
        const data = {
            id: req.body.id,
            name: req.body.name,
            category: req.body.category,
            description: req.body.description,
            qualifications: req.body.qualifications === "" ? "null" : req.body.qualifications,
            modality: req.body.modality === "" ? "null" : req.body.modality,
            paid: req.body.paid === "true",
            cost: parseInt(req.body.cost),
            stipend:parseInt(req.body.stipend),
            financial_aid: req.body.financial_aid === "true",
            website: req.body.website,
            image_path: req.body.image_path === "" ? "null" : req.body.image_path,
            reviews: req.body.reviews === "" ? "null" : req.body.reviews,
            start_date: req.body.start_date === "" ? null : req.body.start_date,
            end_date: req.body.end_date === "" ? null : req.body.end_date,
            application_deadline: req.body.application_deadline === "" ? null : req.body.application_deadline,

        };
        await Opportunity.create(data);
        res.json({
            "message": "Opportunity Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const updateOpportunity = async (req, res) => {
    try {
        await Opportunity.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Opportunity Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};
