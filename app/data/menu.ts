
export type MenuItem = { name: string; desc?: string; price: string; veg?: boolean };
export type MenuCategory = { id: string; title: string; img: string; items: MenuItem[] };

export const MENU: MenuCategory[] = [
  {
    id: "dosa",
    title: "Dosa",
    img: "/images/menu/dosa.svg",
    items: [
      { name: "Plain Dosa", price: "$7.99", veg: true },
      { name: "Masala Dosa", desc: "Potato masala, chutneys & sambar", price: "$9.99", veg: true },
      { name: "Ghee Roast Dosa", price: "$10.99", veg: true },
      { name: "Onion Rava Dosa", price: "$11.49", veg: true },
      { name: "Podi Dosa", desc: "Gunpowder spice & ghee", price: "$10.49", veg: true }
    ]
  },
  {
    id: "biryani",
    title: "Biryani & Rice",
    img: "/images/menu/biryani.svg",
    items: [
      { name: "Veg Biryani", price: "$12.99", veg: true },
      { name: "Egg Biryani", price: "$13.99" },
      { name: "Chicken Biryani", price: "$14.99" },
      { name: "Mutton Biryani", price: "$17.99" },
      { name: "Curd Rice / Lemon Rice", price: "$8.99", veg: true }
    ]
  },
  {
    id: "tiffin",
    title: "Tiffin Meals",
    img: "/images/menu/tiffin.svg",
    items: [
      { name: "Idli (2 pcs)", price: "$5.99", veg: true },
      { name: "Medu Vada (2 pcs)", price: "$6.49", veg: true },
      { name: "Pongal", price: "$8.49", veg: true },
      { name: "Poori Masala (2 pcs)", price: "$9.99", veg: true },
      { name: "Mini Tiffin", desc: "Idli, vada, mini dosa, sweet", price: "$12.99", veg: true }
    ]
  },
  {
    id: "curries",
    title: "Curries",
    img: "/images/menu/curries.svg",
    items: [
      { name: "Chicken Chettinad", price: "$15.99" },
      { name: "Butter Chicken", price: "$15.99" },
      { name: "Veg Kurma", price: "$13.99", veg: true },
      { name: "Paneer Butter Masala", price: "$14.99", veg: true }
    ]
  },
  {
    id: "breads",
    title: "Breads & Parotta",
    img: "/images/menu/parotta.svg",
    items: [
      { name: "Parotta (2 pcs)", price: "$6.49" },
      { name: "Chapathi (2 pcs)", price: "$5.99", veg: true },
      { name: "Butter Naan", price: "$3.99", veg: true }
    ]
  },
  {
    id: "seafood",
    title: "Seafood",
    img: "/images/menu/seafood.svg",
    items: [
      { name: "Fish Fry", price: "$16.99" },
      { name: "Fish Curry", price: "$15.99" },
      { name: "Chilli Prawn", price: "$17.99" }
    ]
  },
  {
    id: "sweets",
    title: "Sweets & Snacks",
    img: "/images/menu/sweets.svg",
    items: [
      { name: "Kesari", price: "$4.99", veg: true },
      { name: "Gulab Jamun (2 pcs)", price: "$4.99", veg: true },
      { name: "Tirunelveli Halwa", price: "$5.99", veg: true },
      { name: "Samosa (2 pcs)", price: "$4.49", veg: true },
      { name: "Bajji (4 pcs)", price: "$6.99", veg: true }
    ]
  }
];
