import { useState } from "react";
import Menus from "./components/Menus";
import Title from "./components/Title";
import menu from "./data";
import Categories from "./components/Categories";

// const templateCategories = menu.map((category) => category.category);
// const tempSet = new Set(templateCategories);
// const allCategories = ["all", ...tempSet];
const allCategories = ["all", ...new Set(menu.map((cate) => cate.category))];
const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menus items={menuItems} />
      </section>
    </main>
  );
};
export default App;
