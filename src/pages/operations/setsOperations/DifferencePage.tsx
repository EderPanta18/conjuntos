import TwoSetsModelPage from "./modelPages/TwoSetsModelPage";
import { useSetsStore } from "../../../store/setsStore";
import { useAppliedSetsStore } from "../../../store/appliedSetsStore";
import { differenceOfArrays } from "../../../helps/OperationsHelp";

const DifferencePage: React.FC = () => {
  const { sets } = useSetsStore();
  const { setDifference, setSetDifference } = useAppliedSetsStore();
  return (
    <TwoSetsModelPage
      sets={sets}
      setOperation={setDifference}
      setSetOperation={setSetDifference}
      nameVarLocal={"selectedIndicesDifference"}
      functionOperation={differenceOfArrays}
      nameOperation={"Diferencia"}
    />
  );
};

export default DifferencePage;
