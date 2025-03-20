import React, { useEffect, useState } from "react";
import "./menu.css";
import food from '../../assets/pancake.png'

const Menu = () => {
  const menuData = [
    {
      id: 1,
      name: "Pancakes with Maple Syrup",
      description: "Fluffy pancakes served with butter and maple syrup.",
      price: 7.99,
      image: "pancakes.jpg",
      category: "Breakfast",
    },
    {
      id: 2,
      name: "Omelette with Toast",
      description: "Three-egg omelette with cheese, tomatoes, and onions, served with toasted bread.",
      price: 6.99,
      image: "omelette.jpg",
      category: "Breakfast",
    },
    {
      id: 3,
      name: "Avocado Toast",
      description: "Whole grain toast topped with smashed avocado, cherry tomatoes, and feta cheese.",
      price: 8.49,
      image: "avocado_toast.jpg",
      category: "Breakfast",
    },
    {
      id: 4,
      name: "French Fries",
      description: "Crispy golden fries served with ketchup and aioli dip.",
      price: 4.99,
      image: "french_fries.jpg",
      category: "Snacks",
    },
    {
      id: 5,
      name: "Nachos Supreme",
      description: "Corn tortilla chips topped with melted cheese, jalapeños, and guacamole.",
      price: 9.49,
      image: "nachos.jpg",
      category: "Snacks",
    },
    {
      id: 6,
      name: "Garlic Bread",
      description: "Oven-baked garlic bread with melted mozzarella cheese.",
      price: 5.99,
      image: "garlic_bread.jpg",
      category: "Snacks",
    },
    {
      id: 7,
      name: "Grilled Chicken Breast",
      description: "Juicy grilled chicken served with mashed potatoes and steamed vegetables.",
      price: 15.99,
      image: "grilled_chicken.jpg",
      category: "Dinner",
    },
    {
      id: 8,
      name: "Seafood Pasta",
      description: "Pasta with shrimp, mussels, and calamari in a creamy garlic sauce.",
      price: 17.99,
      image: "seafood_pasta.jpg",
      category: "Dinner",
    },
    {
      id: 9,
      name: "Beef Burger",
      description: "Classic beef burger with lettuce, tomato, cheese, and special sauce.",
      price: 12.99,
      image: "beef_burger.jpg",
      category: "Dinner",
    },
    {
      id: 10,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with a molten chocolate center, served with vanilla ice cream.",
      price: 8.99,
      image: "chocolate_lava_cake.jpg",
      category: "Desserts",
    },
    {
      id: 11,
      name: "Tiramisu",
      description: "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.",
      price: 7.99,
      image: "tiramisu.jpg",
      category: "Desserts",
    },
    {
      id: 12,
      name: "Cheesecake",
      description: "Rich and creamy cheesecake with a graham cracker crust, topped with strawberry sauce.",
      price: 6.99,
      image: "cheesecake.jpg",
      category: "Desserts",
    },
    {
      id: 13,
      name: "Fresh Lemonade",
      description: "Homemade lemonade with a touch of mint.",
      price: 4.99,
      image: "lemonade.jpg",
      category: "Beverages",
    },
    {
      id: 14,
      name: "Cappuccino",
      description: "Rich espresso with steamed milk and a frothy top.",
      price: 3.99,
      image: "cappuccino.jpg",
      category: "Beverages",
    },
    {
      id: 15,
      name: "Iced Tea",
      description: "Refreshing iced tea with a hint of citrus.",
      price: 3.49,
      image: "iced_tea.jpg",
      category: "Beverages",
    },
  ];

  const [menu, setMenu] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    setMenu(menuData);
  }, []);

  // Filter menu items based on category
  const filteredMenu = category === "All" ? menu : menu.filter((item) => item.category === category);

  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <p>We consider all the drivers of change gives you the components<br/> you need to create a truly unique experience.</p>
      
      <div className="buttons">
        {["All", "Breakfast", "Snacks", "Dinner", "Desserts", "Beverages"].map((cat) => (
          <button key={cat} className={category === cat ? "active" : ""} onClick={() => setCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>

      <div className="menu-items">
        {filteredMenu.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={food} alt={item.name} />
            <div className="content">
            <span>${item.price.toFixed(2)}</span>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
