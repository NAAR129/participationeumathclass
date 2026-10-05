# EuMathClass: configuración paso a paso

## 1. Crear la hoja de Google
1. Abre una ventana de incógnito e inicia sesión únicamente con la cuenta de Google que usarás para el proyecto.
2. Entra en https://drive.google.com y selecciona Nuevo → Hojas de cálculo de Google → Hoja en blanco. Usa una hoja de Google, no un archivo Excel .xlsx.
3. Ponle el nombre **Inscripciones EuMathClass**.
4. En la primera fila escribe: A1 **Fecha**, B1 **Nombre**, C1 **Email**, D1 **País**.
5. Abajo, cambia el nombre de la pestaña a **registro**, en minúsculas y sin espacios.
6. Copia el ID de la hoja: es lo que aparece entre `/d/` y `/edit` en su enlace. Por ejemplo, en `https://docs.google.com/spreadsheets/d/ABC123/edit`, el ID es `ABC123`. Guarda la hoja en esa cuenta y no la publiques.

## 2. Crear el script
7. En la misma ventana de incógnito abre https://script.google.com y pulsa **Nuevo proyecto**. Esto evita el problema de entrar con otra cuenta a través de Extensiones.
8. Nombra el proyecto **Registro EuMathClass**.
9. Abre el archivo [Code.gs](google-apps-script/Code.gs) de este repositorio. Usa el botón de copiar el contenido del archivo (Copy raw file).
10. En Apps Script, borra el contenido inicial de Code.gs y pega el código copiado.
11. Busca `PEGA_AQUI_EL_ID_DE_TU_HOJA` y sustitúyelo por el ID del paso 6. Conserva las comillas.
12. Pulsa Guardar. No pulses Ejecutar para probar doPost: necesita los datos enviados por el formulario.

## 3. Publicar el script
13. Pulsa **Implementar → Nueva implementación** (Deploy → New deployment). Pulsa el engranaje y elige **Aplicación web** (Web app).
14. Configura **Ejecutar como: Yo** y **Quién tiene acceso: Cualquier persona**, incluyendo visitantes que no hayan iniciado sesión. Comprueba que “Yo” sea la cuenta propietaria de la hoja.
15. Pulsa **Implementar**. Si pide autorización, pulsa **Autorizar acceso**, elige esa misma cuenta y revisa y concede los permisos para tu propio script. Si aparece la advertencia de aplicación sin verificar, comprueba que es el proyecto que acabas de crear antes de continuar por **Avanzado → Ir a Registro EuMathClass**.
16. Copia la **URL de la aplicación web**, que comienza por `https://script.google.com/macros/s/` y termina en `/exec`. No copies el ID de implementación ni la URL del editor.

## 4. Conectar y publicar la página
17. Puedes enviar esa URL a Codex para que conecte el formulario. Para hacerlo tú: abre [config.js](config.js), pulsa el lápiz para editar y pega la URL entre las comillas vacías. Conserva el resto del código y pulsa **Commit changes**.
18. En el repositorio, abre **Settings → Pages**. En **Source** elige **Deploy from a branch**; en **Branch**, **main** y **/(root)**. Pulsa **Save**.
19. Espera a que se publique. La página será https://naar129.github.io/participationeumathclass/

## 5. Comprobar
20. Abre la página en una ventana nueva o recarga con Ctrl + F5. Selecciona un idioma.
21. Envía una inscripción de prueba y comprueba que aparece una fila nueva en la pestaña registro.
22. Debe aparecer la tarjeta de agradecimiento en el idioma seleccionado, con ambos logos. La dirección cambia a Google porque el script presenta la confirmación; el botón Volver a la página abre de nuevo el formulario.
23. Prueba el selector ES/EN/DE/IT/PT/HR/EL y la página en el celular. La primera visita usa el idioma del navegador si está entre los siete; otros idiomas usan inglés. Una elección manual se recuerda en ese navegador.

## Si algo falla
- Si no puedes abrir Apps Script o aparece otra cuenta, usa la misma ventana de incógnito con una sola cuenta.
- Si el formulario dice que las inscripciones aún no están abiertas, falta conectar la URL en config.js o se está viendo una copia antigua.
- Si Google solicita iniciar sesión a los visitantes, revisa el acceso “Cualquier persona” en la implementación.
- Si no guarda datos, comprueba el ID de la hoja, el nombre exacto de la pestaña registro y la cuenta con permiso para editarla. Consulta “Ejecuciones” en Apps Script.
- Si modificas el script después de publicarlo, usa Implementar → Gestionar implementaciones → lápiz → Versión: Nueva versión → Implementar. Guardar el código por sí solo no actualiza la versión publicada.
- No cambies el endpoint al de TeToM: cada proyecto usa su propia hoja y su propia implementación.
