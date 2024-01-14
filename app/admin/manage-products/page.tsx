import getProducts from "@/actions/getProducts";
import ManageProductsClient from "./ManageProductsClient";
import Container from "@/app/components/Container";
import getCurrentUser from "@/actions/getCurrentUser";
import NullData from "@/app/components/NullData";
import { products } from "@/app/utils/products";

const ManageProducts = async () => {
  const products = await getProducts({});
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Oops!Δεν εχετε προσβαση" />;
  }
  return (
    <div className="pt-8">
      <Container>
        <ManageProductsClient products={products} />
      </Container>
    </div>
  );
};

export default ManageProducts;
