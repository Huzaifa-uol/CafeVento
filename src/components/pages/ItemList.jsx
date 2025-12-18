import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllItems, deleteItem } from "../../services/firestoreService";
import "./ItemList.css";

export default function ItemList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const data = await getAllItems();
      setItems(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await deleteItem(id);
        setItems(items.filter(item => item.id !== id));
      } catch (err) {
        setError("Failed to delete item");
        console.error(err);
      }
    }
  };

  if (loading) {
    return <div className="container mt-5"><p>Loading items...</p></div>;
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>All Items</h2>
        <Link to="/create" className="btn btn-primary">
          + Create New Item
        </Link>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {items.length === 0 ? (
        <div className="alert alert-info">
          No items found. <Link to="/create">Create your first item</Link>
        </div>
      ) : (
        <div className="row">
          {items.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="text-muted small">
                    {item.category && `Category: ${item.category}`}
                  </p>
                  <p className="text-muted small">
                    Price: ${item.price || "N/A"}
                  </p>
                </div>
                <div className="card-footer bg-light d-flex gap-2">
                  <Link
                    to={`/item/${item.id}`}
                    className="btn btn-sm btn-info flex-grow-1"
                  >
                    View
                  </Link>
                  <Link
                    to={`/edit/${item.id}`}
                    className="btn btn-sm btn-warning flex-grow-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="btn btn-sm btn-danger flex-grow-1"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
