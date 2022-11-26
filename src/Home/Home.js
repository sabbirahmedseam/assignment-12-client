import Banner from "./Banner";
import Categories from "./Categories";
import ExtraBannerPart from "./ExtraBannerPart";
import { useQuery } from "@tanstack/react-query";
import AdvertiseItems from "./AdvertiseItems";

const Home = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["advertise"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/getadvertise`);
      const data = await res.json();
      return data;
    },
  });

  console.log(products);

  return (
    <div>
      <Banner></Banner>
      <ExtraBannerPart></ExtraBannerPart>
      <div>
        <h2 className="text-3xl text-green-500 text-center font-bold">
          Choose Your Product From Advertise Section
        </h2>
        <div className="grid grid-cols-3 gap-3 m-5">
          {products.length
            ? products.map((product) => (
                <AdvertiseItems product={product}></AdvertiseItems>
              ))
            : ""}
        </div>
      </div>
     
      <Categories></Categories>
    </div>
  );
};

export default Home;
