import Menu from "./Menu";

const Menus = ({ items }) => {
  return (
    <div className="section-center">
      {items?.map((item) => {
        return <Menu key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Menus;
