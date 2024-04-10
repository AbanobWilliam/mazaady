import { product } from "../ts/product";
import ProductContent from "./ProductContent";

const products: product[] = [
  {
    id: 1,
    name: "Six-piece clothing set (blouse - pants - hat and shoes)",
    price: "1000 EGP",
    startsIn: ["2", "10", "50"],
    image: "/products/1.png",
    badge: "Live auction",
  },
  {
    id: 2,
    name: "Jeep Car, new, used for only one time",
    price: "1000 EGP",
    startsIn: ["2", "10", "50"],
    image: "/products/2.png",
    badge: "Live auction",
  },
  {
    id: 3,
    name: "Smartphone with high-resolution display",
    price: "1500 EGP",
    startsIn: ["5", "15", "30"],
    image: "/products/3.png",
    badge: "hot sale",
  },
  {
    id: 4,
    name: "Wireless Bluetooth Earbuds",
    price: "300 EGP",
    startsIn: ["3", "8", "20"],
    image: "/products/1.png",
    badge: "Live auction",
  },
  {
    id: 5,
    name: "Designer Men's Watch",
    price: "800 EGP",
    startsIn: ["2", "5", "10"],
    image: "/products/2.png",
    badge: "Live auction",
  },
  {
    id: 6,
    name: "Portable External Hard Drive (1TB)",
    price: "600 EGP",
    startsIn: ["4", "12", "24"],
    image: "/products/3.png",
    badge: "hot sale",
  },
  {
    id: 7,
    name: "Professional DSLR Camera",
    price: "5000 EGP",
    startsIn: ["7", "14", "30"],
    image: "/products/1.png",
    badge: "hot sale",
  },
  {
    id: 8,
    name: "Gaming Laptop with high-performance specs",
    price: "7000 EGP",
    startsIn: ["10", "20", "40"],
    image: "/products/2.png",
    badge: "Live auction",
  },
  {
    id: 9,
    name: "Designer Handbag",
    price: "1200 EGP",
    startsIn: ["3", "8", "15"],
    image: "/products/3.png",
    badge: "Live auction",
  },
  {
    id: 10,
    name: "Fitness Tracker Watch",
    price: "250 EGP",
    startsIn: ["2", "5", "10"],
    image: "/products/1.png",
    badge: "Live auction",
  },
];
function ProductList() {
  return products.map((product: product) => {
    return <ProductContent data={product} key={product.id} />;
  });
}

export default ProductList;
