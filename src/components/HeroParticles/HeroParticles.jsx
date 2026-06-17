import Particles from "react-tsparticles";

export default function HeroParticles() {
  return (
    <Particles
      options={{
        fullScreen: false,
        background: {
          color: "transparent"
        },
        particles: {
          number: {
            value: 80
          },
          color: {
            value: "#8b5cf6"
          },
          links: {
            enable: true,
            color: "#06b6d4",
            opacity: 0.15
          },
          move: {
            enable: true,
            speed: 1
          },
          opacity: {
            value: 0.4
          },
          size: {
            value: 3
          }
        }
      }}
    />
  );
}