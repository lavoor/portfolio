import Link from 'next/link';
import Button from './components/button';

const NotFound = () => {
    return(
        <section className="container flex gap-4 sm:gap-20 flex-col sm:flex-row justify-center items-center mx-auto h-screen">
            <div className="flex flex-col items-center">
                <h1 className="font-black text-center text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-tight">Błąd 404</h1>
                <p className="text-white text-center text-opacity-50 font-medium text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl tracking-tight">Nie znaleziono strony</p>
            </div>
            <Link href="/">
                <Button text="Powrót do strony glównej" borderColor="border-purple" bgColor="bg-purple" />
            </Link>
        </section>
    )
}

export default NotFound;