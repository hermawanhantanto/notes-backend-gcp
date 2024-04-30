const {
  addNotesHandler,
  getAllNotesHandler,
  getNotesByIdHandler,
  editNoteByIdHandler,
  deleteNotesHandler,
} = require("./handler");

const routes = [
  {
    method: "GET",
    path: "/notes",
    handler: getAllNotesHandler,
  },
  {
    method: "POST",
    path: "/notes",
    handler: addNotesHandler,
  },
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getNotesByIdHandler,
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: editNoteByIdHandler,
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteNotesHandler,
  },
];

module.exports = routes;
