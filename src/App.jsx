import { useState, useEffect } from "react";
import "./index.css";

const CAROUSEL_SLIDES = [
  {
    id: 1,
    image: "/assets/Plancha.jfif",
    title: "Todo en productos electrónicos",
    subtitle: "",
  },
  {
    id: 2,
    image: "/assets/Tecladomembrana.jfif",
    title: "Tecnología para tu día a día",
    subtitle: "",
  },
  {
    id: 3,
    image: "/assets/Tecladogaming.jfif",
    title: "Todo para tu Hogar",
    subtitle: "",
  },
];

const PRODUCTS = [
  {
    id: 1,
    name: "PowerBank",
    category: "Electrónica",
    description:
      "Manten tu dispositivo siempre cargado con este PowerBank de alta capacidad, perfecto para viajes y uso diario.",
    image: "/assets/Powerbang.jfif",
  },
  {
    id: 2,
    name: "Mini UPS",
    category: "Electrónica",
    description:
      "Protege tus dispositivos contra cortes de energía con este Mini UPS compacto y eficiente, ideal para computadoras y equipos electrónicos.",
    image: "/assets/ups.jfif",
  },
  {
    id: 3,
    name: "Plancha de cabello",
    category: "Electrónica",
    description:
      "Plancha de cabello profesional con tecnología de cerámica avanzada para un alisado rápido y sin daños, perfecta para todo tipo de cabello.",
    image: "/assets/otraplancha.jfif",
  },
  {
    id: 4,
    name: "Bombillo Recargable",
    category: "Electrónica",
    description:
      "Bombillo recargable con iluminación LED de alta calidad, ideal para uso doméstico y exterior.",
    image: "/assets/bombillorecargable.jfif",
  },
  {
    id: 5,
    name: "Teclado Gaming",
    category: "Electrónica",
    description:
      "Teclado gaming mecánico con retroiluminación RGB personalizable, diseñado para ofrecer una experiencia de juego superior y durabilidad.",
    image: "/assets/Tecladogaming.jfif",
  },
  {
    id: 6,
    name: "Telado de oficina",
    category: "Electrónica",
    description:
      "Teclado de oficina con diseño ergonómico y teclas silenciosas, ideal para largas jornadas de trabajo y productividad.",
    image: "/assets/Tecladomembrana.jfif",
  },
  {
    id: 7,
    name: "Plancha de cabello",
    category: "Electrónica",
    description:
      "Plancha de cabello profesional con tecnología de cerámica avanzada para un alisado rápido y sin daños, perfecta para todo tipo de cabello.",
    image: "/assets/Plancha.jpg",
  },
  {
    id: 8,
    name: "Audifonos gaming",
    category: "Electrónica",
    description:
      "Auriculares gaming con sonido envolvente 7.1, micrófono ajustable y diseño cómodo para largas sesiones de juego.",
    image: "/assets/audifonos_gamernt.jfif",
  },
  {
    id: 9,
    name: "Audifonos inalámbricos de Avengers",
    category: "Electrónica",
    description:
      "Auriculares inalámbricos con diseño exclusivo de Avengers, sonido de alta calidad y batería de larga duración para disfrutar de tu música y juegos favoritos.",
    image: "/assets/audifonos_inalam_avengers.jfif",
  },
  {
    id: 10,
    name: "Audifonos inalámbricos azules",
    category: "Electrónica",
    description:
      "Auriculares inalámbricos con diseño moderno en color azul, sonido de alta fidelidad y batería de larga duración para una experiencia auditiva excepcional.",
    image: "/assets/audifonos_inalam_azules.jfif",
  },
  {
    id: 11,
    name: "Audifonos inalámbricos azules oscuros",
    category: "Electrónica",
    description:
      "Auriculares inalámbricos con diseño moderno en color azul oscuro, sonido de alta fidelidad y batería de larga duración para una experiencia auditiva excepcional.",
    image: "/assets/audifonos_inalam_azulesoscuros.jfif",
  },
  {
    id: 12,
    name: "audifonos inalámbricos kuromi",
    category: "Electrónica",
    description:
      "Auriculares inalámbricos con diseño exclusivo de Kuromi, sonido de alta calidad y batería de larga duración para disfrutar de tu música y juegos favoritos.",
    image: "/assets/audifonos_inalam_kurumi.jfif",
  },
  {
    id: 14,
    name: "Audifonos inalámbricos mario",
    category: "Electrónica",
    description:
      "Auriculares inalámbricos con cancelación de ruido activa y sonido de alta fidelidad.",
    image: "/assets/audifonos_inalam_mario.jpg",
  },
  {
    id: 15,
    name: "audifonos inalámbricos rosas",
    category: "Electrónica",
    description:
      "Auriculares inalámbricos con diseño moderno en color rosa, sonido de alta fidelidad y batería de larga duración para una experiencia auditiva excepcional.",
    image: "/assets/audifonos_inalam_rosa.jfif",
  },
  {
    id: 16,
    name: "audifonos inalámbricos stich",
    category: "Electrónica",
    description:
      "Auriculares inalámbricos con diseño exclusivo de Stich, sonido de alta calidad y batería de larga duración para disfrutar de tu música y juegos favoritos.",
    image: "/assets/audifonos_stich.jfif",
  },
  {
    id: 17,
    name: "Camara de seguimiento automático",
    category: "Electrónica",
    description:
      "Cámara de seguimiento automático con sensor de movimiento y lente de alta resolución.",
    image: "/assets/cam_auto_tracking.jpg",
  },
  {
    id: 18,
    name: "Soporte para teléfono para carro",
    category: "Electrónica",
    description:
      "Soporte para teléfono para carro con ajuste seguro y diseño ergonómico.",
    image: "/assets/car_telf_supp.jpg",
  },
  {
    id: 19,
    name: "Soporte para teléfono para carro",
    category: "Electrónica",
    description:
      "Soporte para teléfono para carro con ajuste seguro y diseño ergonómico.",
    image: "/assets/car_telf_supp2.jpg",
  },
  {
    id: 20,
    name: "Corneta Karaoke",
    category: "Electrónica",
    description:
      "Corneta karaoke portátil con micrófono inalámbrico, ideal para fiestas y reuniones familiares.",
    image: "/assets/cornetica_karaoke.jfif",
  },
  {
    id: 21,
    name: "Corneta karaoke",
    category: "Electrónica",
    description:
      "Corneta karaoke portátil con micrófono inalámbrico, ideal para fiestas y reuniones familiares.",
    image: "/assets/cornetica_karaoke2.jfif",
  },
  {
    id: 22,
    name: "Corneta con linterna integrada",
    category: "Electrónica",
    description:
      "Corneta con linterna integrada, ideal para uso en exteriores y emergencias.",
    image: "/assets/cornetica_liternita.jfif",
  },
  {
    id: 23,
    name: "Corneta",
    category: "Electrónica",
    description:
      "Corneta clásica con diseño tradicional, ideal para uso en exteriores y emergencias.",
    image: "/assets/cornetica.jfif",
  },
  {
    id: 24,
    name: "Corneta",
    category: "Electrónica",
    description:
      "Corneta clásica con diseño tradicional, ideal para uso en exteriores y emergencias.",
    image: "/assets/cornetica2.jfif",
  },
  {
    id: 25,
    name: "Corneta",
    category: "Electrónica",
    description:
      "Corneta clásica con diseño tradicional, ideal para uso en exteriores y emergencias.",
    image: "/assets/cornetica3.jfif",
  },
  {
    id: 26,
    name: "Go Pro",
    category: "Electrónica",
    description:
      "Cámara de acción GoPro con alta resolución, resistente al agua y con estabilización de imagen avanzada para capturar tus aventuras más emocionantes.",
    image: "/assets/go_pro_temu.jfif",
  },
  {
    id: 28,
    name: "home trate",
    category: "Electrónica",
    description:
      "Home Trate con diseño moderno y tecnología de audio avanzada, ideal para disfrutar de tu música favorita en cualquier lugar de tu hogar.",
    image: "/assets/home trate.jfif",
  },
  {
    id: 29,
    name: "Lampara de mesa",
    category: "Electrónica",
    description:
      "Lámpara de mesa con diseño moderno y luz LED ahorradora de energía.",
    image: "/assets/lamp_mesa.jfif",
  },
  {
    id: 30,
    name: "Llavaro reloj",
    category: "Electrónica",
    description:
      "Llavero con reloj digital, ideal para llevar siempre contigo.",
    image: "/assets/llavero_reloj.jfif",
  },
  {
    id: 31,
    name: "Peso digital",
    category: "Electrónica",
    description:
      "Peso digital con pantalla LCD, ideal para medir peso de objetos pequeños con precisión.",
    image: "/assets/peso_metro.jfif",
  },
  {
    id: 32,
    name: "Secador de zapatos",
    category: "Electrónica",
    description:
      "Secador de zapatos con tecnología de calor rápido y seguridad integrada.",
    image: "/assets/shoe_dryer.jpg",
  },
  {
    id: 34,
    name: "Soporte para teléfono de mesa",
    category: "Electrónica",
    description:
      "Soporte para teléfono de mesa con diseño moderno y material de alta calidad.",
    image: "/assets/supp_tel_mesa.jfif",
  },
  {
    id: 35,
    name: "Soplador de aire a presion",
    category: "Electrónica",
    description:
      "Soplador de aire a presion potente para limpiar superficies y áreas difíciles de alcanzar.",
    image: "/assets/storm_machine.jfif",
  },
  {
    id: 36,
    name: "TV BOX",
    category: "Electrónica",
    description:
      "streaming stick con acceso a miles de canales, películas y programas de televisión en alta definición.",
    image: "/assets/tv_box.jfif",
  },
  {
    id: 37,
    name: "Ventilador doble",
    category: "Electrónica",
    description:
      "Ventilador doble con tecnología de enfriamiento avanzada y diseño moderno.",
    image: "/assets/ventilador_doble.jpg",
  },
  {
    id: 38,
    name: "calculadora cientifica",
    category: "Electrónica",
    description:
      "calculadora cientifica con funciones avanzadas, ideal para estudiantes y profesionales.",
    image: "/assets/calculadora.jfif",
  },
  {
    id: 39,
    name: "Adaptador para laptops",
    category: "Electrónica",
    description:
      "Adaptador para laptops con diseño compacto y eficiente, ideal para cargar dispositivos electrónicos.",
    image: "/assets/Adaptador_Laptops.jfif",
  },
  {
    id: 40,
    name: "Microfo para Karaoke",
    category: "Electrónica",
    description:
      "Micrófono para karaoke con diseño moderno y tecnología de sonido avanzada, ideal para disfrutar de tus canciones favoritas en casa o en fiestas.",
    image: "/assets/microfono.jfif",
  },
  {
    id: 41,
    name: "Adaptador de tipo C",
    category: "Electrónica",
    description:
      "Adaptador de tipo C con diseño compacto y eficiente, ideal para cargar dispositivos electrónicos.",
    image: "/assets/Adaptador_TipoC.jpg",
  },
  {
    id: 42,
    name: "mini linterna LED recargable de tipo llavero",
    category: "Electrónica",
    description:
      "Mini linterna LED recargable de tipo llavero, ideal para llevar siempre contigo y tener una fuente de luz confiable en cualquier situación.",
    image: "/assets/llavero_recargable.jfif",
  },
  {
    id: 43,
    name: "Corneta anti robos para motos  ",
    category: "Electrónica",
    description:
      "Corneta anti robos para motos con sonido potente y diseño compacto, ideal para proteger tu motocicleta contra robos y alertar a los transeúntes en caso de intento de robo.",
    image: "/assets/Sistema_audio_motos.jfif",
  },
  {
    id: 44,
    name: "Proyector astronauta",
    category: "Electrónica",
    description:
      "proyector portátil con alta resolución y tecnología de imagen avanzada para una experiencia de visualización inmersiva.",
    image: "/assets/proyector_astronauta.jfif",
  },
  {
    id: 45,
    name: "repetidor wifi",
    category: "Electrónica",
    description:
      "repetidor wifi con cobertura extendida y conexión rápida para una experiencia de navegación sin interrupciones.",
    image: "/assets/repetidor_wifi.jpg",
  },
  {
    id: 46,
    name: "estimulador portátil",
    category: "Electrónica",
    description:
      "estimulador portátil con tecnología de estimulación eléctrica, ideal para el alivio del dolor y la rehabilitación.",
    image: "/assets/estimulador_portatil.jfif",
  },
  {
    id: 47,
    name: "multimetro digital",
    category: "Electrónica",
    description:
      "multimetro digital con pantalla LCD, ideal para medir voltaje, corriente y resistencia con precisión.",
    image: "/assets/multimetro.jfif",
  },
  {
    id: 48,
    name: "arrancador de carros",
    category: "Electrónica",
    description:
      "Arrancador de carros con tecnología de arranque rápido y seguridad integrada.",
    image: "/assets/arrancador_carros.jfif",
  },
  {
    id: 50,
    name: "Modulo amplificador",
    category: "Electrónica",
    description:
      "Módulo amplificador con tecnología de audio avanzada, ideal para mejorar la calidad del sonido en sistemas de audio.",
    image: "/assets/Modulo_amplificador.jpeg",
  },
  {
    id: 51,
    name: "Modulo Pasivo",
    category: "Electrónica",
    description:
      "Módulo pasivo con diseño compacto y eficiente, ideal para aplicaciones de audio y electrónica.",
    image: "/assets/Modulo_pasivo1.jpeg",
  },
  {
    id: 52,
    name: "placa pasiva",
    category: "Electrónica",
    description:
      "Placa pasiva con diseño compacto y eficiente, ideal para aplicaciones de audio y electrónica.",
    image: "/assets/placa_pasiva.jpeg",
  },
  {
    id: 53,
    name: "afeitadora ",
    category: "Electrónica",
    description:
      "Afeitadora mediana con tecnología de corte preciso y diseño ergonómico.",
    image: "/assets/categoria_hogar/afeitadora_mediana.jfif",
  },
  {
    id: 54,
    name: "bateria recargable",
    category: "Electrónica",
    description:
      "Batería recargable con alta capacidad y tecnología de carga rápida.",
    image: "/assets/categoria_hogar/bateria_recargable.jfif",
  },
  {
    id: 55,
    name: "Calvadora de acero",
    category: "Electrónica",
    description:
      "Clavadora de acero con diseño robusto y tecnología de clavado eficiente, ideal para proyectos de construcción y bricolaje.",
    image: "/assets/categoria_hogar/Clavadora_ de_ acero.jfif",
  },
  {
    id: 56,
    name: "Codera",
    category: "Electrónica",
    description:
      "Codera con diseño ergonómico y material de alta calidad.",
    image: "/assets/categoria_hogar/codera.jfif",
  },
  {
    id: 57,
    name: "Collarín",
    category: "Electrónica",
    description:
      "Collarín con diseño ergonómico y material de alta calidad, ideal para brindar soporte y comodidad en caso de lesiones cervicales.",
    image: "/assets/categoria_hogar/collarin.jfif",
  },
  {
    id: 58,
    name: "corrector de postura",
    category: "Electrónica",
    description:
      "Corrector de postura con diseño ergonómico y material de alta calidad.",
    image: "/assets/categoria_hogar/corrector_de_postura.jfif",
  },
  {
    id: 59,
    name: "Corrector de postura",
    category: "Electrónica",
    description:
      "Corrector de postura con diseño ergonómico y material de alta calidad.",
    image: "/assets/categoria_hogar/corrector_de_postura2.jfif",
  },
  {
    id: 61,
    name: "Escensia aromatica",
    category: "Electrónica",
    description:
      "Escencia aromática con fragancia relajante y duradera, ideal para crear un ambiente acogedor en tu hogar u oficina.",
    image: "/assets/categoria_hogar/escencia_aromatica.jfif",
  },
  {
    id: 62,
    name: "estimulador muscular",
    category: "Electrónica",
    description:
      "Estimulador muscular con tecnología de rehabilitación y diseño ergonómico.",
    image: "/assets/categoria_hogar/estimulador_muscular.jfif",
  },
  {
    id: 63,
    name: "Headlamp",
    category: "Electrónica",
    description:
      "Headlamp con diseño compacto y tecnología de iluminación avanzada, ideal para actividades al aire libre y situaciones de emergencia.",
    image: "/assets/categoria_hogar/headlamp.jfif",
  },
  {
    id: 64,
    name: "kit para viaje",
    category: "Electrónica",
    description:
      "Kit para viaje con múltiples funciones y diseño compacto, ideal para viajeros exigentes.",
    image: "/assets/categoria_hogar/kit_para_viaje.jfif",
  },
  {
    id: 65,
    name: "laser autonivelante profesional",
    category: "Electrónica",
    description:
      "Láser autonivelante profesional con alta precisión y tecnología de medición avanzada, ideal para proyectos de construcción y bricolaje.",
    image: "/assets/categoria_hogar/láser_autonivelante_profesional.jpg",
  },
  {
    id: 66,
    name: "linterna recargable",
    category: "Electrónica",
    description:
      "Linterna recargable con tecnología de iluminación avanzada y diseño compacto.",
    image: "/assets/categoria_hogar/literna_recargable.jpg",
  },
  {
    id: 67,
    name: "luz solar",
    category: "Electrónica",
    description:
      "Luz solar con panel solar integrado y tecnología de iluminación LED, ideal para iluminar áreas exteriores de manera sostenible y eficiente.",
    image: "/assets/categoria_hogar/luz_solar.jfif",
  },
  {
    id: 68,
    name: "maquina de afeitar",
    category: "Electrónica",
    description:
      "Máquina de afeitar eléctrica con tecnología de corte preciso y diseño ergonómico.",
    image: "/assets/categoria_hogar/maquina_afeitar.jpg",
  },
  {
    id: 69,
    name: "Masajeador de pies",
    category: "Electrónica",
    description:
      "Masajeador de pies con tecnología de masaje y diseño ergonómico.",
    image: "/assets/categoria_hogar/masajeador_de_pies.jfif",
  },
  {
    id: 70,
    name: "masajeador mini",
    category: "Electrónica",
    description:
      "Masajeador mini con tecnología de masaje y diseño ergonómico.",
    image: "/assets/categoria_hogar/masajeador_mini.jfif",
  },
  {
    id: 71,
    name: "Mini afeitadora",
    category: "Electrónica",
    description:
      "Mini afeitadora eléctrica con tecnología de corte preciso y diseño compacto, ideal para retoques rápidos y viajes.",
    image: "/assets/categoria_hogar/mini_afeitadora.jfif",
  },
  {
    id: 72,
    name: "Muñequera",
    category: "Electrónica",
    description:
      "Muñequera con diseño ergonómico y material de alta calidad, ideal para brindar soporte y comodidad en caso de lesiones en la muñeca.",
    image: "/assets/categoria_hogar/muñequera.jfif",
  },
  {
    id: 73,
    name: "Parche analgésico",
    category: "Electrónica",
    description:
      "Parche analgésico con tecnología de liberación controlada, ideal para aliviar el dolor muscular y articular.",
    image: "/assets/categoria_hogar/parches_analgesicos.jfif",
  },
  {
    id: 74,
    name: "Pasta térmica",
    category: "Electrónica",
    description:
      "Pasta térmica con alta conductividad térmica, ideal para mejorar la disipación de calor en componentes electrónicos y mantener un rendimiento óptimo.",
    image: "/assets/categoria_hogar/pasta_termica.jfif",
  },
  {
    id: 75,
    name: "Pega loca",
    category: "Electrónica",
    description:
      " Pega loca con fórmula de alta resistencia, ideal para reparaciones rápidas y duraderas en una variedad de materiales.",
    image: "/assets/categoria_hogar/pega_loca.jfif",
  },
  {
    id: 76,
    name: "Portavasos ajustable",
    category: "Electrónica",
    description:
      "Portavasos ajustable con diseño ergonómico y material de alta calidad, ideal para mantener tu bebida a la temperatura deseada.",
    image: "/assets/categoria_hogar/portavasos_ajustable.jfif",
  },
  {
    id: 77,
    name: "Rodillera",
    category: "Electrónica",
    description:
      "Rodillera con diseño ergonómico y material de alta calidad, ideal para brindar soporte y comodidad en caso de lesiones en la rodilla.",
    image: "/assets/categoria_hogar/rodillera.jfif",
  },
  {
    id: 78,
    name: "Termo de bebidas",
    category: "Electrónica",
    description:
      "Termo de bebidas con diseño moderno y material de alta calidad, ideal para mantener tu bebida a la temperatura deseada.",
    image: "/assets/categoria_hogar/termo_bebidas.jfif",
  },
  {
    id: 79,
    name: "Termo morado",
    category: "Electrónica",
    description:
      "Termo morado con diseño moderno y material de alta calidad, ideal para mantener tu bebida a la temperatura deseada.",
    image: "/assets/categoria_hogar/termo_morado.jfif",
  },
  {
    id: 80,
    name: "Termo reutilizable",
    category: "Electrónica",
    description:
      "Termo reutilizable con diseño moderno y material de alta calidad, ideal para mantener tu bebida a la temperatura deseada.",
    image: "/assets/categoria_hogar/termo_reutilizable.jfif",
  },
  {
    id: "81",
    name: "Tobillera",
    category: "Electrónica",
    description:
      "Tobillera con diseño ergonómico y material de alta calidad, ideal para brindar soporte y comodidad en caso de lesiones en la tobilla.",
    image: "/assets/categoria_hogar/tobillera.jfif",
  },
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
            CAMIRL<span className="text-blue-700"> INVERSIONES CA </span>
          </h1>
        </div>
      </nav>

      {/* SECCIÓN DEL CARRUSEL (HERO) */}
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

        {/* CONTROLES DE PUNTOS DEL CARRUSEL */}
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
        <div className="absolute bottom-3 right-0 left-0 lg:left-auto lg:right-8 flex flex-col items-center lg:items-end text-center lg:text-right opacity-75 hover:opacity-100 transition-opacity z-20 pointer-events-none">
          <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-0.5">
            Developer
          </p>
          <a
            href="https://github.com/lioverr"
            target="_blank"
            rel="noopener noreferrer"
            className="group pointer-events-auto flex items-center gap-2 bg-slate-900 text-white px-3.5 py-1.5 rounded-xl shadow-lg hover:bg-slate-800 transition-all active:scale-95 border border-white/10"
          >
            <span className="text-[10px] font-bold tracking-tight">
              <span className="text-slate-400 font-medium">by</span> Liov
            </span>
            <div className="w-px h-2.5 bg-slate-700"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-12 transition-transform">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
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
                    <div className="p-5 flex flex-col flex-grow">
                      <h4 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
                        {product.name}
                      </h4>
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
              <div className="mb-8 flex-grow">
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
                  interesado? Contáctanos por WhatsApp
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