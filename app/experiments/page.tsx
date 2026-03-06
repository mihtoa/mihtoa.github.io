import TextWrapper from "../components/text-wrapper";
import ExperimentsCat from "../components/experiments-cat";

export default function Experiments() {
  return (
    <TextWrapper>
      <h2 className="text-4xl font-bold mb-8 mt-8">
        Experiments
      </h2>
      <p className="text-sm mt-4 mb-12">
        Coming soon!
      </p>
      <ExperimentsCat />
    </TextWrapper>
  );
}
