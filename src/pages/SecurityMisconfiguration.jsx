import { useState } from "react";
import SecurityBadge from "../components/SecurityBadge";

function SecurityMisconfiguration() {
    const [secure, setSecure] = useState(false);

    return (
        <div className="page">
            <h1 className="vulnerability-title">
                A05:2021 - Security Misconfiguration
                (Configuración Incorrecta de Seguridad)
            </h1>
            <div className="info-box">
                <h2 className="section-title">
                    📚 ¿Qué es esta vulnerabilidad?
                </h2>

                <p>
                    Se produce cuando servidores, aplicaciones o servicios
                    tienen configuraciones inseguras que exponen recursos
                    o información sensible.
                </p>

                <p>
                    Es una de las vulnerabilidades más comunes debido a
                    configuraciones por defecto, permisos excesivos o
                    funciones innecesarias habilitadas.
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
                <div className="danger-box">
                    <p>Debug Mode: ON</p>
                    <p>Directory Listing: ON</p>
                    <p>Password: admin/admin</p>
                </div>
            ) : (
                <div className="safe-box">
                    <p>Debug Mode: OFF</p>
                    <p>Directory Listing: OFF</p>
                    <p>Strong Password: Enabled</p>
                </div>
            )}

            <button
                onClick={() => setSecure(!secure)}
            >
                Corregir Configuración
            </button>
        </div>
    );
}

export default SecurityMisconfiguration;