const NotesService = {
    getAllNotes(db) {
      return db.select("*").from("notes");
    },
    insertNote(db, newNote) {
      return db
        .into("notes")
        .insert(newNote)
        .returning("*")
        .then((rows) => {
          return rows[0];
        });
    },
    getNoteById(db, id) {
      return db.from("notes").select("*").where("id", id).first();
    },
    deleteNote(db, id) {
      return db("notes").where({ id }).delete();
    },
    updateNote(db, newNoteFields) {
      return db("notes").where({ id }).update(newNoteFields);
    },
  };
  
  module.exports = NotesService;