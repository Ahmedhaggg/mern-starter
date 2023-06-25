import User from "../../../models/user.model";
import IUser  from "../../../interfaces/IUser";

export const createUser = async (userData: IUser) : Promise<User> => await User
    .create(userData, { raw: true })

export const findUserByEmail = async (email: string) : Promise<User | null> => await User
    .findOne({ where: { email }, raw: true });
