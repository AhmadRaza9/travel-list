import { useState } from "react";

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
  {
    id: 7,
    description: "Bottles",
    quantity: 12,
    packed: true,
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
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) alert("Please enter a description");

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}

function PackgingList() {
  return (
    <div className="list">
      <ul className="list">
        {initialItems.map((item) => (
          <Item key={item.id} item={item} />
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
