import Design from '../models/Design.js';

export const createDesign = async (req, res) => {
  try {
    const { image, fabric, color, artisan } = req.body;
    const newDesign = new Design({ image, fabric, color, artisan });
    await newDesign.save();
    res.status(201).json(newDesign);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create design' });
  }
};

export const getDesigns = async (req, res) => {
  try {
    const designs = await Design.find().sort({ createdAt: -1 });
    res.json(designs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch designs' });
  }
};

export const updateDesign = async (req, res) => {
  try {
    const { id } = req.params;
    const { image, fabric, color, artisan } = req.body;
    const updated = await Design.findByIdAndUpdate(id, { image, fabric, color, artisan }, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update design' });
  }
};

export const deleteDesign = async (req, res) => {
  try {
    await Design.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete design' });
  }
};
