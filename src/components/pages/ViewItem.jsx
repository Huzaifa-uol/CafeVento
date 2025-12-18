import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getItemById, deleteItem } from "../../services/firestoreService";

export default function ViewItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItem();
  }, [id]);

  const fetchItem = async () => {
    try {
      setLoading(true);
      const data = await getItemById(id);
      setItem(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await deleteItem(id);
        navigate("/");
      } catch (err) {
        setError("Failed to delete item");
        console.error(err);
      }
    }
  };

  if (loading) {
    return (
      <div className="container mt-5">
        <p>Loading item...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">{error}</div>
        <Link to="/" className="btn btn-secondary">
          Back to Items
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Link to="/" className="btn btn-outline-secondary mb-3">
            ← Back to Items
          </Link>

          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">{item.name}</h3>
            </div>
            <div className="card-body">
              <div className="row mb-4">
                <div className="col-md-6">
                  <h6 className="text-muted">Category</h6>
                  <p className="h5">{item.category || "Not specified"}</p>
                </div>
                <div className="col-md-6">
                  <h6 className="text-muted">Price</h6>
                  <p className="h5">${item.price || "N/A"}</p>
                </div>
              </div>

              <div className="mb-4">
                <h6 className="text-muted">Description</h6>
                <p>{item.description || "No description provided"}</p>
              </div>

              <div className="mb-4">
                <small className="text-muted">
                  Created:{" "}
                  {item.createdAt?.toDate?.().toLocaleString() || "N/A"}
                </small>
                <br />
                <small className="text-muted">
                  Last Updated:{" "}
                  {item.updatedAt?.toDate?.().toLocaleString() || "N/A"}
                </small>
              </div>

              <div className="d-flex gap-2">
                <Link to={`/edit/${item.id}`} className="btn btn-warning">
                  Edit Item
                </Link>
                <button onClick={handleDelete} className="btn btn-danger">
                  Delete Item
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
