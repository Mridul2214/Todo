import sampleSchema from './sample.model.js';

export async function get(req, res) {
    const data = await sampleSchema.find({});
    res.send({ data });
}

export async function add(req, res) {
    try {
        const { task } = req.body;
        await sampleSchema.create({ task });
        res.status(200).send("Successfully Added");
    } catch (error) {
        console.log(error);
        res.status(400).send('Failed to add task');
    }
}

export async function update(req, res) {
    try {
        const { task } = req.body;
        const { id } = req.params;
        await sampleSchema.findByIdAndUpdate(id, { task });
        res.status(200).send("Successfully Updated");
    } catch (error) {
        console.log(error);
        res.status(400).send('Failed to update task');
    }
}

export async function remove(req, res) {
    try {
        const { id } = req.params; 
        await sampleSchema.findByIdAndDelete(id);
        res.status(200).send("Successfully Deleted");
    } catch (error) {
        console.log(error);
        res.status(400).send('Failed to delete task');
    }
}
