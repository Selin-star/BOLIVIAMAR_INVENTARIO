# BOLIVIAMAR S.R.L. — Demostración para GitHub Pages

Versión estática (HTML/CSS/JavaScript) del proyecto académico de inventario.

## Qué incluye
- Inicio público, panel administrativo, contacto de Juan Vargas.
- Productos, categorías, almacenes, proveedores, entradas, salidas, transferencias, kardex, alertas y reportes.
- Informe completo con los seis integrantes y diagramas Mermaid.
- Datos de ejemplo guardados en `localStorage` del navegador y exportación CSV.

## Publicar
1. Crea un repositorio en GitHub.
2. Sube **el contenido de esta carpeta** a la raíz del repositorio, especialmente `index.html`, `informe.html` y `assets/`.
3. Ve a **Settings > Pages**. En Build and deployment elige **Deploy from a branch**.
4. Selecciona rama `main` y carpeta `/(root)`. Guarda.
5. Espera a que GitHub indique el enlace del sitio y ábrelo.

## Avisos
Esta versión **no ejecuta PHP ni MySQL**, no autentica usuarios y no persiste registros entre dispositivos. Los cambios se guardan solo en el navegador usado y se pueden restaurar. No se debe usar para inventario real. El informe incluye Mermaid a través de un CDN; los diagramas requieren internet. Las bibliotecas Bootstrap/iconos también se cargan de CDNs.

El proyecto PHP/MySQL original debe mantenerse en otro lugar; este ZIP contiene solo archivos aptos para un repositorio público de demostración.
