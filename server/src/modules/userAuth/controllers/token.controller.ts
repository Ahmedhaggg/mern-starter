import { Router, Request, Response, NextFunction } from "express";
import { refreshAccessToken, logout } from "../services/token.service"
import httpStatucCode from "../../../errors/httpStatusCode";
import { formatResponse } from "../../../helpers/responseFormat";
import catchErrors from "../../../middlewares/catchErrors";
import { validateRefreshToken, validateLogout } from "../validators/token.validator";
import checkValidationErrors from "../../../middlewares/checkValidationErrors";
const router = Router();

router
    .post("/refresh", 
        validateRefreshToken(),
        checkValidationErrors,
        catchErrors(
            async (req: Request, res: Response, next: NextFunction) => {
                let { refreshToken } = req.body;

                let  accessToken = await refreshAccessToken(refreshToken);

                res.status(httpStatucCode.OK).json(formatResponse({ accessToken }))
            }
        )
    )

router
    .delete("/logout", 
        validateLogout(),
        checkValidationErrors,
        catchErrors(
            async (req: Request, res: Response, next: NextFunction) => {
                let { refreshToken } = req.body;

                await logout(refreshToken);

                res.status(httpStatucCode.OK).json(formatResponse(null))
            }
        )
    )

export default router;