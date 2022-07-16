import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

const ParticlesConfig = () => {
  const particlesInit = async main => {
    await loadFull(main)
  }

  return (
    <Particles
      init={particlesInit}
      className="particles-container"
      options={{
        fullScreen: { enable: false, zIndex: 0 },
        detectRetina: false,
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 30,
              duration: 2,
              opacity: 5,
              size: 3,
              speed: 3,
            },
          },
        },
        particles: {
          color: {
            value: "#ff0000",
            animation: {
              enable: true,
              speed: 5,
              sync: true,
            },
          },
          lineLinked: {
            blink: false,
            color: "random",
            consent: false,
            distance: 30,
            enable: false,
            opacity: 0.3,
            width: 0.5,
          },
          move: {
            attract: {
              enable: false,
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            bounce: true,
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 0.75,
            straight: false,
          },
          number: {
            density: {
              enable: false,
              value_area: 1000,
            },
            limit: 0,
            value: 10,
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.05,
              speed: 10,
              sync: false,
            },
            random: false,
            value: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            animation: {
              enable: false,
              minimumValue: 0.1,
              speed: 40,
              sync: false,
            },
            random: true,
            value: 1,
          },
        },
        polygon: {
          draw: {
            enable: true,
            lineColor: "rgba(255,255,255,0.4)",
            lineWidth: 0.3,
          },
          move: {
            radius: 10,
          },
          inlineArrangement: "equidistant",
          scale: 0.45,
          type: "inline",
          url: "https://particles.js.org/images/smalldeer.svg",
        },
      }}
    />
  )
}
export default ParticlesConfig
