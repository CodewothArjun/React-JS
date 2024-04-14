import Todoitems from "./Todoitems";

function ItemsContainer({ items,onclickDeleteBtn }) {
  return (
    <div className="container">
      {items.map((item) => (
        <Todoitems value={item.name} key={item.name} date={item.dueDate} onclickDeleteBtn={onclickDeleteBtn}/>
      ))}
    </div>
  );
}

export default ItemsContainer;
