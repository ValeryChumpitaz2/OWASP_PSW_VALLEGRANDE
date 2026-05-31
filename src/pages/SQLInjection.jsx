import { useState } from "react";
import SecurityBadge from "../components/SecurityBadge";

function SQLInjection() {
    const [secure, setSecure] = useState(false);

    return (
        <div className="page">
            <h1 className="vulnerability-title">
                A03:2021 - SQL Injection (Inyección SQL)
            </h1>
            <div className="info-box">
                <h2 className="section-title">
                    📚 ¿Qué es esta vulnerabilidad?
                </h2>

                <p>
                    SQL Injection ocurre cuando una aplicación incorpora datos
                    proporcionados por el usuario directamente en una consulta SQL
                    sin validarlos adecuadamente.
                </p>

                <p>
                    Un atacante puede modificar la consulta original para acceder,
                    modificar o eliminar información almacenada en la base de datos.
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

                    <p><strong>Entrada del atacante:</strong></p>

                    <code>' OR '1'='1</code>

                    <p><strong>Consulta vulnerable:</strong></p>

                    <pre>
                        {`SELECT * FROM usuarios
WHERE usuario = '$usuario'
AND password = '$password';`}
                    </pre>

                    <p>
                        El atacante puede modificar la consulta y obtener acceso sin conocer la contraseña.
                    </p>
                </div>
            ) : (
                <div className="safe-box">
                    <h3>✅ Sistema Protegido</h3>

                    <p><strong>Mitigación:</strong></p>

                    <pre>
                        {`SELECT * FROM usuarios
WHERE usuario = ?
AND password = ?;`}
                    </pre>

                    <p>
                        Se utilizan consultas parametrizadas (Prepared Statements),
                        evitando que la entrada del usuario modifique la consulta SQL.
                    </p>
                </div>
            )}

            <button onClick={() => setSecure(!secure)}>
                {secure ? "Mostrar Vulnerabilidad" : "Aplicar Mitigación"}
            </button>
        </div>
    );
}

export default SQLInjection;