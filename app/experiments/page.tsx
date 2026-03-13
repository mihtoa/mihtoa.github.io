import TextWrapper from "../components/TextWrapper";
import ExperimentsCat from "../components/ExperimentsCat";

export default function Experiments() {
  return (
    <TextWrapper>
      <h1 className="text-3xl md:text-5xl font-bold mb-8 mt-8 font-title">
        Experiments
        <span className="ef" aria-label="Emoji de brilhinhos pixelados"> D</span>
      </h1>
      <p className="text-sm mt-4 mb-12">
        Coming soon!
      </p>
      <ExperimentsCat />
    </TextWrapper>
  );
}
