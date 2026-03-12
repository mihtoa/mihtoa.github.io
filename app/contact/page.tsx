import data from "../data.json";
import TextWrapper from "../components/TextWrapper";
import PageTransition from "../components/PageTransition";
import ContactCat from "../components/ContactCat";

export default function Contact() {
  return (
    <PageTransition>
      <TextWrapper>
        <ContactCat />
        <h2 className="text-3xl md:text-4xl font-bold mb-8 mt-8">
          Contact
        </h2>
        {data.me.socialLinks.map((link) => (
          <p key={link.slug} className="text-sm mt-4">
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          </p>
        ))}
      </TextWrapper>
    </PageTransition>
  );
}
