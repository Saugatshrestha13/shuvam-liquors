import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) { }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    if (products.length) {
      if (filters?.size && filters?.size !== 'All') {
        console.log(filters)
        setFilteredProducts(products.filter((item) => {
          const nSize = item.size?.find(si => si === filters?.size)
          if (nSize) return item
        }))
      } else {
        setFilteredProducts([...products])
      }
    }
  }, [filters, products])

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {filteredProducts.length > 0 ? filteredProducts.map((item) => <Product item={item} key={item.id} />) : <div style={{ width: "100%", height: "50px", textAlign: 'center' }}>No Products Available</div>}
    </Container>
  );
};

export default Products;
