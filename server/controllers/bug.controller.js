const bugs = [];

function getAll(req, res) {
    return res.status(200).json(bugs);
}

function create(req, res) {
    const bug = {
        id: bugs.length + 1,
        ...req.body,
        createdAt: new Date()
    };

    bugs.push(bug);

    return res.status(201).json({
        message: "Bug created successfully",
        data: bug
    });
}

function getOne(req, res) {
    const id = Number(req.params.id);

    const bug = bugs.find((bug) => bug.id === id);

    if (!bug) {
        return res.status(404).json({
            message: "Bug not found"
        });
    }

    return res.json(bug);
}

function update(req, res) {
    const id = Number(req.params.id);

    const bug = bugs.find((bug) => bug.id === id);

    if (!bug) {
        return res.status(404).json({
            message: "Bug not found"
        });
    }

    Object.assign(bug, req.body);

    return res.json({
        message: "Bug updated successfully",
        data: bug
    });
}

function remove(req, res) {
    const id = Number(req.params.id);

    const index = bugs.findIndex((bug) => bug.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Bug not found"
        });
    }

    bugs.splice(index, 1);

    return res.json({
        message: "Bug deleted successfully"
    });
}

export default {
    getAll,
    create,
    getOne,
    update,
    remove
};