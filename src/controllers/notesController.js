export const getAllNotes = (req, res) => {
  res.status(200).json({ message: 'Retrieved all notes' });
};

export const getNoteById = (req, res) => {
  const { noteId } = req.params;
  res.status(200).json({
    message: `Retrieved note with ID: ${noteId}`,
  });
};
