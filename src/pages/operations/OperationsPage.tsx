import NavBarOperation from "../../components/NavBarOperations";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  JoinOperationPage,
  IntersectionOperationPage,
  DifferenceOperationPage,
  DSymmetricalOperationPage,
} from "./setsOperations";

export default function SetsOperationsPage() {
  return (
    <div className="grid grid-cols-4 h-[90%] mr-6">
      <Routes>
        <Route path="/" element={<NavBarOperation />}>
          <Route index element={<HomeOperation />} />
          <Route path="join" element={<JoinOperationPage />} />
          <Route path="intersection" element={<IntersectionOperationPage />} />
          <Route path="difference" element={<DifferenceOperationPage />} />
          <Route path="dsymmetrical" element={<DSymmetricalOperationPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

const HomeOperation = () => {
  return (
    <div className="m-auto col-span-3">
      <img
        src="https://i.gifer.com/52O8.gif"
        alt="homero"
        className="w-96 h-96"
      />
    </div>
  );
};
