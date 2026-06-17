import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 60,

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
            opacity: 0.2
          },

          move: {
            enable: true,
            speed: 1
          },

          opacity: {
            value: 0.5
          },

          size: {
            value: 3
          }
        },

        background: {
          color: "transparent"
        }
      }}
    />
  );
}