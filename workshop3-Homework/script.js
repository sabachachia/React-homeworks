import React from "react";
import "./style.css";

export default function App() {
  const items = [
    {
      title: "Lorem, ipsum dolor",
      stock: "In Stock",
      rating: "1.5/5",
      badges: ["badge-1", "badge-2"],
      texts: ["sport", "lifestyle"],
    },
    {
      title: "Lorem, ipsum dolor",
      stock: "Out Stock",
      rating: "3.4/5",
      badges: ["badge-1", "badge-2"],
      texts: ["Casual", "lifestyle"],
    },
    {
      title: "Lorem, ipsum dolor",
      stock: "Out Stock",
      rating: "0.5/5",
      badges: ["badge-1", "badge-2"],
      texts: ["sport", "lifestyle"],
    },
    {
      title: "Lorem, ipsum dolor",
      stock: "In Stock",
      rating: "1/5",
      badges: ["badge-1", "badge-2"],
      texts: ["Casual", "lifestyle"],
    },
    {
      title: "Lorem, ipsum dolor",
      stock: "In Stock",
      rating: "2.5/5",
      badges: ["badge-1", "badge-2"],
      texts: ["Casual", "lifestyle"],
    },
    {
      title: "Lorem, ipsum dolor",
      stock: "Out Stock",
      rating: "4.9/5",
      badges: ["badge-1", "badge-2"],
      texts: ["sport", "lifestyle"],
    },
  ];

  return (
    <div>
      <main className="container">
        {items.map((item, index) => (
          <div className="shopping-item" key={index}>
            <h3>{item.title}</h3>
            <img
              src="https://source.unsplash.com/random/200x300"
              alt="image"
            />
            <div className="description">
              <span>{item.stock}</span>
              <span>{item.rating}</span>
            </div>
            <div className="badges">
              {item.badges.map((badge, i) => (
                <span key={i} className={badge}>
                  {item.texts[i]}
                </span>
              ))}
            </div>
            <button>Add To Cart</button>
          </div>
        ))}
      </main>

      <section className="container">
        <div className="block-listing">
          <span className="badge-1">Random 1</span>
          <span className="badge-2">Random 2</span>
          <span className="badge-3">Random 3</span>
          <span className="badge-4">Random 4</span>
        </div>
        <div className="banner"></div>
      </section>
    </div>
  );
}
