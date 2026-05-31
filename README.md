# 🛡️ OWASP Security Playground

> Laboratorio interactivo desarrollado en React para demostrar vulnerabilidades del OWASP Top 10 mediante ejemplos prácticos, impacto y medidas de mitigación.

![OWASP](https://img.shields.io/badge/OWASP-Top%2010-blue)
![React](https://img.shields.io/badge/React-19-61DAFB)
![Vite](https://img.shields.io/badge/Vite-Frontend-purple)
![License](https://img.shields.io/badge/License-Educational-green)

---

## 📖 Descripción

**OWASP Security Playground** es una aplicación web desarrollada con **React + Vite** que permite comprender de manera visual e interactiva algunas de las vulnerabilidades más importantes del estándar **OWASP Top 10**.

Cada vulnerabilidad incluye:

* 📚 Definición y explicación.
* ⚠️ Ejemplo vulnerable.
* 💥 Impacto o riesgo.
* 🛡️ Medidas de mitigación.
* ✅ Estado seguro después de aplicar correcciones.

Este proyecto fue desarrollado con fines académicos para la asignatura:

**S14 | M14 | Pruebas de Seguridad y CI/CD con enfoque en OWASP y Selenium**

---

## 🚀 Tecnologías Utilizadas

* ⚛️ React
* ⚡ Vite
* 🧭 React Router DOM
* 🎨 CSS3
* 🔐 OWASP Top 10 (2021)

---

## 📂 Vulnerabilidades Implementadas

### 🔴 A03:2021 - Cross-Site Scripting (XSS)

Permite la inyección de scripts maliciosos que son ejecutados por el navegador de otros usuarios.

### 🟠 A03:2021 - SQL Injection

Permite manipular consultas SQL mediante entradas maliciosas para acceder o modificar información de la base de datos.

### 🟡 A07:2021 - Broken Authentication (Fallos de Autenticación)

Debilidades en los mecanismos de autenticación que permiten accesos no autorizados.

### 🔵 A05:2021 - Security Misconfiguration (Configuración Incorrecta de Seguridad)

Configuraciones inseguras que exponen recursos o información sensible.

### 🟣 A06:2021 - Vulnerable and Outdated Components (Componentes Vulnerables y Desactualizados)

Uso de librerías o dependencias con vulnerabilidades conocidas o sin soporte.

---

## 🏗️ Estructura del Proyecto

```text
src/

├── pages/
│   ├── Home.jsx
│   ├── XSS.jsx
│   ├── SQLInjection.jsx
│   ├── BrokenAuth.jsx
│   ├── SecurityMisconfiguration.jsx
│   └── OutdatedComponents.jsx
│
├── components/
│   ├── Navbar.jsx
│   ├── VulnerabilityCard.jsx
│   ├── AttackSimulator.jsx
│   └── SecurityBadge.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

---

## ⚙️ Instalación

Clonar el repositorio:

```bash
git clone https://github.com/usuario/owasp-security-playground.git
```

Ingresar al proyecto:

```bash
cd owasp-security-playground
```

Instalar dependencias:

```bash
npm install
```

Ejecutar en modo desarrollo:

```bash
npm run dev
```

---

## 🎯 Objetivos del Proyecto

* Comprender las vulnerabilidades más comunes del OWASP Top 10.
* Identificar riesgos de seguridad en aplicaciones web.
* Analizar ejemplos de explotación de vulnerabilidades.
* Aplicar buenas prácticas de mitigación.
* Fortalecer conocimientos de desarrollo seguro.

---

## 📸 Características

✅ Dashboard interactivo

✅ Interfaz moderna estilo Cyber Security

✅ Simulación de vulnerabilidades

✅ Visualización de riesgos

✅ Explicaciones educativas

✅ Ejemplos de mitigación

✅ Navegación mediante React Router

---

## 👩‍💻 Autora

### Valery Chumpitaz
Docente de Análisis de Sistemas Empresariales

Proyecto académico desarrollado para la práctica de conceptos de seguridad informática basados en OWASP Top 10.

---

## 📚 Referencias

* OWASP Top 10 (2021)
* React Documentation
* Vite Documentation
* OWASP Foundation

---

⭐ Si este proyecto te resultó útil para aprender sobre seguridad web, considera darle una estrella al repositorio.
