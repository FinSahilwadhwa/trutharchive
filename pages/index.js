import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import CategoryGrid from "../components/CategoryGrid";

export default function Home() {
  return (
    <div style={{ maxWidth: "1100px", margin: "auto", padding: "40px" }}>
      <Header />
      <SearchBox />
      <CategoryGrid />
    </div>
  );
}
