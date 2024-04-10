import Button from "./components/Button";
import ProfileCard from "./components/ProfileCard";
import QrCard from "./components/QrCard";
import Filters from "./components/Filters";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <div className="container mx-auto mt-12 px-4 lg:px-0">
      <div className="lg:flex">
        <div className="w-full lg:w-1/3 lg:pr-6">
          <ProfileCard />
          <QrCard />
        </div>
        <div className="w-full lg:w-2/3 bg-white p-4 mt-6 lg:mt-0 lg:p-6 rounded-[21px]">
          <div className="flex items-center justify-between">
            <Filters />
            <div className="hidden lg:block">
              <Button classes="py-2.5 px-3" showIcon={true}>
                Add Review
              </Button>
            </div>
          </div>
          <h1 className="text-gray1 text-2xl font-bold mt-6 mb-2 lg:mb-3 lg:text-3xl flex items-center gap-x-2">
            Products <span className="text-[#828282] text-sm">( 12 )</span>
          </h1>
          <ProductList />
        </div>
      </div>
      <Button
        classes="py-2.5 px-3 fixed top-1/2 right-5 -translate-y-1/2 lg:hidden"
        showIcon={true}
      >
        Add Review
      </Button>
    </div>
  );
}
