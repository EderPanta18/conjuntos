import NavBarOperation from "../../components/NavBarOperations";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  JoinPage,
  IntersectionPage,
  DifferencePage,
  DSymmetricalPage,
} from "./setsOperations";

export default function SetsOperationsPage() {
  return (
    <div className="grid grid-cols-4 h-[90%] mr-6">
      <Routes>
        <Route path="/" element={<NavBarOperation />}>
          <Route index element={<HomeOperation />} />
          <Route path="join" element={<JoinPage />} />
          <Route path="intersection" element={<IntersectionPage />} />
          <Route path="difference" element={<DifferencePage />} />
          <Route path="dsymmetrical" element={<DSymmetricalPage />} />
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
