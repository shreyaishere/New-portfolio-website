import "./Particles.css";

export default function Particles() {

  return (

    <div className="particles">

      {[...Array(50)].map((_, i) => (

        <span
          key={i}
          style={{
            left:
              Math.random() * 100 + "%"
          }}
        />

      ))}

    </div>

  );
}