import HTTP_STATUS from "../constants/httpStatus.js";
import AppError from "../errors/AppError.js";

const errorMiddleware = (err, req, res, next) => {

    console.error(err);

    if (err instanceof AppError) {

        return res.status(err.statusCode).json({
            success: false,
            message: err.message
        });

    }

    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "Internal Server Error"
    });

};

export default errorMiddleware;