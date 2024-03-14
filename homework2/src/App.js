import List from "./componets/List/List";
import ListClass from "./componets/ListClass/ListClass";
function App() {
  const cities = ["Kharkiv", "Mykolaiv", "Lviv", "Poltava"].sort() ;
  return (
    <>
      <List props={cities} />
      <ListClass list={cities} color = "lightpink" city = 'Kiev' />
    </>
  );
}

export default App;
