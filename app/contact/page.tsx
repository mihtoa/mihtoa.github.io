import data from "../data.json";
import TextWrapper from "../components/text-wrapper";
import ContactCat from "../components/contact-cat";

export default function Home() {
  return (
    <TextWrapper>
      <ContactCat />
      <h2 className="text-4xl font-bold mb-8 mt-8">
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
  );
}
