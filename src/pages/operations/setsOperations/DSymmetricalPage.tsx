import TwoSetsModelPage from "./modelPages/TwoSetsModelPage";
import { useSetsStore } from "../../../store/setsStore";
import { useAppliedSetsStore } from "../../../store/appliedSetsStore";
import { symmetricDifferenceOfArrays } from "../../../helps/OperationsHelp";

const DSymmetricalPage: React.FC = () => {
  const { sets } = useSetsStore();
  const { setDSymmetrical, setSetDSymmetrical } = useAppliedSetsStore();
  return (
    <TwoSetsModelPage
      sets={sets}
      setOperation={setDSymmetrical}
      setSetOperation={setSetDSymmetrical}
      nameVarLocal={"selectedIndicesDSymmetrical"}
      functionOperation={symmetricDifferenceOfArrays}
      nameOperation={"Diferencia simétrica"}
    />
  );
};

export default DSymmetricalPage;
