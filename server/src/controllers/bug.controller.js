import HTTP_STATUS from "../constants/httpStatus.js";
import BugService from "../services/bug.service.js";

async function getAll(req, res, next) {
    try {

        const bugs = await BugService.getAll();

        res.status(HTTP_STATUS.OK).json(bugs);

    } catch (err) {
        next(err);
    }
}

async function create(req, res, next) {
    try {

        const bug = await BugService.create(req.body);

        res.status(HTTP_STATUS.CREATED).json({
            message: "Bug created successfully",
            data: bug
        });

    } catch (err) {
        next(err);
    }
}

async function getOne(req, res, next) {
    try {

        const bug = await BugService.getById(req.params.id);

        res.status(HTTP_STATUS.OK).json(bug);

    } catch (err) {
        next(err);
    }
}

async function update(req, res, next) {
    try {

        const bug = await BugService.update(
            req.params.id,
            req.body
        );

        res.status(HTTP_STATUS.OK).json({
            message: "Bug updated successfully",
            data: bug
        });

    } catch (err) {
        next(err);
    }
}

async function remove(req, res, next) {
    try {

        const response = await BugService.remove(req.params.id);

        res.status(HTTP_STATUS.OK).json(response);

    } catch (err) {
        next(err);
    }
}

export default {
    getAll,
    create,
    getOne,
    update,
    remove
};