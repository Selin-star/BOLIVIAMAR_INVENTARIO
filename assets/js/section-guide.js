/* Ventanas informativas de navegación. No altera los diagramas Mermaid. */
(()=>{
const entries={
 inicio:['🏠','Inicio','Presentación del proyecto','Conoce el sistema web de gestión de inventario de juguetes de BOLIVIAMAR S.R.L. y accede a sus principales funcionalidades.',['Presentación','Accesos rápidos','Inventario']],
 dashboard:['📊','Panel administrativo','Resumen del inventario','Consulta los indicadores generales del inventario, el estado de los productos y los accesos a los módulos de gestión.',['Indicadores','Existencias','Gestión']],
 productos:['🧸','Productos','Catálogo de juguetes','Visualiza los juguetes registrados y consulta sus códigos, categorías, precios referenciales y existencias disponibles.',['Catálogo','Precios','Stock']],
 categorias:['🗂️','Categorías','Clasificación de juguetes','Organiza y consulta las categorías utilizadas para clasificar los productos del inventario.',['Clasificación','Categorías','Productos']],
 almacenes:['🏬','Almacenes','Ubicaciones del inventario','Consulta los almacenes de BOLIVIAMAR y la distribución de los productos por ubicación.',['Ubicaciones','Existencias','Responsables']],
 proveedores:['🚚','Proveedores','Abastecimiento de productos','Consulta los proveedores asociados al inventario y la información utilizada para registrar ingresos de mercadería.',['Proveedores','Contactos','Abastecimiento']],
 entradas:['📥','Entradas','Ingresos de mercadería','Registra el ingreso de juguetes a un almacén y consulta los movimientos que incrementan las existencias.',['Ingresos','Cantidades','Movimientos']],
 salidas:['📤','Salidas','Despachos de inventario','Registra salidas de juguetes y verifica las existencias disponibles antes de descontarlas del almacén.',['Despachos','Validación de stock','Registro']],
 transferencias:['🔁','Transferencias','Movimientos entre almacenes','Consulta y registra traslados de productos desde un almacén de origen hacia otro de destino.',['Origen y destino','Traslados','Stock']],
 kardex:['📒','Kardex','Historial de inventario','Revisa los movimientos cronológicos de entrada y salida para dar seguimiento a las existencias de cada producto.',['Historial','Entradas y salidas','Saldos']],
 alertas:['🔔','Alertas','Control de existencias','Identifica juguetes agotados o con existencias bajas para facilitar la planificación de reposiciones.',['Stock bajo','Agotados','Reposición']],
 reportes:['📈','Reportes','Consultas y exportación','Consulta los reportes disponibles del inventario y las opciones de exportación de información de la demostración.',['Consultas','Resumen','Exportación']]
};
const report=[
 ['📖','Introducción','Contexto del proyecto','Presenta la importancia del control de inventarios y la finalidad del sistema web de BOLIVIAMAR.',['Contexto','Inventario']],
 ['🏢','Antecedentes','Historia y situación de la empresa','Describe los antecedentes de BOLIVIAMAR y la situación que motiva la mejora del control de existencias.',['Empresa','Situación actual']],
 ['⚠️','Planteamiento del Problema','Dificultades identificadas','Explica los problemas de consistencia de existencias, trazabilidad, alertas y elaboración de reportes.',['Problemática','Consecuencias']],
 ['🌳','Árbol de Problemas','Causas y efectos','Visualiza el problema central del inventario y su relación con las causas y consecuencias identificadas.',['Causas','Problema central','Efectos']],
 ['❓','Formulación del Problema','Pregunta de investigación','Presenta la pregunta principal que orienta el desarrollo del sistema de inventario.',['Pregunta central','Alcance']],
 ['🎯','Propósito del Estudio','Finalidad del sistema','Explica para qué se propone la herramienta tecnológica y qué necesidades de la empresa busca atender.',['Propósito','Mejoras']],
 ['🏁','Objetivo General','Meta principal','Conoce el objetivo general de desarrollar e implementar un sistema web de gestión de inventario.',['Meta','Desarrollo']],
 ['📋','Objetivos Específicos','Actividades y resultados esperados','Consulta los objetivos relacionados con requisitos, modelos, base de datos, módulos, reportes y seguridad.',['Requisitos','Implementación','Seguridad']],
 ['🔎','Métodos e Instrumentos','Investigación del proyecto','Describe el método de investigación y los instrumentos utilizados para analizar los procesos de inventario.',['Métodos','Entrevistas','Documentos']],
 ['💡','Justificación','Importancia del proyecto','Expone los beneficios esperados desde las perspectivas técnica, económica, operativa y social.',['Técnica','Económica','Operativa']],
 ['📐','Alcances y Límites','Qué incluye el sistema','Distingue las funcionalidades contempladas y los procesos que quedan fuera del alcance del proyecto.',['Alcances','Exclusiones']],
 ['🗓️','Planificación y Marco Teórico','Etapas y conceptos','Consulta las fases de desarrollo y los fundamentos de kardex, transacciones y arquitectura MVC.',['Planificación','RUP','MVC']],
 ['📝','Requisitos Funcionales y No Funcionales','Necesidades del sistema','Revisa las funciones del inventario y las condiciones de rendimiento, seguridad y usabilidad.',['Requisitos funcionales','Seguridad','Usabilidad']],
 ['📏','Reglas de Negocio','Condiciones de operación','Consulta las reglas de stock, transferencias, trazabilidad e integridad del inventario.',['Validaciones','Stock','Auditoría']],
 ['🌐','Diagrama de Contexto','Entidades externas','Visualiza cómo interactúan el administrador, el encargado de almacén, la gerencia y los proveedores con el sistema.',['Actores','Flujos de información']],
 ['🔀','Diagrama de Flujo de Datos','Procesos y flujos','Explora cómo circula la información entre los procesos, entidades y almacenes de datos del inventario.',['DFD','Procesos','Datos']],
 ['🗃️','Diccionario de Datos y MER','Modelo de información','Consulta las entidades, sus atributos y las relaciones que estructuran la información del sistema.',['Entidades','Relaciones','Datos']],
 ['👥','Actores y Casos de Uso','Funciones por usuario','Identifica los actores del sistema y las operaciones principales que pueden realizar.',['Actores','Casos de uso','Permisos']],
 ['🧩','Diagrama de Clases UML','Estructura orientada a objetos','Visualiza las clases del dominio, sus atributos, métodos y relaciones.',['Clases','Atributos','Métodos']],
 ['🔄','Diagrama de Actividades','Flujo de una salida','Sigue el proceso de despacho de productos, desde la solicitud hasta la validación y confirmación.',['Actividades','Validación','Despacho']],
 ['⏱️','Diagramas de Secuencia y Estados','Interacciones y estados del stock','Consulta la secuencia de operaciones para una salida y los estados que puede tener una existencia.',['Secuencia','Estados','Stock']],
 ['🏗️','Arquitectura de Software e Interfaces','Diseño de la solución','Conoce las capas de presentación, negocio y datos de la arquitectura MVC propuesta.',['MVC','Capas','Interfaces']]
];
// Vista previa informativa al pasar el cursor sobre las opciones del menú lateral.
// No se abre al navegar ni al cargar la página.
const overlay=document.createElement('div');
overlay.className='guide-overlay guide-hover-preview';
overlay.hidden=true;
overlay.setAttribute('aria-hidden','true');
overlay.innerHTML=`<section class="guide-dialog"><div class="guide-heading"><span class="guide-emoji" aria-hidden="true"></span><div><h2 id="guide-title"></h2><p class="guide-subtitle"></p></div></div><div class="guide-rule"></div><p id="guide-description"></p><div class="guide-tags"></div></section>`;
document.body.appendChild(overlay);
let pending=null;
function close(){clearTimeout(pending);overlay.hidden=true;}
function show(data){if(!data)return;const [emoji,title,subtitle,description,tags]=data;
 overlay.querySelector('.guide-emoji').textContent=emoji;
 overlay.querySelector('#guide-title').textContent=title;
 overlay.querySelector('.guide-subtitle').textContent=subtitle;
 overlay.querySelector('#guide-description').textContent=description;
 overlay.querySelector('.guide-tags').replaceChildren(...tags.map(t=>{const span=document.createElement('span');span.textContent=t;return span;}));
 overlay.hidden=false;
}
function entryFor(a){const href=a.getAttribute('href')||'';
 const section=/#sec-(\d+)/.exec(href);
 if(section && (location.pathname.toLowerCase().endsWith('informe.html')||href.includes('informe.html')))return report[Number(section[1])-1];
 if(href.includes('informe.html'))return ['📚','Informe académico','Documentación del proyecto','Consulta las 22 secciones del informe de BOLIVIAMAR, sus requisitos, modelos y diagramas.',['Marco teórico','Análisis estructurado','Orientado a objetos']];
 if(a.classList.contains('report-home'))return entries.inicio;
 const key=a.dataset.nav || (/^#([\w-]+)$/.exec(href)||[])[1];
 return entries[key]||null;
}
const sidebarSelector='.sidebar-nav a, .report-sidebar .report-link, .report-sidebar .report-home';
document.querySelectorAll(sidebarSelector).forEach(a=>{
 const data=entryFor(a);if(!data)return;
 a.addEventListener('mouseenter',()=>{clearTimeout(pending);pending=setTimeout(()=>show(data),220);});
 a.addEventListener('mouseleave',close);
 a.addEventListener('click',close);
 // Accesibilidad para navegación por teclado.
 a.addEventListener('focus',()=>show(data));
 a.addEventListener('blur',close);
});
window.addEventListener('scroll',close,{passive:true});
window.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
})();
