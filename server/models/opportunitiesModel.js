import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const Opportunity = db.define('hcv_data_view',{
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
        type: DataTypes.INTEGER
    },
    source:{
        type: DataTypes.STRING
    },
    website:{
        type: DataTypes.STRING
    },
    images:{
        type: DataTypes.BLOB
    },
    grade_level:{
        type: DataTypes.STRING
    },
    date:{
        type: DataTypes.DATE
    },
    age_range:{
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
    program_email:{
        type: DataTypes.STRING
    },
    contact_full_name:{
        type: DataTypes.STRING
    },
    contact_email:{
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