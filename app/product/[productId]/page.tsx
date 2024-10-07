import Container from "@/app/components/Container";
import ProductDetails from "./productDetails";
import ListRating from "./ListRating";
import { products } from "@/utils/products";
interface Iparams {
  productId?: string;
}

const Product = ({ params }: { params: Iparams }) => {
  console.log("params", params);
  const product = products.find((item) => item.id === params.productId);
  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product}></ProductDetails>
        <div className="flex flex-col mt-20 gap-4">
          <div>Add Rating</div>
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
