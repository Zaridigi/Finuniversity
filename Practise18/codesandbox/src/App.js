import "./styles.css";

function Avatar({ person }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={person.url} className="card-img-top" alt="person.name" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card’s content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Avatar
        person={{
          name: "Katsuko Saruhashi",
          url: "https://brightmagazine.ru/wp-content/uploads/2025/11/happy-girl-holding-umbrella-600x400.jpg",
        }}
      />
      <Avatar
        person={{
          name: "Katsuko Saruhashi",
          url: "https://brightmagazine.ru/wp-content/uploads/2025/11/photo-positive-european-female-model-makes-okay-gesture-agrees-with-nice-idea-768x512.jpg",
        }}
      />
    </div>
  );
}
