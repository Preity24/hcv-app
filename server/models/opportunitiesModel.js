import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const Opportunity = db.define('hcv_data_opportunity',{
    opportunity_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    program_name:{
        type: DataTypes.STRING
    },
    subprogram_name:{
        type: DataTypes.STRING
    },
    category:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    },
    qualification:{
        type: DataTypes.STRING
    },
    modality:{
        type: DataTypes.STRING
    },
    paid:{
        type: DataTypes.BOOLEAN
    },
    cost:{
        type: DataTypes.STRING
    },
    website:{
        type: DataTypes.STRING
    },
    images:{
        type: DataTypes.BLOB('long')
    },
    date:{
        type: DataTypes.DATE
    },
    age_range:{
        type: DataTypes.STRING
    },
    org_name:{
        type: DataTypes.STRING
    },
    org_city:{
        type: DataTypes.STRING
    },
    org_state:{
        type: DataTypes.STRING
    },
    org_zip:{
        type: DataTypes.INTEGER
    },
    org_address_name_line_1:{
        type: DataTypes.STRING
    },
    org_address_name_line_2:{
        type: DataTypes.STRING
    },
    program_email:{
        type: DataTypes.STRING
    },
    contact_full_name:{
        type: DataTypes.STRING
    },
    contact_email:{
        type: DataTypes.STRING
    },
    contact_title:{
        type: DataTypes.STRING
    },
    phone_number:{
        type: DataTypes.STRING
    },
    event_address_line1:{
        type: DataTypes.STRING
    },
    event_address_line2:{
        type: DataTypes.STRING
    },
    event_city: {
        type: DataTypes.STRING
    },
    event_state:{
        type: DataTypes.STRING
    },
    event_zip:{
        type: DataTypes.INTEGER
    },
},{
    freezeTableName: true, // Model tableName will be the same as the model name
    timestamps: false
});

export default Opportunity;