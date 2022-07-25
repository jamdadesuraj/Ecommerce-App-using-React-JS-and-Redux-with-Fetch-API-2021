import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMount = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      if (componentMount) {
        setData(await res.clone().json());
        setFilter(await res.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMount = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            jewelries
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>
        {filter.map((product) => {
          return (
            <div className="col-md-3 mb-5" key={product.id}>
              <div class="card h-100 text-center p-4 ">
                <div className="d-flex justify-content-center align-item-center">
                  <img
                    src={product.image}
                    class="card-img-top"
                    alt={product.title}
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>

                <div class="card-body">
                  <h5 class="card-title mb-0">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p class="card-text lead fw-bold">
                    {" "}
                    <i class="fa-solid fa-rupee-sign "></i> {product.price}
                  </p>
                  <Link to={`${product.id}`} className="btn btn-outline-dark">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center ">
              Latest Products
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
