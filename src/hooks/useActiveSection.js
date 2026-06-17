import { useEffect, useState } from "react";

const sections = [
  "about",
  "skills",
  "experience",
  "projects",
  "education",
  "certifications",
  "contact"
];

export default function useActiveSection() {

  const [active, setActive] = useState("");

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }

        });

      },
      {
        threshold: 0.4
      }
    );

    sections.forEach((id) => {

      const section =
        document.getElementById(id);

      if (section) observer.observe(section);

    });

    return () => observer.disconnect();

  }, []);

  return active;
}