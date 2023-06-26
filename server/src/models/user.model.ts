import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import IUser from '../interfaces/IUser';

class User extends Model<IUser> {
    declare id : string;
    declare name : string;
    declare photo : string;
    declare email : string;
}

User.init({ 
    id: {
        type:  DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    photo: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: sequelize,
    tableName: "User",
    createdAt: false,
    updatedAt: false
});
 
export default User;