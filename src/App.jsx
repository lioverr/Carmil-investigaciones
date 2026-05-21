import { useState, useEffect } from "react";
import "./index.css";
const CAROUSEL_SLIDES = [
  {
    id: 1,
    image: "src/assets/Plancha.jfif",
    title: "Todo en productos electrónicos",
    subtitle: "",
  },
  {
    id: 2,
    image: "src/assets/Tecladomembrana.jfif",
    title: "Tecnología para tu día a día",
    subtitle: "",
  },
  {
    id: 3,
    image: "src/assets/Tecladogaming.jfif",
    title: "Todo para tu Hogar",
    subtitle: "",
  },
];

const PRODUCTS = [
  {
    id: 1,
    name: "PowerBank",
    category: "Electrónica",
    price: 20,
    description:
      "Manten tu dispositivo siempre cargado con este PowerBank de alta capacidad, perfecto para viajes y uso diario.",
    image: "src/assets/Powerbang.jfif",
  },
  {
    id: 2,
    name: "Mini UPS",
    category: "Electrónica",
    price: 40,
    description:
      "Protege tus dispositivos contra cortes de energía con este Mini UPS compacto y eficiente, ideal para computadoras y equipos electrónicos.",
    image: "src/assets/ups.jfif",
  },
  {
    id: 3,
    name: "Planca de cabello",
    category: "Electrónica",
    price: 35,
    description:
      "Plancha de cabello profesional con tecnología de cerámica avanzada para un alisado rápido y sin daños, perfecta para todo tipo de cabello.",
    image: "src/assets/otraplancha.jfif",
  },
  {
    id: 4,
    name: "Bombillo Recargable",
    category: "Electrónica",
    price: 25,
    description:
      "Bombillo recargable con iluminación LED de alta calidad, ideal para uso doméstico y exterior.",
    image: "src/assets/bombillorecargable.jfif",
  },
  {
    id: 5,
    name: "Teclado Gaming",
    category: "Electrónica",
    price: 20,
    description:
      "Teclado gaming mecánico con retroiluminación RGB personalizable, diseñado para ofrecer una experiencia de juego superior y durabilidad.",
    image: "src/assets/Tecladogaming.jfif",
  },
  {
    id: 6,
    name: "Telado de oficina",
    category: "Electrónica",
    price: 40,
    description:
      "Teclado de oficina con diseño ergonómico y teclas silenciosas, ideal para largas jornadas de trabajo y productividad.",
    image: "src/assets/Tecladomembrana.jfif",
  },
  {
    id: 7,
    name: "Planca de cabello",
    category: "Electrónica",
    price: 35,
    description:
      "Plancha de cabello profesional con tecnología de cerámica avanzada para un alisado rápido y sin daños, perfecta para todo tipo de cabello.",
    image: "src/assets/Plancha.jfif",
  },
  {
    id: 8,
    name: "Audifonos gaming",
    category: "Electrónica",
    price: 25,
    description:
      "Auriculares gaming con sonido envolvente 7.1, micrófono ajustable y diseño cómodo para largas sesiones de juego.",
    image: "src/assets/audifonos_gamernt.jfif",
  },
  {
    id: 9,
    name: "Audifonos inalámbricos de Avengers",
    category: "Electrónica",
    price: 20,
    description:
      "Auriculares inalámbricos con diseño exclusivo de Avengers, sonido de alta calidad y batería de larga duración para disfrutar de tu música y juegos favoritos.",
    image: "src/assets/audifonos_inalam_avengers.jfif",
  },
  {
    id: 10,
    name: "Audifonos inalámbricos azules",
    category: "Electrónica",
    price: 40,
    description:
      "Auriculares inalámbricos con diseño moderno en color azul, sonido de alta fidelidad y batería de larga duración para una experiencia auditiva excepcional.",
    image: "src/assets/audifonos_inalam_azules.jfif",
  },
  {
    id: 11,
    name: "Audifonos inalámbricos azules oscuros",
    category: "Electrónica",
    price: 35,
    description:
      "Auriculares inalámbricos con diseño moderno en color azul oscuro, sonido de alta fidelidad y batería de larga duración para una experiencia auditiva excepcional.",
    image: "src/assets/audifonos_inalam_azulesoscuros.jfif",
  },
  {
    id: 12,
    name: "audifonos inalámbricos kuromi",
    category: "Electrónica",
    price: 25,
    description:
      "Auriculares inalámbricos con diseño exclusivo de Kuromi, sonido de alta calidad y batería de larga duración para disfrutar de tu música y juegos favoritos.",
    image: "src/assets/audifonos_inalam_kurumi.jfif",
  },
  {
    id: 14,
    name: "Mini UPS",
    category: "Electrónica",
    price: 40,
    description:
      "Auriculares inalámbricos con cancelación de ruido activa y sonido de alta fidelidad.",
    image: "src/assets/audifonos_inalam_mario.jfif",
  },
  {
    id: 15,
    name: "audifonos inalámbricos rosas",
    category: "Electrónica",
    price: 35,
    description:
      "Auriculares inalámbricos con diseño moderno en color rosa, sonido de alta fidelidad y batería de larga duración para una experiencia auditiva excepcional.",
    image: "src/assets/audifonos_inalam_rosa.jfif",
  },
  {
    id: 16,
    name: "audifonos inalámbricos stich",
    category: "Electrónica",
    price: 25,
    description:
      "Auriculares inalámbricos con diseño exclusivo de Stich, sonido de alta calidad y batería de larga duración para disfrutar de tu música y juegos favoritos.",
    image: "src/assets/audifonos_stich.jfif",
  },
  {
    id: 17,
    name: "Camara de seguimiento automático",
    category: "Electrónica",
    price: 20,
    description:
      "Cámara de seguimiento automático con sensor de movimiento y lente de alta resolución.",
    image: "src/assets/cam_auto_tracking.jfif",
  },
  {
    id: 18,
    name: "Soporte para teléfono para carro",
    category: "Electrónica",
    price: 40,
    description:
      "Soporte para teléfono para carro con ajuste seguro y diseño ergonómico.",
    image: "src/assets/car_telf_supp.jfif",
  },
  {
    id: 19,
    name: "Soporte para teléfono para carro",
    category: "Electrónica",
    price: 35,
    description:
      "Soporte para teléfono para carro con ajuste seguro y diseño ergonómico.",
    image: "src/assets/car_telf_supp2.jfif",
  },
  {
    id: 20,
    name: "Corneta Karaoke",
    category: "Electrónica",
    price: 25,
    description:
      "Corneta karaoke portátil con micrófono inalámbrico, ideal para fiestas y reuniones familiares.",
    image: "src/assets/cornetica_karaoke.jfif",
  },
  {
    id: 21,
    name: "Corneta karaoke",
    category: "Electrónica",
    price: 20,
    description:
      "Corneta karaoke portátil con micrófono inalámbrico, ideal para fiestas y reuniones familiares.",
    image: "src/assets/cornetica_karaoke2.jfif",
  },
  {
    id: 22,
    name: "Corneta con linterna integrada",
    category: "Electrónica",
    price: 40,
    description:
      "Corneta con linterna integrada, ideal para uso en exteriores y emergencias.",
    image: "src/assets/cornetica_liternita.jfif",
  },
  {
    id: 23,
    name: "Corneta",
    category: "Electrónica",
    price: 35,
    description:
      "Corneta clásica con diseño tradicional, ideal para uso en exteriores y emergencias.",
    image: "src/assets/cornetica.jfif",
  },
  {
    id: 24,
    name: "Corneta",
    category: "Electrónica",
    price: 25,
    description:
      "Corneta clásica con diseño tradicional, ideal para uso en exteriores y emergencias.",
    image: "src/assets/cornetica2.jfif",
  },
  {
    id: 25,
    name: "Corneta",
    category: "Electrónica",
    price: 20,
    description:
      "Corneta clásica con diseño tradicional, ideal para uso en exteriores y emergencias.",
    image: "src/assets/cornetica3.jfif",
  },
  {
    id: 26,
    name: "Go Pro",
    category: "Electrónica",
    price: 40,
    description:
      "Cámara de acción GoPro con alta resolución, resistente al agua y con estabilización de imagen avanzada para capturar tus aventuras más emocionantes.",
    image: "src/assets/go_pro_temu.jfif",
  },
  {
    id: 27,
    name: "TV BOX",
    category: "Electrónica",
    price: 35,
    description:
      "streaming stick con acceso a miles de canales, películas y programas de televisión en alta definición.",
    image: "src/assets/hdtv.jfif",
  },
  {
    id: 28,
    name: "Proyector portátil",
    category: "Electrónica",
    price: 25,
    description:
      "Proyector portátil con alta resolución y tecnología de imagen avanzada para una experiencia de visualización inmersiva.",
    image: "src/assets/home trate.jfif",
  },
  {
    id: 29,
    name: "Lampara de mesa",
    category: "Electrónica",
    price: 20,
    description:
      "Lámpara de mesa con diseño moderno y luz LED ahorradora de energía.",
    image: "src/assets/lamp_mesa.jfif",
  },
  {
    id: 30,
    name: "Llavaro reloj",
    category: "Electrónica",
    price: 40,
    description:
      "Llavero con reloj digital, ideal para llevar siempre contigo.",
    image: "src/assets/llavero_reloj.jfif",
  },
  {
    id: 31,
    name: "Peso Metro",
    category: "Electrónica",
    price: 35,
    description:
      "Peso metro digital con pantalla LCD, ideal para medir peso de objetos pequeños con precisión.",
    image: "src/assets/peso_metro.jfif",
  },
  {
    id: 32,
    name: "Secador de zapatos",
    category: "Electrónica",
    price: 25,
    description:
      "Secador de zapatos con tecnología de calor rápido y seguridad integrada.",
    image: "src/assets/shoe_dryer.jfif",
  },
  {
    id: 33,
    name: "Sopladora de aire",
    category: "Electrónica",
    price: 20,
    description:
      "Sopladora de aire potente para limpiar superficies y áreas difíciles de alcanzar.",
    image: "src/assets/storm_machine.jfif",
  },
  {
    id: 34,
    name: "Soporte para teléfono de mesa",
    category: "Electrónica",
    price: 40,
    description:
      "Soporte para teléfono de mesa con diseño moderno y material de alta calidad.",
    image: "src/assets/supp_tel_mesa.jfif",
  },
  {
    id: 35,
    name: "Soplador de aire a presion",
    category: "Electrónica",
    price: 35,
    description:
      "Soplador de aire a presion potente para limpiar superficies y áreas difíciles de alcanzar.",
    image: "src/assets/storm_machine.jfif",
  },
  {
    id: 36,
    name: "TV BOX",
    category: "Electrónica",
    price: 25,
    description:
      "streaming stick con acceso a miles de canales, películas y programas de televisión en alta definición.",
    image: "src/assets/tv_box.jfif",
  },
  {
    id: 37,
      name: "Ventilador doble",
    category: "Electrónica",
    price: 20,
    description:
      "Ventilador doble con tecnología de enfriamiento avanzada y diseño moderno.",
    image: "src/assets/ventilador_doble.jfif",
  }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [...new Set(PRODUCTS.map((p) => p.category))];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === CAROUSEL_SLIDES.length - 1 ? 0 : prev + 1,
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-black text-purple-600 tracking-tighter">
            CAMIRL<span className="text-blue-700"> INVESTIGACIÓN </span>
          </h1>
        </div>
      </nav>

      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-gray-900 group">
        {CAROUSEL_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg transform translate-y-[-10px] animate-fade-in">
                {slide.title}
              </h2>
              <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl drop-shadow-md">
                {slide.subtitle}
              </p>
              <a
                href="https://www.google.com/maps?q=10.16026,-67.9692717&z=17&hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg transform hover:scale-105 transition-all inline-block"
              >
                Ubicanos
              </a>
            </div>
          </div>
        ))}

        <div className="absolute bottom-5 left-0 right-0 z-30 flex justify-center space-x-3">
          {CAROUSEL_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Nuestros Productos
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        {categories.map((category) => (
          <div key={category} className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2 inline-block">
              {category}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {PRODUCTS.filter((p) => p.category === category).map(
                (product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer group flex flex-col"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                    <div className="p-5 flex flex-col flex-grow:1">
                      <h4 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
                        {product.name}
                      </h4>
                      <p className="text-blue-600 font-black text-xl mt-auto">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        ))}
      </main>
      <footer className="bg-gray-900 text-white py-10 text-center">
        <p className="text-gray-400">
          CAMIRL INVESTIGACIÓN TECNOLOGÍA, ELECTRÓNICA Y ALGO MAS
        </p>
      </footer>

      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          ></div>

          <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden transform animate-[scale-in_0.2s_ease-out]">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur rounded-full p-2 text-gray-800 hover:bg-gray-200 hover:text-red-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="md:w-1/2 h-64 md:h-auto relative">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                {selectedProduct.category}
              </div>
            </div>
            <div className="md:w-1/2 p-8 flex flex-col">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                {selectedProduct.name}
              </h2>
              <p className="text-4xl font-black text-blue-600 mb-6">
                ${selectedProduct.price.toFixed(2)}
              </p>

              <div className="mb-8 flex-grow:1">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Descripción
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://api.whatsapp.com/send/?phone=04165012497&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform active:scale-95 transition-all flex justify-center items-center gap-2 text-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  Comunicate con nosotros via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scale-in { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
      `,
        }}
      />
    </div>
  );
}
