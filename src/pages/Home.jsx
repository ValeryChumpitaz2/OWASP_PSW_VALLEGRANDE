import VulnerabilityCard from "../components/VulnerabilityCard";

function Home() {
    const vulnerabilities = [
        {
            code: "A03:2021",
            title: "Cross Site Scripting",
            description:
                "Inyección de scripts maliciosos.",
            route: "/xss",
        },
        {
            code: "A03:2021",
            title: "SQL Injection",
            description:
                "Manipulación de consultas SQL.",
            route: "/sql-injection",
        },
        {
            code: "A07:2021",
            title: "Broken Authentication",
            description:
                "Fallos de autenticación.",
            route: "/broken-auth",
        },
        {
            code: "A05:2021",
            title: "Security Misconfiguration",
            description:
                "Configuraciones inseguras.",
            route: "/security-misconfiguration",
        },
        {
            code: "A06:2021",
            title: "Outdated Components",
            description:
                "Dependencias vulnerables.",
            route: "/outdated-components",
        },
    ];

    return (
        <div className="container">
            <h1>OWASP Security Playground</h1>

            <p>
                Laboratorio interactivo para demostrar
                vulnerabilidades OWASP Top 10.
            </p>

            <div className="dashboard">
                <div className="box">5 Vulnerabilidades</div>
                <div className="box">1 Crítica</div>
                <div className="box">3 Altas</div>
                <div className="box">1 Media</div>
            </div>

            <div className="grid">
                {vulnerabilities.map((item) => (
                    <VulnerabilityCard
                        key={item.title}
                        {...item}
                    />
                ))}
            </div>
            <div className="creator-card">
                <div className="creator-card">
                    <div className="creator-avatar">
                        👩‍💻
                    </div>

                    <h2>Valery Chumpitaz</h2>

                    <p>
                        Análisis de Sistemas • OWASP Security Playground
                    </p>
                </div>
            </div>
        </div>

    );
}


export default Home;