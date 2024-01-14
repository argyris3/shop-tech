import Container from "@/app/components/Container";

import { products } from "@/app/utils/products";
import getOrderById from "@/actions/getOrderById";
import OrderDetails from "./OrderDetails";
import NullData from "@/app/components/NullData";

interface IParams {
  orderId?: string;
}

const Order = async ({ params }: { params: IParams }) => {
  const order = await getOrderById(params);
  if (!order) return <NullData title="No Order" />;

  return (
    <div className="p-8">
      <Container>
        <OrderDetails order={order} />
        <div className="flex flex-col mt-20 gap-4"></div>
      </Container>
    </div>
  );
};
export default Order;
