function HeroSection() {
    return (
        <div className="relative isolate px-4 lg:px-6">
            <div className="mx-auto max-w-3xl py-16 sm:py-24 lg:py-28">

                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        ¿Deseas hacer unos cachuelos? {' '}
                        <a href="#" className="font-semibold text-indigo-600">
                            <span className="absolute inset-0" aria-hidden="true" />
                            Regístrate como Trabajador <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>

                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Encuentra los mejores servicios en: Lima
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Conectamos a personas que necesitan un servicio / trabajo con las que lo pueden hacer.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Buscar Ahora
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                            ¿Qué es un Cachuelo?
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroSection