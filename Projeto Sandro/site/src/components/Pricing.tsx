import React from "react";
import "../styles/pricing.css";

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="pricing-section">
            <header>
                <p className="subtitle">Planos e preços</p>
                <h2>Nossos planos</h2>
            </header>

            <div className="pricing-cards">
    <div className="pricing-card featured">
        <h3>Avaliação Inicial</h3>
        <p>Plano ideal para quem deseja realizar uma avaliação completa física e nutricional.</p>
        <h4>R$ 199,90 <span>/único</span></h4>
        <button className="btn">Agendar agora</button>
        <ul>
            <li>🔥 Anamnese detalhada de saúde e hábitos alimentares.</li>
            <li>🔥 Exame físico completo com medição de gordura corporal e índice de massa corporal (IMC).</li>
            <li>🔥 Elaboração de plano alimentar personalizado.</li>
        </ul>
    </div>

    <div className="pricing-card featured">
        <h3>Acompanhamento Mensal</h3>
        <p>Ideal para quem deseja monitoramento contínuo e ajustes periódicos em seu plano nutricional e físico.</p>
        <h4>R$ 249,90 <span>/mês</span></h4>
        <button className="btn primary">Agendar agora</button>
        <ul>
            <li>🔥 Acompanhamento nutricional e físico mensal.</li>
            <li>🔥 Ajustes no plano alimentar com base em resultados e evolução.</li>
            <li>🔥 Consultoria e suporte direto por WhatsApp para dúvidas rápidas.</li>
        </ul>
    </div>

    <div className="pricing-card featured">
        <h3>Avaliação Completa + Acompanhamento</h3>
        <p>Plano completo para um acompanhamento detalhado e constante de saúde física e nutricional.</p>
        <h4>R$ 399,90 <span>/mês</span></h4>
        <button className="btn">Agendar agora</button>
        <ul>
            <li>🔥 Avaliação física e nutricional completa a cada 3 meses.</li>
            <li>🔥 Acompanhamento mensal com ajustes no plano de saúde.</li>
            <li>🔥 Exames de sangue e outros testes com 30% de desconto.</li>
        </ul>
    </div>
</div>

        </section>
    );
};

export default Pricing;
