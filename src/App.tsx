import TopAddedBooks from "./components/Home/TopAddedBooks";
import { signIn } from "./redux/features/users/userSlice";
import { useAppDispatch } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();

  const storedUserData = sessionStorage.getItem("user");
  if (storedUserData !== null) {

    const userData = JSON.parse(storedUserData);
    console.log("parseUserData",userData);

    dispatch(signIn(userData));

  } 
  return (
    <>
      <TopAddedBooks />
    </>
  );
}

export default App;
