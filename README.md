# FlowDash – Dashboard Creativo (Demo)

FlowDash es un **dashboard web moderno** diseñado como proyecto de portafolio.  
Incluye panel de métricas, gestión de usuarios, reportes filtrables y diseño responsive.

> **Proyecto DEMO**  
> No es un sistema productivo, es una simulación frontend para mostrar habilidades.

---

## Vistas del proyecto

- **Index** → Landing page  
- **Dashboard** → Métricas y gráficas  
- **Reportes** → Tabla filtrable por fechas  
- **Usuarios** → CRUD con persistencia local  

---

## Estructura del proyecto
```text
/FlowDash
│
├── index.html
├── dashboard.html
├── reportes.html
├── usuarios.html
│
├── css/
│ ├── base.css
│ ├── layout.css
│ ├── sidebar.css
│ └── styles.css
│
├── js/
│ ├── dashboard.js
│ ├── charts.js
│ ├── reportes.js
│ └── modal.js
│
└── IMG/
├── icons/
└── avatars/
```

---

## Tecnologías utilizadas

- HTML5  
- CSS3 (Flexbox & Grid)  
- JavaScript Vanilla  
- Chart.js  
- LocalStorage  

---

## Funcionalidades

### Dashboard
- Cards KPI  
- Gráficas dinámicas  
- Contadores animados  
- Diseño responsive  
- Botón salir (demo)  

---

### Reportes
- Tabla dinámica  
- Filtro por:
  - Este mes
  - Últimos 3 meses
  - Este año
  - Todos  
- Cálculo automático de ingresos  
- Filtro por fecha real  

---

### Usuarios
- Modal para crear usuario  
- Editar usuario  
- Eliminar usuario  
- Persistencia real usando LocalStorage  
- Datos precargados  
- Tabla dinámica  

---

## Persistencia

Los usuarios se guardan en el navegador usando:

```js
localStorage.setItem("usuarios", JSON.stringify(usuarios));
```

- ✔️ Si recargas → siguen  
- ✔️ Si cierras navegador → siguen  
- ✔️ Solo se borran si limpias storage  

---

## Instalación

**Clona el repositorio**

```bash
git clone https://github.com/immanuel448/FlowDash-Plataforma-creativa.git
```
---

## Estado del proyecto

- ✅ Frontend completo  
- ❌ No backend  
- ❌ No autenticación real  

---

## Objetivo

Proyecto creado para:

- Portafolio profesional  
- Práctica de frontend  
- UI dashboards  
- Manipulación del DOM  
- Persistencia local  

---

## Preview

> Agrega aquí screenshots del proyecto

---

## Autor

**Immanuel (Frontend Developer)**  
Desarrollado por [immanuel448](https://github.com/immanuel448)

---

## Licencia

Uso personal y educativo  
No uso comercial

