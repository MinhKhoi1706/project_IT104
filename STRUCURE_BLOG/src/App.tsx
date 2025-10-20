import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header/Header";
import AddPost from "./pages/Post/AddPost"; // Keeping this line for reference
import PostList from "./pages/Post/PostList";

function App() {
  return (
    <div>
      {/* <Header /> */}
      {/* <AppRoutes /> */}
      {/* <AddPost /> */}
      <PostList />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
