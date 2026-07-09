/* ========== ESQUEMA ICONOGRAFICO ========== */
const iconoData = [
  { id:1, title:"Entendimiento del Cliente", short:"Conocer entidad, entorno y marco legal",
    desc:"El auditor debe obtener un entendimiento suficiente de la entidad y su entorno, incluyendo su estructura de control interno, para identificar y evaluar los riesgos de errores materiales en los estados financieros. Esto incluye el conocimiento del sector, los objetivos, las estrategias y las mediciones del desempeno." },
  { id:2, title:"Identificar Riesgos", short:"Detectar errores materiales potenciales",
    desc:"Se deben identificar los riesgos de errores materiales a traves del entendimiento de la entidad y su entorno. Esto incluye riesgos inherentes y de control, considerando fraudes, errores y circunstancias especiales que puedan afectar la presentacion de los estados financieros." },
  { id:3, title:"Determinar Materialidad", short:"Definir importancia relativa",
    desc:"La materialidad debe establecerse en la planificación para determinar la naturaleza, momento y extension de los procedimientos de auditoría. Se define considerando tanto la cuantia como la naturaleza de los errores que podrian influir en las decisiones de los usuarios." },
  { id:4, title:"Asignar Recursos", short:"Personal, tiempo y tecnología",
    desc:"El auditor debe asignar los recursos humanos, tecnologicos y de tiempo necesarios para ejecutar la auditoría con la calidad requerida, considerando la experiencia del equipo y la complejidad del encargo." },
  { id:5, title:"Definir Estrategia", short:"Alcance, momento y dirección",
    desc:"La estrategia global de auditoría establece el alcance, momento y dirección del trabajo, y sirve de guia para desarrollar el plan de auditoría detallado." },
  { id:6, title:"Documentar", short:"Registrar decisiones y cambios",
    desc:"El auditor debe documentar la estrategia global de auditoría, el plan de auditoría y cualquier cambio significativo realizado durante el desarrollo del encargo. La documentación debe ser suficiente para permitir la comprensión del trabajo realizado." },
  { id:7, title:"Estrategia Global", short:"Alcance, momento y dirección",
    desc:"La estrategia global establece el alcance, el momento y la dirección de la auditoría. Define los recursos necesarios, el enfoque general y como se abordaran los riesgos identificados a nivel de estados financieros." },
  { id:8, title:"Actualizacion Continua", short:"Modificar según nueva información",
    desc:"La planificación es un proceso continuo e interactivo. El auditor debe actualizar la estrategia y el plan de auditoría a medida que obtiene nueva información durante la ejecución del trabajo, adaptando el enfoque según sea necesario." }
];

const icons = {
  1: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  2: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  3: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>',
  4: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  5: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
  6: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
  7: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  8: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>'
};

function renderIcono() {
  const grid = document.getElementById('icono-grid');
  grid.innerHTML = iconoData.map(item => `
    <div class="icono-card" onclick="selectIcono(${item.id})">
      <div class="icono-svg">${icons[item.id]}</div>
      <h4>${item.title}</h4>
      <p>${item.short}</p>
    </div>
  `).join('');
}
let selectedIcono = null;
function selectIcono(id) {
  selectedIcono = id;
  document.querySelectorAll('.icono-card').forEach((c,i) => {
    c.classList.toggle('selected', iconoData[i].id === id);
  });
  const item = iconoData.find(d => d.id === id);
  const panel = document.getElementById('icono-detail');
  panel.classList.add('show');
  document.getElementById('icono-detail-title').textContent = item.title;
  document.getElementById('icono-detail-desc').textContent = item.desc;
}

/* ========== LINEA DE TIEMPO ========== */
const timelineData = [
  { step:1, label:"Actividades previas", title:"Actividades previas a la planificación",
    desc:"Evaluar la continuidad del cliente, verificar ética e independencia, revisar terminos del encargo y determinar si se cuenta con la competencia y los recursos necesarios para realizar la auditoría." },
  { step:2, label:"Estrategia global", title:"Definir la estrategia global",
    desc:"Establecer el alcance, el momento y la dirección de la auditoría. Identificar las características del encargo, los informes a emitir, los criterios aplicables y los factores que determinan el enfoque de auditoría." },
  { step:3, label:"Plan de auditoría", title:"Desarrollar el plan de auditoría",
    desc:"Detallar los procedimientos de auditoría que se llevaran a cabo para obtener evidencia suficiente y apropiada. Incluye la asignación de recursos, la calendarización y la definicion de procedimientos especificos." },
  { step:4, label:"Evaluar riesgos", title:"Evaluar riesgos de errores materiales",
    desc:"Identificar y evaluar los riesgos de errores materiales a nivel de estados financieros y a nivel de aserciones. Considerar riesgos inherentes, de control y el riesgo de fraude." },
  { step:5, label:"Materialidad", title:"Determinar la materialidad",
    desc:"Definir los umbrales de materialidad para los estados financieros en su conjunto, asi como los niveles de materialidad para clases de transacciones, saldos de cuentas y revelaciones específicas." },
  { step:6, label:"Documentar y actualizar", title:"Documentar y actualizar el plan",
    desc:"Documentar la estrategia y el plan de auditoría, y modificar ambos durante la ejecución si surgen nuevos riesgos o circunstancias que requieran ajustar el enfoque inicial." }
];

function renderTimeline() {
  const nodes = document.getElementById('timeline-nodes');
  nodes.innerHTML = timelineData.map((item,i) => `
    <div class="timeline-node" onclick="selectTimeline(${i})" data-idx="${i}">
      <div class="node-circle">${item.step}</div>
      <div class="node-label">${item.label}</div>
    </div>
  `).join('');
}
function selectTimeline(idx) {
  document.querySelectorAll('.timeline-node').forEach((n,i) => {
    n.classList.toggle('active', i === idx);
  });
  const pct = (idx / (timelineData.length - 1)) * 100;
  document.getElementById('timeline-progress').style.width = pct + '%';
  const item = timelineData[idx];
  document.getElementById('timeline-detail').innerHTML = `<h4>${item.title}</h4><p>${item.desc}</p>`;
}

/* ========== DIAGRAMA DE FLUJO ========== */
const flowData = [
  { id:1, label:"Entender cliente", title:"Entender al cliente y su entorno",
    desc:"Obtener conocimiento de la entidad, su entorno, el marco regulatorio aplicable y el sistema de control interno. Esto es fundamental para identificar áreas de riesgo." },
  { id:2, label:"Identificar riesgos", title:"Identificar riesgos de errores materiales",
    desc:"Basado en el entendimiento del cliente, detectar eventos, condiciones y actividades que puedan generar errores materiales en los estados financieros." },
  { id:3, label:"Materialidad", title:"Determinar materialidad y umbral",
    desc:"Establecer la importancia relativa que determinara el enfoque, la extension y la naturaleza de los procedimientos de auditoría a realizar." },
  { id:4, label:"Estrategia global", title:"Definir estrategia global",
    desc:"Establecer el alcance, momento y dirección de la auditoría, considerando los riesgos identificados y los recursos disponibles." },
  { id:5, label:"Plan auditoría", title:"Desarrollar plan de auditoría",
    desc:"Detallar los procedimientos de auditoría, asignar recursos y establecer la calendarización del trabajo." },
  { id:6, label:"Ejecutar", title:"Ejecutar la auditoría",
    desc:"Implementar el plan de auditoría, realizar los procedimientos definidos, documentar los hallazgos y actualizar el plan según sea necesario." }
];

function renderFlow() {
  const row = document.getElementById('flow-row');
  let html = '';
  flowData.forEach((item,i) => {
    html += `<div class="flow-step" onclick="selectFlow(${i})" data-idx="${i}">${item.label}</div>`;
    if (i < flowData.length - 1) html += `<span class="flow-arrow">&rarr;</span>`;
  });
  row.innerHTML = html;
}
let flowInterval = null;
function selectFlow(idx) {
  if (flowInterval) { clearInterval(flowInterval); flowInterval = null; }
  document.querySelectorAll('.flow-step').forEach((s,i) => {
    s.classList.toggle('active', i === idx);
  });
  const item = flowData[idx];
  document.getElementById('flow-detail').innerHTML = `<h4>${item.title}</h4><p>${item.desc}</p>`;
}
function playFlow() {
  if (flowInterval) { clearInterval(flowInterval); flowInterval = null; }
  let i = 0;
  selectFlow(0);
  flowInterval = setInterval(() => {
    i++;
    if (i >= flowData.length) { clearInterval(flowInterval); flowInterval = null; return; }
    selectFlow(i);
  }, 1200);
}

renderIcono();
renderTimeline();
renderFlow();
