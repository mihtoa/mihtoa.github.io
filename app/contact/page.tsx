import data from "../data.json";
import TextWrapper from "../components/TextWrapper";
import ContactCat from "../components/ContactCat";

export default function Contact() {
  return (
    <TextWrapper>
      <h1 className="text-3xl md:text-5xl font-bold mb-8 font-title">
        Contact
        <span className="ef" aria-label="Emoji de brilhinhos pixelados"> D</span>
      </h1>
      <div className="mb-4">
        {data.me.socialLinks.map((link) => (
          <p key={link.slug} className="mb-4">
            <span className="text-lg ef" aria-label="Emoji de coração pixelado">B </span>
            <a className="text-md" href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          </p>
        ))}
      </div>
      <ContactCat />
    </TextWrapper>
  );
}
