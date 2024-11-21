import React, { useState } from "react";
import "../styles/contact.css";

const Contact: React.FC = () => {
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
    
        const body = {
            toMail: email,
            content: content,
        };
    
        try {
            await fetch("/api/Lambda", { 
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5NzQwYTcwYjA5NzJkY2NmNzVmYTg4YmM1MjliZDE2YTMwNTczYmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIzMjU1NTk0MDU1OS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjMyNTU1OTQwNTU5LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAyMjA5MTU0MzY5MjEyMzI2NjU3IiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJwc2FsbWVpZGExQG1pbmhhLmZhZy5lZHUuYnIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6InpBQy02emtVb1V1S19LVzFFY2I0YWciLCJpYXQiOjE3MzIxNjIxOTYsImV4cCI6MTczMjE2NTc5Nn0.S57DhI9sbzuBRCOhh4HIoBa4_YODOKksU6ziQqSG-3pXnQE7gCi3K7wxXnH5LK-WVS0SepX70xJPRieNTYa3oeR7vAfuaJi3ESBaZtetOM3CJ44bf4UMftIWOFGkCZ8GNRoBU4aLkChnWCgli5Krp9yEPdEufuVwvq7a6RaKRLz55PoaN45WJRCOCD5qZcScIfDqJvDMO5VS2NZPqPAVDquarIfyQJzwsK1q0jDKuuZm-vq198kPwBKKUUi9w0NpJwVB_SgZ6Kv4x2dgygmomDiXpzeKovxmiTJ8VR974cLLo8oQzq-2jyIl6lexWUJ9psijYaCNVRKvoqlGJZC2Lg",
                },
                body: JSON.stringify(body),
            });

        } catch (error) {
            alert("Ocorreu um erro ao enviar o formulário.");
            console.error("Erro na requisição:", error);
        }
    };
    

    return (
        <section id="contact" className="contact-section">
            <header>
                <p className="subtitle">Receba dicas para melhorar seu corpo</p>
                <h2>Basta um email para mudar o jogo!</h2>
                <p>
                    Mandaremos emails regularmente de dicas para melhorar a sua qualidade de vida
                </p>
            </header>

            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email principal"
                    className="form-input"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do email
                />
                <textarea
                    placeholder="Quais são as suas metas?"
                    className="form-textarea"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)} // Atualiza o estado do conteúdo
                ></textarea>
                <button type="submit" className="form-button">Enviar</button>
            </form>
        </section>
    );
};

export default Contact;
