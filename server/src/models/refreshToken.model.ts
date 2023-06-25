import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database"
import  IRefreshToken  from '../interfaces/IRefreshToken'
import User from "./user.model";
class RefreshToken extends Model<IRefreshToken> {}

RefreshToken.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.STRING,
        references: {
            model: User,
            key: "id"
        }
    }
}, {
    sequelize: sequelize,
    tableName: "RefreshToken",
    createdAt: false,

    updatedAt: false
});

export default RefreshToken;