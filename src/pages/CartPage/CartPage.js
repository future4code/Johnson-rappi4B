import React, { useContext } from "react";
import { CartPageContainer } from "./styled";
import GlobalContextFood from "../../global/GlobalContextFood";

const CartPage = () => {
  const { cart, addValue } = useContext(GlobalContextFood);














// idéia de cart


//   const cartList =
//   cart.length === 0 ? (
//     <h2>"Carrinho vazio"</h2>
//   ) : (
//     cart.map((item) => {
//       return (
//         <ProductItem
//           name={item.name}
//           image={item.photos[0]}
//           price={item.price}
//           amount={item.amount}
//           onClickRemove={() => removeItem(item)}
//         />
//       );
//     })
//   );

// const onClickUpdateProducts = () => {
//   getProducts();
// };


  return (
    <CartPageContainer>
      <h1>CartPage</h1>
      {cart &&
        cart.map((item) => {
          return (
            <>
              <p>{item.name}</p>
              <br />
              <p>{item.quantity}</p>
              <p>{item.description}</p>
            </>
          );
        })}
    </CartPageContainer>
  );
};

export default CartPage;
