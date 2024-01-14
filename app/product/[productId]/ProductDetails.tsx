"use client";

import Button from "@/app/components/Button";
import ProductImage from "@/app/components/ProductImage";
import SetColor from "@/app/components/SetColor";
import SetQuantity from "@/app/components/SetQuantity";
import { useCart } from "@/app/hooks/useCart";
import { Rating } from "@mui/material";
import { MdCheckCircle } from "react-icons/md";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface ProductDetailsProps {
  product: any;
}

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  selectedImg: selectedImgType;
  quantity: number;
  price: number;
};

export type selectedImgType = {
  color: string;
  colorMode: string;
  image: string;
};

const Horizontal = () => {
  return <hr className="w-[30%] my-2]" />;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { handleAddProductToCart, cartProducts } = useCart();
  const [isProductInCart, setIsProductInCart] = useState(false);
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
    quantity: 1,
    price: product.price,
  });

  const router = useRouter();
  console.log(cartProducts);
  useEffect(() => {
    setIsProductInCart(false);

    if (cartProducts) {
      const existingIndex = cartProducts.findIndex(
        (item) => item.id === product.id
      );
      if (existingIndex > -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProducts]);

  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  const handleColorSelect = useCallback(
    (value: selectedImgType) => {
      setCartProduct((prev) => {
        return { ...prev, selectedImg: value };
      });
    },
    [cartProduct.selectedImg]
  );

  const handleQtyIncrease = useCallback(() => {
    setCartProduct((prev) => {
      return { ...prev, quantity: cartProduct.quantity + 1 };
    });
  }, [cartProduct]);
  const handleQtyDecrease = useCallback(() => {
    if (cartProduct.quantity === 1) {
      return;
    }
    setCartProduct((prev) => {
      return { ...prev, quantity: cartProduct.quantity - 1 };
    });
  }, [cartProduct]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
      <ProductImage
        cartProduct={cartProduct}
        product={product}
        handleColorSelect={handleColorSelect}
      />
      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
        <div className="flex items-center gap-2">
          <div>
            <Rating value={productRating} readOnly />
            {product.reviews.length} reviews
          </div>
        </div>
        <Horizontal />
        <div className="text-justify ">{product.description}</div>
        <Horizontal />
        <div className="flex items-center gap-1">
          <span className="font-semibold">Κατηγορια:</span>
          <span className="text-red-500">{product.category}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="font-semibold  ">Μαρκα:</span>
          <span className="text-red-500">{product.brand}</span>
        </div>
        <div className={product.inStock ? "text-teal-400" : "text-red-400"}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </div>
        <Horizontal />
        {isProductInCart ? (
          <>
            <p className="mb-2 text-slate-500 flex items-center gap-1">
              <MdCheckCircle className="text-teal-400" size={20} />
              <span>Προσtεθηκε στο Καλαθι</span>
            </p>
            <div className="max-w-[300px]">
              <Button
                label="Στο Καλαθι"
                outline
                onClick={() => router.push("/cart")}
              />
            </div>
          </>
        ) : (
          <>
            <SetColor
              cartProduct={cartProduct}
              images={product.images}
              handleColorSelect={handleColorSelect}
            />

            <Horizontal />
            <SetQuantity
              cartProduct={cartProduct}
              handleQtyIncrease={handleQtyIncrease}
              handleQtyDecrease={handleQtyDecrease}
            />

            <Horizontal />
            <div className="mt-1 max-w-[300px]">
              <Button
                label="Προσθηκη στο Καλαθι"
                onClick={() => handleAddProductToCart(cartProduct)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default ProductDetails;
