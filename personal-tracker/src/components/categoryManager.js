import React, { useState, useEffect } from 'react';
import { getCategories, addCategory, editCategory, deleteCategory } from '../services/categoryService';

const CategoryManager = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await getCategories();
      setCategories(result.data);
    };
    fetchCategories();
  }, []);

  const handleAdd = async () => {
    await addCategory(newCategory);
    setNewCategory('');
    const result = await getCategories();
    setCategories(result.data);
  };

  const handleDelete = async (id) => {
    await deleteCategory(id);
    const result = await getCategories();
    setCategories(result.data);
  };

  return (
    <div>
      <h2>Category Manager</h2>
      <input
        type="text"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
        placeholder="New category"
      />
      <button onClick={handleAdd}>Add Category</button>
      <ul>
        {categories.map((cat) => (
          <li key={cat._id}>
            {cat.name}
            <button onClick={() => handleDelete(cat._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryManager;