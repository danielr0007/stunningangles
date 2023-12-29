import React from "react";
import { Link } from "gatsby";
import { useDispatch } from "react-redux";
import { selectOption } from "../utils/packageOptionsSlice";

function PackageCard(props) {
  const dispatch = useDispatch();

  const name = props.data.name;
  const subHead = props.data.subHeadline;
  const price = props.data.price;
  const features = props.data.features;
  // console.log(name);

  return (
    <div className="package-card-shell">
      <h3>{name}</h3>
      <p>{subHead}</p>

      <p className="price">{price}</p>

      <div>
        <ul>
          {features.map((feature, i) => {
            return <li key={i}>{feature}</li>;
          })}
        </ul>
      </div>

      <Link
        to="/#form"
        onClick={() => {
          dispatch(selectOption(name));
        }}
      >
        Order Package
      </Link>
    </div>
  );
}

export default PackageCard;
