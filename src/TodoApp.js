import { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { addPost, removePost, updatePost } from "./graphql/mutations";
import { allPost } from "./graphql/queries";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [p_id, setEditId] = useState("");
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await API.graphql(graphqlOperation(allPost, {}));
      let todos = response.data.allPost.posts;
      setTodos(todos);
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (todo) {
      let title = todo;
      let p_id = uuidv4();
      setTodo("");
      try {
        const response = await API.graphql(
          graphqlOperation(addPost, {
            p_id,
            title,
          })
        );
        let t = [response.data.addPost, ...todos];
        setTodos(t);
      } catch (e) {
        console.log(e.message);
      }
    }
  };

  const handleChange = ({ target: { value } }) => {
    setTodo(value);
  };

  const deleteTodo = async (p_id) => {
    try {
      const response = await API.graphql(
        graphqlOperation(removePost, {
          p_id,
        })
      );
      const filtered = todos.filter(
        (t) => t.p_id !== response.data.removePost.p_id
      );
      setTodos(filtered);
    } catch (e) {
      console.log(e.message);
    }
  };

  const editTodo = ({ p_id, title }) => {
    setTodo(title);
    setEditMode(true);
    setEditId(p_id);
  };

  const confirmEdit = async (e) => {
    e.preventDefault();
    if (todo) {
      setTodo("");
      setEditMode(false);
      try {
        const response = await API.graphql(
          graphqlOperation(updatePost, {
            p_id,
            title: todo,
          })
        );
        let edited = [...todos];
        let index;
        todos.forEach((t) => {
          if (t.p_id === response.data.updatePost.p_id) {
            index = todos.indexOf(t);
          }
        });
        edited[index].title = response.data.updatePost.title;
        setTodos(edited);
      } catch (e) {
        console.log(e.message);
      }
    }
  };

  const TrashIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-trash"
      viewBox="0 0 16 16"
    >
      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
      <path
        fillRule="evenodd"
        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
      />
    </svg>
  );

  const EditIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-pencil-square"
      viewBox="0 0 16 16"
    >
      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
      <path
        fillRule="evenodd"
        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
      />
    </svg>
  );

  return (
    <div className="p-2">
      <h4 className="mt-2">My Todo App</h4>
      <form onSubmit={editMode ? confirmEdit : handleSubmit}>
        <input
          type="text"
          placeholder="Enter New Todo"
          className="form-control w-50 mt-3"
          onChange={handleChange}
          value={todo}
        />
        <button type="submit" className="btn btn-primary my-2">
          {editMode ? "Edit Todo" : "Submit Todo"}
        </button>
      </form>
      <div className="w-50 mt-3">
        <ul className="list-group list-group-flush">
          {todos.map((t, i) => (
            <li key={t.p_id} className="list-group-item p-1">
              {i + 1}
              {")"} {t.title}
              <button
                onClick={() => deleteTodo(t.p_id)}
                className="btn btn-danger float-right"
              >
                <TrashIcon />
              </button>
              <button
                onClick={() => editTodo(t)}
                className="btn btn-success mr-2 float-right"
              >
                <EditIcon />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
