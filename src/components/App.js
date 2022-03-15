import AppRouter from "components/Router";
import { useEffect, useState } from "react";
import { authService } from "fBase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : <div>Loading...</div>}
      <footer>&copy; {new Date().getFullYear()} Nwiiter</footer>
    </>
  );
}

export default App;
