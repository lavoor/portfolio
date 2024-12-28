"use client"

import { useState } from "react";
import Button from "../button";
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";

const Contactform = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [buttonText, setButtonText] = useState("Wyślij wiadomość");
    const [captchaValid, setCaptchaValid] = useState(false);
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleRecaptcha = (value: string | null) => {
        setCaptchaToken(value);
        setCaptchaValid(!!value); // Ustaw jako true, jeśli CAPTCHA została wypełniona
    };

    const submitForm = () => {
        if(!name){
            setButtonText("Wpisz imię i nazwisko");
            return
        }
        if(!email || !validateEmail(email)){
            setButtonText("Podaj poprawny adres e-mail");
            return
        }
        if(!message){
            setButtonText("Wpisz wiadomość");
            return
        }
        if(!captchaValid) {
            setButtonText("Potwierdź, że nie jesteś robotem");
            return;
        }
        setButtonText("Wysyłanie wiadomości...");

        const templateParams = {
            from_name: name,
            message: message,
            email: email,
            phone: phone,
            'g-recaptcha-response': captchaToken
        };

        emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            templateParams,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
        .then((response) => {
            console.log('Email wysłany!', response.status, response.text);
            setButtonText("Wiadomość wysłana!");
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
            setCaptchaToken(null)
        }, (error) => {
            console.log('Błąd przy wysyłaniu emaila:', error);
            setButtonText("Wystąpił błąd.");
        });
    }

    return(
        <div className="flex flex-col gap-10">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-5 w-full">
                    <input
                        className="satoshi bg-transparent duration-300 outline-none rounded-3xl focus:bg-white focus:bg-opacity-5 text-white text-opacity-100 border border-gold px-8 lg:px-10 py-4 lg:py-5 text-lg lg:text-xl placeholder:text-white placeholder:text-opacity-50"
                        placeholder="Imię i nazwisko"
                        type="text"
                        value={name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    />
                    <input
                        className="satoshi bg-transparent duration-300 outline-none rounded-3xl focus:bg-white focus:bg-opacity-5 text-white text-opacity-100 border border-gold px-8 lg:px-10 py-4 lg:py-5 text-lg lg:text-xl placeholder:text-white placeholder:text-opacity-50"
                        placeholder="Adres e-mail"
                        type="email"
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    />
                    <input
                        className="satoshi bg-transparent duration-300 outline-none rounded-3xl focus:bg-white focus:bg-opacity-5 text-white text-opacity-100 border border-gold px-8 lg:px-10 py-4 lg:py-5 text-lg lg:text-xl placeholder:text-white placeholder:text-opacity-50"
                        type="tel"
                        placeholder="Numer telefonu (opcjonalne)"
                        value={phone}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                    />
                </div>
                <div className="flex flex-col w-full">
                    <textarea
                        className="satoshi resize-none h-64 md:h-full bg-transparent duration-300 outline-none rounded-3xl focus:bg-white focus:bg-opacity-5 text-white text-opacity-100 border border-gold px-8 lg:px-10 py-4 lg:py-5 text-lg lg:text-xl placeholder:text-white placeholder:text-opacity-50"
                        placeholder="Wiadomość"
                        value={message}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                    />
                </div>
            </div>
            <ReCAPTCHA
                hl="pl"
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                onChange={handleRecaptcha}
                theme="dark"
            />
            <div className="w-full md:w-max" onClick={submitForm}>
                <Button text={buttonText} borderColor="border-gold" bgColor="bg-gold" textDark={true}/>
            </div>
        </div>
    )
}

export default Contactform;