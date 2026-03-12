import data from "./data.json";
import TextWrapper from "./components/TextWrapper";
import PageTransition from "./components/PageTransition";
import AboutCat from "./components/AboutCat";

export default function Home() {
  return (
    <PageTransition>
      <TextWrapper>
        <AboutCat />
        <section className="max-w-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            {data.me.greetings}
          </h1>
          {data.me.description.map((paragraph, index) => (
            <p key={index} className="mt-4 text-sm leading-7">
              {paragraph}
            </p>
          ))}
        </section>
      </TextWrapper>
    </PageTransition>
  );
}
