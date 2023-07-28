import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/apiCalls";
import "./newProduct.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function NewProduct() {
  const history = useHistory();
  const [inputs, setInputs] = useState({});
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const product = { ...inputs, categories: cat };
    addProduct(product, dispatch);
    setTimeout(() => {
      history.push("/products");
    }, 3000);
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Title</label>
          <input
            name="title"
            type="text"
            placeholder="Product Title..."
            onChange={handleChange}
          />
        </div>
        <div
          className="addProductItem"
          style={{ display: "flex", flexFlow: "row no-wrap" }}
        >
          <label>Image Url</label>
          <input
            name="img"
            type="text"
            placeholder="Image url..."
            onChange={handleChange}
          />
        </div>
        {inputs?.img && (
          <img src={inputs?.img} alt="" className="newProductInfoImg" />
        )}

        <div className="addProductItem">
          <label>Description</label>
          <input
            name="desc"
            type="text"
            placeholder="description..."
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            name="price"
            type="number"
            placeholder="Price..."
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Size</label>
          <input
            name="size"
            type="text"
            placeholder="Size..."
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input type="text" placeholder="whiskey,beer" onChange={handleCat} />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button onClick={handleClick} className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
}
