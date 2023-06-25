import User from "./user.model";
import RefreshToken from "./refreshToken.model";

User.hasMany(RefreshToken, { foreignKey: "userId", onDelete: "CASCADE" });
RefreshToken.hasMany(User);
