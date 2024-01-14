import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";

import LIstRating from "./LIstRating";
import { products } from "@/app/utils/products";
import getProductById from "@/actions/getProductById";
import AddRating from "./AddRating";
import NullData from "@/app/components/NullData";
import getCurrentUser from "@/actions/getCurrentUser";

interface IParams {
  productId?: string;
}

const Product = async ({ params }: { params: IParams }) => {
  const product = await getProductById(params);
  const user = await getCurrentUser();
  if (!product) return <NullData title="Το προιον αυτο δεν υπαρχει..." />;

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <div>
            <AddRating product={product} user={user} />
          </div>
          <LIstRating product={product} />
        </div>
      </Container>
    </div>
  );
};
export default Product;
