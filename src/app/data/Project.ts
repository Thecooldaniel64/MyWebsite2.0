// src/data/projects.ts
export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  tags: string[];
  challenge: string;
  solution: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
{
    id: 'Lotes-platform',
    title: 'Plataforma de venta de lotes',
    shortDescription: 'Plataforma de presentación para venta de lotes de terrenos',
    fullDescription: 'Esta plataforma fue desarrollada para una asesora inmobiliaria que necesitaba mostrar y comercializar lotes de terreno de manera eficiente. Incluye un catálogo de lotes con filtros por ubicación, precio y dimensiones, galería de imágenes, mapas interactivos, y un sistema de cotización en línea. Además, cuenta con un panel de administración para gestionar inventario y precios.',
    image: '/images/Lotes.png',
    tags: ['Node.js', 'AWS', 'MySQL'],
    challenge: 'El cliente necesitaba una plataforma que permitiera a los compradores explorar lotes de forma intuitiva, con información actualizada y herramientas de comparación, además de facilitar la gestión interna de inventario.',
    solution: 'Se desarrolló una aplicación web con Node.js y Express en el backend, utilizando MySQL para la base de datos. El frontend se construyó con React, implementando mapas interactivos con Leaflet y filtros dinámicos. La aplicación está desplegada en AWS (EC2, RDS) para garantizar escalabilidad y rendimiento.',
    technologies: ['React', 'Node.js', 'Express', 'MySQL', 'AWS (EC2, RDS)', 'Leaflet'],
    liveUrl: 'https://aracelibeltran-asesorinmobiliario.com/',
    githubUrl: 'https://github.com/usuario/ecommerce'
},
{
    id: 'call-center-migration',
    title: 'Migración de Servidor para Call Center',
    shortDescription: 'Migración de servidor telefónico para resolver problemas de diafonía en un call center.',
    fullDescription: 'Se realizó la migración de un servidor de telefonía VoIP en un call center con más de 50 agentes, que presentaba problemas de diafonía (cruce de llamadas) y baja calidad de audio. El proyecto incluyó el análisis de la infraestructura existente, la planificación de la migración a nuevo hardware y software, la configuración de la red y la reimplementación de los sistemas de gestión de llamadas.',
    image: '/images/server.png',
    tags: ['VoIP', 'Migración', 'Redes'],
    challenge: 'El call center experimentaba diafonía y caídas de llamadas debido a un servidor obsoleto y una configuración de red inadecuada. Se necesitaba una migración sin interrupción del servicio y con mejora de la calidad de audio.',
    solution: 'Se migró el servidor telefónico a un nuevo equipo con mayor capacidad, se actualizó el software de telefonía (Asterisk/FreeSWITCH) y se optimizó la red segmentando el tráfico VoIP y priorizándolo mediante QoS. Además, se realizaron pruebas de carga y monitoreo continuo para garantizar la estabilidad.',
    technologies: ['Asterisk', 'FreeSWITCH', 'Linux', 'Redes', 'VoIP', 'QoS'],
},
{
    id: 'web-deployment-system',
    title: 'Despliegue Web Seguro con AWS',
    shortDescription: 'Configuración de servidores Ubuntu en AWS con Nginx como reverse proxy, renovación automática de SSL, y protección geográfica por país.',
    fullDescription: 'Diseño e implementación de una arquitectura web escalable y segura utilizando servicios de AWS (EC2, Route53, Certificate Manager). Se configuró un servidor Ubuntu con Nginx como reverse proxy para gestionar múltiples dominios y aplicaciones. Se automatizó la renovación de certificados SSL mediante Let\'s Encrypt y se implementó protección por país con el módulo GeoIP de Nginx para restringir accesos no deseados. El sistema incluye monitoreo básico, copias de seguridad y scripts de automatización.',
    image: '/images/dashboard.png', // Ajusta la ruta de tu imagen
    tags: ['AWS', 'Nginx', 'Linux', 'DevOps', 'Seguridad'],
    challenge: 'El cliente necesitaba migrar sus aplicaciones a un entorno seguro, con renovación automática de SSL y protección contra tráfico malicioso por región geográfica, garantizando alta disponibilidad.',
    solution: 'Se implementó una infraestructura en AWS EC2 con Ubuntu, usando Nginx como reverse proxy. Se integró certbot para la renovación automática de certificados SSL y el módulo GeoIP de Nginx para filtrar tráfico por país. Se automatizó la configuración con scripts de bash y se documentó todo el proceso.',
    technologies: ['AWS EC2', 'AWS Route53', 'AWS Certificate Manager', 'Ubuntu', 'Nginx', 'Let\'s Encrypt', 'GeoIP', 'Bash'],
}
];