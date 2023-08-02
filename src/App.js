const initialItems = [
  {
    id: 1,
    description: "Passports",
    quantity: 2,
    packed: false,
  },
  {
    id: 2,
    description: "Socks",
    quantity: 12,
    packed: false,
  },
  {
    id: 3,
    description: "Charger",
    quantity: 1,
    packed: true,
  },
  {
    id: 4,
    description: "Power Bank",
    quantity: 5,
    packed: false,
  },
  {
    id: 6,
    description: "HandFree",
    quantity: 10,
    packed: false,
  },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackgingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>what do you need for your 😍 trip?</h3>
    </div>
  );
}
function PackgingList() {
  return (
    <div className="list">
      <ul className="list">
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {""}
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
