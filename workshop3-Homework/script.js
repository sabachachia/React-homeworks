const root = document.getElementById("root");

const items = [
  {
    title: "Lorem, ipsum dolor",
    stock: "In Stock",
    points: "Points 1.5/5",
    badge1: "sport",
    badge2: "lifestyle",
  },
  {
    title: "Lorem, ipsum dolor",
    stock: "Out Stock",
    points: "3.4/5",
    badge1: "Casual",
    badge2: "lifestyle",
  },
  {
    title: "Lorem, ipsum dolor",
    stock: "Out Stock",
    points: "0.5/5",
    badge1: "sport",
    badge2: "lifestyle",
  },
  {
    title: "Lorem, ipsum dolor",
    stock: "In Stock",
    points: "1/5",
    badge1: "Casual",
    badge2: "lifestyle",
  },
  {
    title: "Lorem, ipsum dolor",
    stock: "In Stock",
    points: "2.5/5",
    badge1: "Casual",
    badge2: "lifestyle",
  },
  {
    title: "Lorem, ipsum dolor",
    stock: "Out Stock",
    points: "4.9/5",
    badge1: "sport",
    badge2: "lifestyle",
  },
];

function Card({props}){
    return (
        <div className="shopping-item">
            <h3>
                {props.title}
            </h3>
            <img src="https://www.shutterstock.com/shutterstock/photos/2286554497/display_1500/stock-photo-random-pictures-cute-and-funny-2286554497.jpg" alt="image"/>
            <div className="description">
                <span>
                    {props.stock}
                </span>
                <span>
                    {props.points}
                </span>
            </div>
            <div className="badges">
                <span className="badge-1">
                    {props.badge1}
                </span>
                <span className="badge-2">{props.badge2}</span>
                </div>    
                     <button>Add To Cart</button>   
        </div>
    )
}

function App(){
    return (
        <main className="container">
            {items.map((item)=>(
                <Card props={item}/>
            ))}
        </main>    
        )
}

ReactDOM.render(<App/> , root)
