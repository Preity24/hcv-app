import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const Opportunity = db.define('opportunities',{
    name:{
        type: DataTypes.STRING
    },
    category:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    },
    qualifications:{
        type: DataTypes.STRING
    },
    modality:{
        type: DataTypes.STRING
    },
    paid:{
        type: DataTypes.BOOLEAN
    },
    cost:{
        type: DataTypes.INTEGER
    },
    stipend:{
        type: DataTypes.INTEGER
    },
    financial_aid:{
        type: DataTypes.BOOLEAN
    },
    website:{
        type: DataTypes.STRING
    },
    image_path:{
        type: DataTypes.STRING
    },
    reviews:{
        type: DataTypes.STRING
    },
    start_date:{
        type: DataTypes.DATE
    },
    end_date:{
        type: DataTypes.DATE
    },
    application_deadline:{
        type: DataTypes.DATE
    },
    ageRange:{
        type: DataTypes.STRING
    },
    orgCity:{
        type: DataTypes.STRING
    },
},{
    freezeTableName: true, // Model tableName will be the same as the model name
    timestamps: false
});

export default Opportunity;