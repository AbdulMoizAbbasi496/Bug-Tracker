import AppError from "./AppError.js";
import HTTP_STATUS from "../constants/httpStatus.js";

class BadRequestError extends AppError {
    constructor(message = "Bad Request") {
        super(message, HTTP_STATUS.BAD_REQUEST);
    }
}

export default BadRequestError;