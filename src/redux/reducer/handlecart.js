const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADD_ITEM":
      // check if product is already exit
      const exit = state.find((x) => x.id === product.id);
      if (exit) {
        // increase the qty
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;

    case "DEL_ITEM":
      const exit1 = state.find((x) => x.id === product.id);
      if (exit1.qty === 1) {
        return state.filter((x) => x.id !== exit1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;
    default:
      return state;
      break;
  }
};

export default handleCart;
