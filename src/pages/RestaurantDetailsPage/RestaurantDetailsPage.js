import React, { useState, useEffect } from "react";
import {
  RestaurantDetailsPageContainer,
  RestaurantContainer,
  CardRestaurant,
  RestaurantImage,
  ProductCard,
  ProductImage,
  ProductInfo,
  ListProducts,
  ButtonsContainer,
} from "./styled";
import axios from "axios";
import { BASE_URL } from "./../../constants/urls";
import { useParams } from "react-router";
import { FooterCard } from "../../components/FooterCard/FooterCard";
import { CgAdd, CgRemove } from "react-icons/cg";
import { TextField } from "@material-ui/core";

const RestaurantDetailsPage = () => {
  const [data, setData] = useState();
  const [count, setCount] = useState(0);
  const [dataProducts, setDataProducts] = useState();
  const params = useParams();

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = () => {
    axios
      .get(`${BASE_URL}/restaurants/${params.id}`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData(res.data.restaurant);
        setDataProducts(res.data.restaurant.products);
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  const addValue = (id, index) => {
    setCount(count + 1);
    const newData = [{ ...dataProducts[index - 1], quantity: count }];
    if (id === dataProducts[index].id) {
      setDataProducts(newData);
    }
  };

  const removeValue = (id, index) => {
    const newData = [{ ...dataProducts[index], quantity: count }];
    setCount(count - 1)
    if (id) {
      setDataProducts(newData);
    }
  };
  return (
    <>
      <RestaurantDetailsPageContainer>
        <RestaurantContainer>
          <h4>Restaurante</h4>
        </RestaurantContainer>

        <CardRestaurant>
          <RestaurantImage src={data && data.logoUrl} alt="foto da loja" />
          <span className="restaurant_name">{data && data.name}</span>
          <span className="restaurant_category">{data && data.category}</span>
          <div>
            <span>{data && data.deliveryTime}-Min</span>
            <span>
              Frete R$ {data && data.shipping.toFixed(2).replace(".", ",")}
            </span>
          </div>
          <span className="restaurant_address">{data && data.address}</span>
        </CardRestaurant>
        {dataProducts &&
          dataProducts.map((i, index) => {
            return (
              <ListProducts key={i.id}>
                <ProductCard>
                  <ProductImage src={i.photoUrl} alt="foto do produto" />
                  <ProductInfo>
                    <span className="product_name">{i.name}</span>
                    <span className="product_description">{i.description}</span>
                    <div className="teste">
                      <span className="product_price">
                        R$ {i.price.toFixed(2).replace(".", ",")}
                      </span>
                      <ButtonsContainer>
                        <span>
                          <CgRemove
                            onClick={() => removeValue(i.id, index)}
                            size="20px"
                            color="red"
                          />
                        </span>
                        <TextField id={i.id} value={i.quantity || 0} />
                        <span>
                          <CgAdd
                            onClick={() => addValue(i.id, index)}
                            size="20px"
                            color="red"
                          />
                        </span>
                      </ButtonsContainer>
                    </div>
                  </ProductInfo>
                </ProductCard>
              </ListProducts>
            );
          })}
      </RestaurantDetailsPageContainer>
      <FooterCard />
    </>
  );
};

export default RestaurantDetailsPage;
