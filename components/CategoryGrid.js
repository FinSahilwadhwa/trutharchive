const categories = [
  "People",
  "Ideologies",
  "Law & Tax",
  "History",
  "Case Studies",
  "Timelines",
  "Explainers",
  "Documents"
];

export default function CategoryGrid() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px"
      }}
    >
      {categories.map((cat) => (
        <div
          key={cat}
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            textAlign: "center",
            background: "#fff",
            fontWeight: "bold"
          }}
        >
          {cat}
        </div>
      ))}
    </div>
  );
}
