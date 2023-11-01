import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import Card from "../Card/Card";
import "./ListProduct.css";

const ListProducts = () => {
    const { products } = useContext(ProductsContext);
    return (
        <div className="list_product_container">
            {products.map((product) => {
                return <Card product={product} key={product.id} />;
            })}
        </div>
    );
};
export default ListProducts;
