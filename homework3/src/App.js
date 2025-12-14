import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import UsersCards from "./components/Card";
import users from "./constants/info.js";

function App() {
  const [isSubmited, setIsSubmited] = useState(false);
  const [visibleCnt, setVisibleCnt] = useState(5);
  console.log("App isSubmited:", isSubmited);

  return (
    <>
      <Input onSubmit={() => setIsSubmited(true)} />

      <main
        className="users-container"
        style={{ display: isSubmited ? "grid" : "none" }}
      >
        {users.slice(0, visibleCnt).map((user) => (
          <UsersCards user={user} key={user.login.uuid} />
        ))}
      </main>


      {isSubmited && visibleCnt < users.length && (
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <button
            onClick={() => setVisibleCnt(users.length)}
            className="show-more-btn"
          >
            Show more
          </button>
      </div>
      )}
    </>
  );
}
export default App;
