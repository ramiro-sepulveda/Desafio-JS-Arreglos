const ventas = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    baños: 4,
    costo: 5000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: " 789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    baños: 1,
    costo: 1200,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: " 567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 4500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Estudio en el centro de Dubai con increíbles vistas al atardecer",
    src: "https://a0.muscache.com/im/pictures/hosting/Hosting-1076816303548693545/original/5e6fb459-1625-4215-af19-b741bd7310f4.jpeg?im_w=1440",
    descripcion: "Disfruta de lo mejor que ofrece el centro de Dubái. ",
    ubicacion: " Burj Khalifa Blvd - Downtown Dubai",
    habitaciones: 2,
    baños: 1,
    costo: 4500,
    smoke: true,
    pets: true,
  },
];

let html = "";

for (let venta of ventas) {
  html += `<div class="col-md-4 mb-4">
    <div class="card">
      <img
        src="${venta.src}"
        class="card-img-top"
        alt="Imagen del departamento"
      />
      <div class="card-body">
        <h5 class="card-title">
          ${venta.nombre}
        </h5>
        <p class="card-text">
          ${venta.descripcion}
        </p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${venta.ubicacion}
        </p>
        <p>
          <i class="fas fa-bed"></i> ${venta.habitaciones} Habitaciones |
          <i class="fas fa-bath"></i> ${venta.baños} Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${venta.costo.toLocaleString().replace(",", ".")}</p>`;

  if (venta.smoke == true) {
    html += `<p class="text-success">
                 <i class="fas fa-smoking"></i> Permitido fumar
                 </p>`;
  } else {
    html += `<p class="text-danger">
                 <i class="fas fa-smoking-ban"></i> No se permite fumar
                 </p>`;
  }

  if (venta.pets == true) {
    html += `<p class="text-success">
                 <i class="fas fa-paw"></i> Mascotas permitidas
                 </p>
                 </div>
                 </div>
               </div>`;
  } else {
    html += `<p class="text-danger">
                 <i class="fa-solid fa-ban"></i> No se permiten mascotas
                 </p>
                 </div>
                 </div>
               </div>`;
  }
}

const propVentas = document.querySelector("#prop-venta");
propVentas.innerHTML = html;