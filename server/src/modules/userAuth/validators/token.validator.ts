import { RequestHandler } from "express"
import { body } from "express-validator"
import ApiError from "../../../errors/ApiError"
import httpStatucCode from "../../../errors/httpStatusCode"

export const validateRefreshToken = ()  => {
    return [
        body("refreshToken").notEmpty()
    ]
}

export const validateLogout = ()  => {
    return [
        body("refreshToken").notEmpty()
    ]
}
