export default function SearchBox() {
  return (
    <div style={{ textAlign: "center", margin: "40px 0" }}>
      <input
        type="text"
        placeholder="Search people, ideologies, laws, tax concepts..."
        style={{
          width: "70%",
          padding: "14px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px"
        }}
      />
    </div>
  );
}
