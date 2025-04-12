import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_NAME } from "../redux/reducer";

const Home = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);

  const handleSave = () => {
    dispatch({ type: SET_NAME, payload: input });
  };

  return (
    <div>
      <h2>Ismingizni kiriting: </h2>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSave}>Saqlash</button>
      {name && <h3>Salom, {name} 👋</h3>}
    </div>
  );
};

export default Home;
