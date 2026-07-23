import { useEffect, useState } from "react";
import "./App.css";

const API = "http://localhost:5000/api/bug";

function App() {
  const emptyForm = {
    title: "",
    description: "",
    status: "Open",
    priority: "Medium",
    reporter: "",
  };

  const [bugs, setBugs] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);

  const getBugs = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setBugs(data);
  };

  const getSingleBug = async (id) => {
    const res = await fetch(`${API}/${id}`);
    const data = await res.json();

    setEditingId(id);
    setForm({
      title: data.title,
      description: data.description,
      status: data.status,
      priority: data.priority,
      reporter: data.reporter,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const createBug = async () => {
    await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setForm(emptyForm);
    getBugs();
  };

  const updateBug = async () => {
    await fetch(`${API}/${editingId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setEditingId(null);
    setForm(emptyForm);
    getBugs();
  };

  const deleteBug = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });

    getBugs();
  };

  useEffect(() => {
    getBugs();
  }, []);

  return (
    <div className="container">
      <h1>🐞 Bug Tracker</h1>

      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
      />

      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
      />

      <input
        placeholder="Reporter"
        value={form.reporter}
        onChange={(e) =>
          setForm({ ...form, reporter: e.target.value })
        }
      />

      <select
        value={form.status}
        onChange={(e) =>
          setForm({ ...form, status: e.target.value })
        }
      >
        <option>Open</option>
        <option>In Progress</option>
        <option>Resolved</option>
        <option>Closed</option>
      </select>

      <select
        value={form.priority}
        onChange={(e) =>
          setForm({ ...form, priority: e.target.value })
        }
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      {editingId ? (
        <>
          <button className="create-btn" onClick={updateBug}>
            Update Bug
          </button>

          <button
            className="delete-btn"
            style={{ width: "100%", marginBottom: "20px" }}
            onClick={() => {
              setEditingId(null);
              setForm(emptyForm);
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        <button className="create-btn" onClick={createBug}>
          Create Bug
        </button>
      )}

      <button
        className="resolve-btn"
        style={{ width: "100%" }}
        onClick={getBugs}
      >
        Refresh Bugs
      </button>

      <hr />

      {bugs.length === 0 && (
        <p className="empty">No Bugs Found 🐞</p>
      )}

      {bugs.map((bug) => (
        <div className="bug-card" key={bug.id}>
          <h3>{bug.title}</h3>

          <p>
            <strong>Description:</strong> {bug.description}
          </p>

          <p>
            <strong>Status:</strong> {bug.status}
          </p>

          <p>
            <strong>Priority:</strong> {bug.priority}
          </p>

          <p>
            <strong>Reporter:</strong> {bug.reporter}
          </p>

          <div className="actions">
            <button
              className="create-btn"
              onClick={() => getSingleBug(bug.id)}
            >
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() => deleteBug(bug.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;