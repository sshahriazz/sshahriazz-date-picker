import SingleDatePicker from "./components/SingleDatePicker";
import RangeDatePicker from "components/RangeDatePicker";
import "public/css/style.css";
function App() {
  return (
    <>
      <div>
        <SingleDatePicker />
        {/* @ts-ignore */}
        <RangeDatePicker
          startDate={new Date(2020, 0, 15)}
          endDate={new Date(2020, 1, 1)}
        />
      </div>
    </>
  );
}

export default App;
