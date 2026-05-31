import { useState } from "react";
import SecurityBadge from "../components/SecurityBadge";

function OutdatedComponents() {
    const [secure, setSecure] = useState(false);

    return (
        <div className="page">
            <h1 className="vulnerability-title">
                A06:2021 - Vulnerable and Outdated Components
                (Componentes Vulnerables y Desactualizados)
            </h1>

            <div className="info-box">
                <h2 className="section-title">
                    📚 ¿Qué es esta vulnerabilidad?
                </h2>

                <p>
                    Ocurre cuando una aplicación utiliza librerías,
                    frameworks o dependencias con vulnerabilidades
                    conocidas o que ya no reciben soporte.
                </p>

                <p>
                    Los atacantes pueden aprovechar fallos publicados
                    para comprometer el sistema sin necesidad de
                    desarrollar nuevas técnicas de ataque.
                </p>
            </div>
            <h2 className="section-title">
                🎯 Nivel de Riesgo
            </h2>

            <div className="risk-bar">
                <div className="risk-fill"></div>
            </div>
            <SecurityBadge secure={secure} />

            {!secure ? (
                <>
                    <ul>
                        <li>React 16.8</li>
                        <li>Axios 0.18</li>
                        <li>Bootstrap 3.4</li>
                    </ul>

                    <h3>
                        ⚠ 3 vulnerabilidades encontradas
                    </h3>
                </>
            ) : (
                <>
                    <ul>
                        <li>React 18</li>
                        <li>Axios 1.x</li>
                        <li>Bootstrap 5.x</li>
                    </ul>

                    <h3>
                        ✅ No se encontraron
                        vulnerabilidades
                    </h3>
                </>
            )}

            <button
                onClick={() => setSecure(!secure)}
            >
                Actualizar Dependencias
            </button>
        </div>

    );
}

export default OutdatedComponents;