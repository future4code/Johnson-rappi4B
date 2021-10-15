import React, { useState, useEffect } from "react";
import { RestaurantDetailsPageContainer } from "./styled";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "./../../constants/urls";
import { useParams } from "react-router";

const RestaurantDetailsPage = () => {
  const [data, setdata] = useState();
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = (id) => {
    axios
      .get(`${BASE_URL}/restaurants/${params.id}`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data.restaurant);
        setdata(res.data.restaurant);
      })
      .catch((e) => {
        alert(e.response.data.message);
      });
  };

  return (
    <RestaurantDetailsPageContainer>
      {data && data.name} <br />
      {data && data.logoUrl} <br />
      {data && data.address} <br />
      {data && data.category} <br />
      {data && data.description} <br />
      {data && data.shipping} <br />
      {data && data.deliveryTime} <br />
      {data &&
        data.products.map((i) => {
          return (
            <div key={i.id}>
              {i.name} <br />
              {i.description} <br />
              {i.price} <br />
              {i.photoUrl} <br />
            </div>
          );
        })}
    </RestaurantDetailsPageContainer>
  );
};

export default RestaurantDetailsPage;
