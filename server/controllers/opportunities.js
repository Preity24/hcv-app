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
                opportunity_id: req.params.id
            }
        });
        res.json(oppor[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const createOpportunity = async (req, res) => {
    let modality_value = "";
    if (req.body.modality === "In Person") {
        modality_value = "0"
    } else if (req.body.modality === "Virtual") {
        modality_value = "1"
    } else {
        modality_value = "2"
    }
    try {
        // Create a opportunity data json
        const data = {
            opportunity_id: req.body.opportunity_id,
            program_name: req.body.program_name,
            subprogram_name: req.body.subprogram_name,
            category: req.body.category,
            description: req.body.description,
            qualification: req.body.qualification === "" ? "null" : req.body.qualification,
            modality: modality_value,
            paid: req.body.paid === "true",
            cost: req.body.cost,
            website: req.body.website,
            images: req.files.length === 0 ? null : req.files[0]['buffer'],
            date: req.body.date === null ? null : req.body.date,
            age_range: req.body.age_range,
            grade_level: req.body.grade_level,
            org_name: req.body.org_name,
            org_city: req.body.org_city,
            org_state: req.body.org_state,
            org_zip: req.body.org_zip,
            org_address_name_line_1: req.body.org_address_name_line_1,
            org_address_name_line_2: req.body.org_address_name_line_2,
            program_email: req.body.program_email,
            phone_number: req.body.phone_number,
            contact_full_name: req.body.contact_full_name,
            contact_email: req.body.contact_email,
            contact_title: req.body.contact_title,
            event_address_line1: req.body.event_address_line1,
            event_address_line2: req.body.event_address_line2,
            event_city: req.body.event_city,
            event_state: req.body.event_state,
            event_zip: req.body.event_zip
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
    console.log("!!!!!!!!!!!!!!!");
    console.log(req.body.modality);
    let modality_value = "";
    if (req.body.modality === "In Person") {
        modality_value = "0"
    } else if (req.body.modality === "Virtual") {
        modality_value = "1"
    } else {
        modality_value = "2"
    }
    try {
        const data = {
            opportunity_id: req.body.opportunity_id,
            program_name: req.body.program_name,
            subprogram_name: req.body.subprogram_name,
            category: req.body.category,
            description: req.body.description,
            qualification: req.body.qualification === "" ? "null" : req.body.qualification,
            modality: modality_value,
            paid: req.body.paid === "true",
            cost: req.body.cost,
            website: req.body.website,
            images: req.files.length === 0 ? null : req.files[0]['buffer'],
            date: req.body.date === "" ? null : req.body.date,
            age_range: req.body.age_range,
            grade_level: req.body.grade_level,
            org_name: req.body.org_name,
            org_city: req.body.org_city,
            org_state: req.body.org_state,
            org_zip: req.body.org_zip,
            org_address_name_line_1: req.body.org_address_name_line_1,
            org_address_name_line_2: req.body.org_address_name_line_2,
            program_email: req.body.program_email,
            phone_number: req.body.phone_number,
            contact_full_name: req.body.contact_full_name,
            contact_email: req.body.contact_email,
            contact_title: req.body.contact_title,
            event_address_line1: req.body.event_address_line1,
            event_address_line2: req.body.event_address_line2,
            event_city: req.body.event_city,
            event_zip: req.body.event_zip
        };
        await Opportunity.update(data, {
            where: {
                opportunity_id: req.params.id
            }
        });
        res.json({
            "message": "Opportunity Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};