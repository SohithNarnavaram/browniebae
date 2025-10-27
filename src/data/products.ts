import { Product } from "@/types/product";
import classicBrownie from "@/assets/classic-brownie.jpg";
import walnutBrownie from "@/assets/walnut-brownie.jpg";
import tripleChocolateBrownie from "@/assets/triple-chocolate-brownie.jpg";
import brownieBox from "@/assets/brownie-box.jpg";

export const products: Product[] = [
  // Individual Brownies
  {
    id: "classic",
    name: "Classic Brownie",
    price: 79,
    image: classicBrownie,
    category: "brownie",
    description: "Our signature fudgy chocolate brownie",
  },
  {
    id: "walnut",
    name: "Walnut Brownie",
    price: 89,
    image: walnutBrownie,
    category: "brownie",
    description: "Rich chocolate with crunchy walnuts",
  },
  {
    id: "hazelnut",
    name: "Hazelnut Brownie",
    price: 89,
    image: walnutBrownie,
    category: "brownie",
    description: "Smooth hazelnut and chocolate blend",
  },
  {
    id: "dry-fruit",
    name: "Dry Fruit Brownie",
    price: 99,
    image: walnutBrownie,
    category: "brownie",
    description: "Loaded with premium dry fruits",
  },
  {
    id: "nutella",
    name: "Nutella Brownie",
    price: 99,
    image: tripleChocolateBrownie,
    category: "brownie",
    description: "Decadent Nutella swirl brownie",
  },
  {
    id: "triple-chocolate",
    name: "Triple Chocolate Brownie",
    price: 99,
    image: tripleChocolateBrownie,
    category: "brownie",
    description: "Three layers of chocolate heaven",
  },
  {
    id: "lotus-biscoff",
    name: "Lotus Biscoff Brownie",
    price: 99,
    image: tripleChocolateBrownie,
    category: "brownie",
    description: "Crunchy Biscoff and chocolate",
  },
  {
    id: "belgian-stuffed",
    name: "Belgian Chocolate Stuffed Brownie",
    price: 115,
    image: tripleChocolateBrownie,
    category: "brownie",
    description: "Stuffed with premium Belgian chocolate",
  },

  // Boxes
  {
    id: "classic-box-4",
    name: "Classic Box of 4",
    price: 300,
    image: brownieBox,
    category: "box",
    description: "4 classic brownies in elegant packaging",
  },
  {
    id: "classic-box-6",
    name: "Classic Box of 6",
    price: 430,
    image: brownieBox,
    category: "box",
    description: "6 classic brownies in elegant packaging",
  },
  {
    id: "walnut-hazelnut-box-4",
    name: "Walnut or Hazelnut Box of 4",
    price: 330,
    image: brownieBox,
    category: "box",
    description: "4 premium nut brownies",
  },
  {
    id: "walnut-hazelnut-box-6",
    name: "Walnut or Hazelnut Box of 6",
    price: 480,
    image: brownieBox,
    category: "box",
    description: "6 premium nut brownies",
  },
  {
    id: "assorted-box-4",
    name: "Assorted Box of 4",
    price: 370,
    image: brownieBox,
    category: "box",
    description: "4 different varieties to try",
  },
  {
    id: "assorted-box-6",
    name: "Assorted Box of 6",
    price: 520,
    image: brownieBox,
    category: "box",
    description: "6 different varieties to try",
  },
  {
    id: "belgian-box-4",
    name: "Belgian Chocolate Stuffed Box of 4",
    price: 399,
    image: brownieBox,
    category: "box",
    description: "4 Belgian chocolate stuffed brownies",
  },
  {
    id: "belgian-box-6",
    name: "Belgian Chocolate Stuffed Box of 6",
    price: 579,
    image: brownieBox,
    category: "box",
    description: "6 Belgian chocolate stuffed brownies",
  },

  // Tubs
  {
    id: "mini-tub",
    name: "Mini Brownie Tub",
    price: 250,
    image: brownieBox,
    category: "tub",
    description: "Bite-sized brownie pieces in a tub",
  },
  {
    id: "belgian-tub",
    name: "Belgian Choco Overload Tub",
    price: 310,
    image: brownieBox,
    category: "tub",
    description: "Belgian chocolate brownie bites",
  },
];
