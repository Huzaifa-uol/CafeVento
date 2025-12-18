import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createItem } from "../../services/firestoreService";

export default function CreateItem() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      setError("Item name is required");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const itemData = {
        name: formData.name,
        description: formData.description,
        category: formData.category,
        price: formData.price ? parseFloat(formData.price) : null
      };

      const id = await createItem(itemData);
      navigate(`/item/${id}`);
    } catch (err) {
      setError("Failed to create item: " + err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">Create New Item</h3>
            </div>
            <div className="card-body">
              {error && <div className="alert alert-danger">{error}</div>}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Item Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter item name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter item description"
                    rows="4"
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Category</label>
                    <input
                      type="text"
                      className="form-control"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      placeholder="Enter category"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Price</label>
                    <input
                      type="number"
                      className="form-control"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="Enter price"
                      step="0.01"
                      min="0"
                    />
                  </div>
                </div>

                <div className="d-flex gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? "Creating..." : "Create Item"}
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => navigate("/")}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
