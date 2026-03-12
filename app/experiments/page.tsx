import TextWrapper from "../components/TextWrapper";
import PageTransition from "../components/PageTransition";
import ExperimentsCat from "../components/ExperimentsCat";

export default function Experiments() {
  return (
    <PageTransition>
      <TextWrapper>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Experiments
        </h2>
        <p className="text-sm mt-4 mb-12">
          Coming soon!
        </p>
        <ExperimentsCat />
      </TextWrapper>
    </PageTransition>
  );
}
