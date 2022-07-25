import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { addCart } from "./../redux/action/index";
const Products = () => {
  const { id } = useParams;
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  // useeffect start

  // useeffect end

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src="https://d2rbyiw1vv51io.cloudfront.net/web/ikea4/images/100/0810062_PE771235_S5.jpg"
            className="card-img-top my-5"
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.title}</h4>
          <h1 className="display-5">titles</h1>
          <p className="lead">
            Rating {product.rating} && product.rating.rate{" "}
            <i class="fa-solid fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4 ">
            <i class="fa-solid fa-rupee-sign"></i> price
          </h3>
          <p className="lead">description</p>
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={() => addProduct(product)}
          >
            <i class="fa-solid fa-cart-plus"></i> Add To Cart
          </button>
          <Link to="/cart" className="btn btn-dark ms-2 px-3 py-2">
            Go To Cart
          </Link>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-4">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Products;
