import { Route, Routes } from "react-router-dom";
import AgeCalculator from "./pages/AgeCalculator";
import Calculator from "./pages/Calculator";

type Props = {};

function AppRoutes({}: Props) {
  return (
    <Routes>
      <Route path="/" element={<Calculator />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/age-calculator" element={<AgeCalculator />} />
    </Routes>
  );
}

export default AppRoutes;
