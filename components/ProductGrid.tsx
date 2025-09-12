"use client";
import { useEffect, useState } from "react";
import HomeTabBar from "./HomeTabBar";
import Container from "./Container";
import { productType } from "@/constants/data";
import { client } from "@/sanity/lib/client";
import NoProductAvailable from "./NoProductAvailable";
import { motion, AnimatePresence } from "motion/react";
import { Loader2 } from "lucide-react";
import ProductCard from "./ProductCard";
import { Product } from "@/sanity.types";
const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(productType[0].title || "");
  const query = `*[_type == "product" && variant == $variant] | order(name asc){
  ...,"categories": categories[]->title
}`;
  const params = { variant: selectedTab.toLowerCase() };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await client.fetch(query, params);
        setProducts(await res);
      } catch (error) {
        console.log("Product fetching error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedTab]);
  return (
    <Container className="flex flex-col lg:px-0 my-10">
      <HomeTabBar
        selectedTab={selectedTab}
        onTabSelect={setSelectedTab}
      ></HomeTabBar>
      {loading ? (
        <div className="flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full mt-10">
          <motion.div className="flex items-center space-x-2 text-gray-700">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Đang chờ sản phẩm...</span>
          </motion.div>
        </div>
      ) : products?.length ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10">
          <>
            {products?.map((product) => (
              <AnimatePresence key={product?._id}>
                <motion.div
                  layout
                  initial={{ opacity: 0.2 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <ProductCard key={product?._id} product={product} />
                </motion.div>
              </AnimatePresence>
            ))}
          </>
        </div>
      ) : (
        <div>
          <NoProductAvailable selectedTab={selectedTab}></NoProductAvailable>
        </div>
      )}
    </Container>
  );
};

export default ProductGrid;
