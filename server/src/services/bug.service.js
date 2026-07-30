import Bug from "../models/Bug.js";
import NotFoundError from "../errors/NotFoundError.js";

class BugService {

    async getAll() {
        return await Bug.findAll();
    }

    async getById(id) {

        const bug = await Bug.findByPk(id);

        if (!bug) {
            throw new NotFoundError("Bug not found");
        }

        return bug;
    }

    async create(data) {
        return await Bug.create(data);
    }

    async update(id, data) {

        const bug = await Bug.findByPk(id);

        if (!bug) {
            throw new NotFoundError("Bug not found");
        }

        await bug.update(data);

        return bug;
    }

    async remove(id) {

        const bug = await Bug.findByPk(id);

        if (!bug) {
            throw new NotFoundError("Bug not found");
        }

        await bug.destroy();

        return {
            message: "Bug deleted successfully"
        };
    }

}

export default new BugService();