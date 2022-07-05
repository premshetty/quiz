import Quiz2 from "./components/quiz2/Quiz2";
import Quiz1 from "./components/quiz1/Quiz1";
function App() {
  return (
    <div className="flex max-h-[100vh] overflow-hidden">
      <h1 className="absolute left-[10%] text-center top-5  text-[42px] text-white">
        Choose any one side and answer all the Questions{" "}
      </h1>
      <Quiz1 />
      <Quiz2 />
    </div>
  );
}

export default App;
