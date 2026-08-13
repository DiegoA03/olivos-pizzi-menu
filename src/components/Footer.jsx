import { Link } from 'react-router-dom';

const WHATSAPP_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .105 5.36.105 11.94c0 2.096.548 4.142 1.591 5.945L0 24l6.335-1.652a11.882 11.882 0 005.71 1.454h.005c6.585 0 11.943-5.36 11.943-11.943 0-3.194-1.24-6.192-3.473-8.41";

const INSTAGRAM_PATH = "M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.15-3.23 1.66-4.77 4.92-4.92 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07c-4.35.2-6.78 2.62-6.98 6.98C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zM12 16a4 4 0 114-4 4 4 0 01-4 4zm6.41-10.85a1.44 1.44 0 11-1.44-1.44 1.44 1.44 0 011.44 1.44z";

const FACEBOOK_PATH = "M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0";

const socials = [
  { name: 'WhatsApp', href: 'https://wa.me/573208198473', path: WHATSAPP_PATH },
  { name: 'Instagram', href: 'https://instagram.com/olivospizzi', path: INSTAGRAM_PATH },
  { name: 'Facebook', href: 'https://facebook.com/olivospizzi', path: FACEBOOK_PATH },
];

const categories = [
  { name: 'Pizzas', path: '/pizzas' },
  { name: 'Hamburguesas', path: '/hamburguesas' },
  { name: 'Hot Dogs', path: '/hotdogs' },
  { name: 'Choriperros', path: '/choriperros' },
  { name: 'Papas', path: '/papas' },
  { name: 'Bebidas', path: '/bebidas' },
];

function SocialIcon({ social }) {
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      title={social.name}
      className="w-9 h-9 rounded-full flex items-center justify-center border border-white/15 text-gray-400 transition-all duration-300 hover:text-black"
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--accent)';
        e.currentTarget.style.borderColor = 'var(--accent)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
      }}
    >
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d={social.path} />
      </svg>
    </a>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative border-t bg-black/70 backdrop-blur-md mt-24"
      style={{ borderColor: 'rgba(var(--accent-rgb), 0.3)' }}
    >
      {/* Franja superior con el color del tema */}
      <div
        className="h-[3px] w-full"
        style={{ background: 'linear-gradient(90deg, transparent, var(--accent), transparent)' }}
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Marca */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="Olivos Pizzi"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-elegant font-bold text-lg" style={{ color: 'var(--accent)' }}>
                Olivos Pizzi
              </span>
            </div>
            <p className="text-gray-400 text-sm font-barlow leading-relaxed mb-5">
              Pizza artesanal, hamburguesas y comida rápida con actitud ninja.
              Sabor, disciplina y pasión en cada plato.
            </p>

            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <SocialIcon key={s.name} social={s} />
              ))}
            </div>
          </div>

          {/* Menú */}
          <div>
            <h3 className="font-barlow font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Menú
            </h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.path}>
                  <Link
                    to={cat.path}
                    className="text-gray-400 text-sm font-barlow transition-colors"
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Horario */}
          <div>
            <h3 className="font-barlow font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Horario
            </h3>
            <ul className="space-y-2 text-sm font-barlow text-gray-400">
              <li className="flex justify-between gap-4">
                <span>Lunes - Viernes</span>
                <span className="text-gray-300">5:00 pm - 11:00 pm</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sábado - Domingo</span>
                <span className="text-gray-300">4:00 pm - 12:00 am</span>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-barlow font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm font-barlow text-gray-400">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="var(--accent)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Soacha, Bogota
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="var(--accent)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +57 320 819 8473
              </li>
            </ul>
          </div>
        </div>
{/* Línea inferior */}
        <div className="border-t border-white/10 mt-12 pt-6 flex justify-center">
          <p className="text-gray-500 text-xs font-barlow">
            © {year} Olivos Pizzi. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;