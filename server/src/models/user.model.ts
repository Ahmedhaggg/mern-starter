import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import IUser from '../interfaces/IUser';

class User extends Model<IUser> {}

User.init({ 
    id: {
        type:  DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true
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