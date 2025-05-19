import Grocery from "../model/grocery.model.js"

export const listGroceries = async (req, res) => {
  try {
    const { q } = req.query;
    const filter = q
      ? {
          $or: [
            { name: new RegExp(q, "i") },
            { description: new RegExp(q, "i") },
            { tags: { $in: [new RegExp(q, "i")] } },
          ],
        }
      : {};
    const items = await Grocery.find(filter);
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getGrocery = async (req, res) => {
  try {
    const item = await Grocery.findOne({ _id: req.params.id });
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createGrocery = async (req, res) => {
  try {
    const item = await Grocery.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateGrocery = async (req, res) => {
  try {
    const item = await Grocery.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const patchGrocery = async (req, res) => {
  try {
    const item = await Grocery.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteGrocery = async (req, res) => {
  try {
    const item = await Grocery.findOneAndDelete({ _id: req.params.id });
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json({ message: "Deleted", item });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

