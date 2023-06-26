import ApiError from "../../../errors/ApiError";
import httpStatusCode from "../../../errors/httpStatusCode"
import { getDataFromJwtToken } from "../../../helpers/jwt";
import { findRefreshToken, deleteRefreshToken } from "../repositories/token.repository"
import { generateUserAccessToken } from "../utils/userTokenGenerator";

export const refreshAccessToken = async (refreshToken: string) : Promise<string> => {
    let userRefreshToken = await findRefreshToken(refreshToken);

    if (!userRefreshToken)
        throw new ApiError(httpStatusCode.CLIENT_ERROR, {
            message: "invalid refresh token"
        })
    
    let tokenData = await getDataFromJwtToken(userRefreshToken.token);
    
    if (!tokenData)
        throw new ApiError(httpStatusCode.CLIENT_ERROR, {
            message: "expire refresh token"
        })

    let newAccessToken = await generateUserAccessToken(userRefreshToken.id);    

    return newAccessToken;
}

export const logout = async (refreshToken: string) : Promise<void> => {
    await deleteRefreshToken(refreshToken);
}