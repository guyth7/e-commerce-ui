import ProductList from "@/components/ProductList";
import Image from "next/image";

const Homepage = () => {
  return (
    <section className="">
      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="Featured Product" fill />
      </div>
      <ProductList />
    </section>
  );
};

export default Homepage;
