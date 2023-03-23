import logo from "./logo.svg";
import "./App.css";
import { atom, selector } from "recoil";
import TextInput from "./components/TextInput";
import CharacterCount from "./components/CharacterCount";

export const textState = atom({
  key: "textState", // 주로 변수명을 사용한다.
  default: "",
});

export const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

function App() {
  return (
    <div>
      <TextInput></TextInput>
      <CharacterCount />
    </div>
  );
}

export default App;
