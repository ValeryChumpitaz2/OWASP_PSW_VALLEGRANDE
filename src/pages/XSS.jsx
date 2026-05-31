import { useState } from "react";
import SecurityBadge from "../components/SecurityBadge";

function XSS() {
    const [secure, setSecure] = useState(false);

    return (
        <div className="page">
            <h1 className="vulnerability-title">
                A03:2021 - Cross-Site Scripting (Secuencias de comandos entre sitios)
            </h1>
            <SecurityBadge secure={secure} />

            <div className="info-box">
                <h2 className="section-title">
                    📚 ¿Qué es esta vulnerabilidad?
                </h2>

                <p>
                    Cross-Site Scripting (XSS) ocurre cuando una aplicación web
                    permite insertar código JavaScript malicioso que será ejecutado
                    por el navegador de otros usuarios.
                </p>

                <p>
                    El atacante aprovecha campos de entrada como comentarios,
                    formularios o mensajes para inyectar scripts que pueden
                    robar información o manipular la sesión del usuario.
                </p>
            </div>
            <h2 className="section-title">
                🎯 Nivel de Riesgo
            </h2>

            <div className="risk-bar">
                <div className="risk-fill"></div>
            </div>
            {!secure ? (
                <div className="danger-box">
                    <h2>⚠️ Ejemplo Vulnerable</h2>

                    <p>
                        Un usuario envía el siguiente comentario:
                    </p>

                    <pre>
                        {`<script>
alert("Sitio comprometido")
</script>`}
                    </pre>

                    <p>
                        Si la aplicación no valida la entrada, el navegador ejecutará
                        el script automáticamente.
                    </p>

                    <h3>💥 Impacto</h3>

                    <ul>
                        <li>Robo de cookies.</li>
                        <li>Suplantación de usuarios.</li>
                        <li>Redirección a sitios maliciosos.</li>
                        <li>Captura de información sensible.</li>
                    </ul>
                </div>
            ) : (
                <div className="safe-box">
                    <h2>🛡️ Mitigación Aplicada</h2>

                    <p>
                        La entrada del usuario es sanitizada antes de mostrarse.
                    </p>

                    <pre>
                        {`&lt;script&gt;
alert("Sitio comprometido")
&lt;/script&gt;`}
                    </pre>

                    <p>
                        Ahora el navegador lo muestra como texto y no ejecuta el código.
                    </p>

                    <h3>✅ Resultado</h3>

                    <p>
                        El ataque queda neutralizado.
                    </p>
                </div>
            )}

            <button onClick={() => setSecure(!secure)}>
                {secure
                    ? "Mostrar Vulnerabilidad"
                    : "Aplicar Mitigación"}
            </button>
        </div>
    );
}

export default XSS;