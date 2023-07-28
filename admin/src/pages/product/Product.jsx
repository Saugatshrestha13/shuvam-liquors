import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { updateProduct } from "../../redux/apiCalls";
import { userRequest } from "../../requestMethods";
import "./product.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Product() {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const productId = location.pathname.split("/")[2];
  const [pStats, setPStats] = useState([]);
  const [inputs, setInputs] = useState({});

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

  useEffect(() => {
    console.log(product);
    if (!product) {
      history.push("/products");
    }
    if (product) {
      setInputs({
        title: product.title,
        desc: product.desc,
        inStock: product.inStock,
        size: product.size,
        price: product.price,
        img: product.img,
      });
    }
  }, [product]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("orders/income?pid=" + productId);
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        list.map((item) =>
          setPStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, MONTHS]);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const updateProductClick = (id) => {
    const product = { ...inputs };
    console.log(product);
    updateProduct(id, product, dispatch);
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={pStats} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product?.img} alt="" className="productInfoImg" />
            <span className="productName">{product?.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">Product Id:</span>
              <span className="productInfoValue">{product?._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Size:</span>
              <span className="productInfoValue">{product?.size}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">In stock:</span>
              <span className="productInfoValue">
                {product?.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input
              type="text"
              placeholder={product?.title}
              defaultValue={product?.title}
              onChange={handleChange}
            />
            <label>Product Description</label>
            <input
              type="text"
              placeholder={product?.desc}
              defaultValue={product?.desc}
              onChange={handleChange}
            />
            <label>Price</label>
            <input
              type="text"
              placeholder={product?.price}
              defaultValue={product?.price}
              onChange={handleChange}
            />
            <label>In Stock</label>
            <select name="inStock" id="idStock" onChange={handleChange}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={inputs?.img} alt="" className="productUploadImg" />
            </div>

            <label>Image Url</label>
            <input
              name="img"
              type="text"
              placeholder="Image url..."
              value={product?.img}
              onChange={handleChange}
            />
            <button
              className="productButton"
              onClick={(e) => {
                e.preventDefault();
                updateProductClick(productId);
              }}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
