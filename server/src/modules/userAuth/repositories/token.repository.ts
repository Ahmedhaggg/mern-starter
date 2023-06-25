import IRefreshToken from "../../../interfaces/IRefreshToken";
import RefreshToken from "../../../models/refreshToken.model";

export const createRefreshToken = async (data: IRefreshToken) : Promise<RefreshToken> => 
    await RefreshToken.create(data);

export const findRefreshToken = async (refreshToken: string) : Promise<RefreshToken | null> => 
    await RefreshToken.findOne({ where: { token: refreshToken}});