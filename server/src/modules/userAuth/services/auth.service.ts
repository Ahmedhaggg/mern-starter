import { createJwtToken } from "../../../helpers/jwt";
import IUser from "../../../interfaces/IUser";
import ILoginResponse from "../interfaces/ILoginResponse";
import { createRefreshToken } from "../repositories/token.repository";
import { createUser, findUserByEmail } from "../repositories/user.repositories";

export const loginWithGoogle = async (userData: IUser) : Promise<ILoginResponse> => {
    let { email, name, photo } = userData;

    let user = await findUserByEmail(email);
    
    if (!user)
        user = await createUser({ email, name, photo });
    
    let refreshToken = await createJwtToken({ id : user.id }, "1y");
    let accessToken = await createJwtToken({ id: user.id, role: "user"}, "3d");

    await createRefreshToken({ userId: user.id, token: refreshToken });

    return { refreshToken, accessToken };
}