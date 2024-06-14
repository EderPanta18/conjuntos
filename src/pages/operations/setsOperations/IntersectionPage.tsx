import { useSetsStore } from "../../../store/setsStore";
import { useAppliedSetsStore } from "../../../store/appliedSetsStore";
import VariousModelPage from "./modelPages/VariousModelPage";
import { findCommonElements } from "../../../helps/OperationsHelp";

const IntersectionPage: React.FC = () => {
  const { sets } = useSetsStore();
  const { setIntersection, setSetIntersection } = useAppliedSetsStore();
  return (
    <VariousModelPage
      sets={sets}
      setOperation={setIntersection}
      setSetOperation={setSetIntersection}
      nameOperation={"Intersección"}
      nameVarLocal={"selectedIndicesJoin"}
      functionOperation={findCommonElements}
    />
  );
};

export default IntersectionPage;
