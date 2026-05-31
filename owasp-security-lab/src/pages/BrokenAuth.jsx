import { useState } from "react";
import SecurityBadge from "../components/SecurityBadge";

function BrokenAuth() {
    const [secure, setSecure] = useState(false);

    return (
        <div className="page">
            <h1 className="vulnerability-title">
                A07:2021 - Broken Authentication (Fallos de Autenticación)
            </h1>
            <div className="info-box">
                <h2 className="section-title">
                    📚 ¿Qué es esta vulnerabilidad?
                </h2>

                <p>
                    Ocurre cuando los mecanismos de autenticación presentan
                    debilidades que permiten a un atacante obtener acceso
                    no autorizado a cuentas o sistemas.
                </p>

                <p>
                    Algunos ejemplos incluyen contraseñas débiles,
                    credenciales predeterminadas o la ausencia de
                    autenticación multifactor.
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
                    <h3>⚠️ Sistema Vulnerable</h3>

                    <p>Usuario: admin</p>
                    <p>Contraseña: admin123</p>

                    <p>
                        Las credenciales débiles o predeterminadas pueden
                        ser descubiertas fácilmente por un atacante.
                    </p>
                </div>
            ) : (
                <div className="safe-box">
                    <h3>✅ Sistema Protegido</h3>

                    <p>Contraseña fuerte habilitada</p>
                    <p>Autenticación MFA activada</p>
                    <p>Política de bloqueo de intentos aplicada</p>
                </div>
            )}

            <button onClick={() => setSecure(!secure)}>
                {secure ? "Mostrar Vulnerabilidad" : "Aplicar Mitigación"}
            </button>
        </div>
    );
}

export default BrokenAuth;