"use client";
// import { useRouter } from "next/router";

interface Publicacion {
  id_publicacion: number;
  titulo: string;
  fecha_publicacion: string;
}

const listaPublicaciones: Publicacion[] = [
  {
    id_publicacion: 1,
    titulo: "Ayuda a los niños de la comunidad",
    fecha_publicacion: "2024-09-15",
  },
  {
    id_publicacion: 2,
    titulo: "Recaudación para alimentos",
    fecha_publicacion: "2024-09-10",
  },
  {
    id_publicacion: 3,
    titulo: "Donaciones para material escolar",
    fecha_publicacion: "2024-08-20",
  },
];

const Publications = () => {
  //   const router = useRouter();

  return (
    <div className="container">
      <div className="formContainer">
        <h2 className="title">Publicaciones Disponibles</h2>
        <div className="publicationsList">
          {listaPublicaciones.map((publicacion) => (
            <div key={publicacion.id_publicacion} className="card">
              <img src="/assets/icon/corg.png" alt="Corgi" className="image" />
              <div className="card-content">
                <h3 className="card-title">{publicacion.titulo}</h3>
                <p className="card-subtitle">
                  Fecha de creación: {publicacion.fecha_publicacion}
                </p>
                <button
                  className="submitButton"
                  //   onClick={() =>
                  //     router.push(`/publicacion/${publicacion.id_publicacion}`)
                  //   }
                >
                  Ver más...
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
