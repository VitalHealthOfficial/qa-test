# Prueba Técnica: QA
**Frontend Testing con React + Vitest**

¡Bienvenido/a!

La prueba consiste en implementar las pruebas unitarias para nuestro componente base de interfaz de usuario (`ActionButton`) y proponer un **Pull Request** documentando tus hallazgos, herramientas y decisiones.

**Importante**: *Toma capturas de pantalla de todo tu proceso para la redacción del Pull Request.*


---

## 📋 Instrucciones Paso a Paso

### 1️⃣ Preparación
Para comenzar, necesitas preparar tu entorno de desarrollo local:
1. Haz un **Fork** de este repositorio a tu cuenta personal.
2. **Clona** tu Fork en tu máquina local.
3. Instala las dependencias ejecutando el siguiente comando en tu terminal:
   ```bash
   npm install
    ```
### 2️⃣ Flujo de Trabajo (Git)

Queremos evaluar también tus buenas prácticas usando Git:

1. Crea una nueva rama a partir de `main`.
2. Usa una nomenclatura descriptiva que incluya tu nombre (ej. `qa-test/tu-nombre`).
3. Realiza **commits atómicos y descriptivos** a medida que avanzas.

### 3️⃣ El Reto: Pruebas Unitarias

Navega al archivo `src/components/ActionButton.test.tsx`.

Tu objetivo es escribir pruebas utilizando **Vitest** y **React Testing Library** que cubran, como mínimo, los siguientes escenarios:

* **Renderizado:** Verificar que el componente muestra correctamente el texto (`label`) y el ícono (si se proporciona).
* **Interactividad:** Simular eventos de usuario (ej. clics) y asegurar que las funciones correspondientes se ejecutan correctamente.
* **Estilos/Variantes:** Verificar que se apliquen las clases CSS correctas dependiendo de la variante enviada por *props* (por ejemplo, si se usa la variante `delete`, debe aplicar los estilos de error).

> **Tip:** Puedes ver cómo funciona el componente actualmente iniciando la aplicación con `npm run dev`.

### 4️⃣ Entrega y Documentación

Una vez que tus pruebas estén listas y pasando:

1. Sube tu rama a tu repositorio de GitHub.
2. Abre un **Pull Request (PR)** hacia la rama `main` de nuestro repositorio original.
3. **Documenta tu PR:** ¡La calidad de tu redacción y mostrar capturas de pantalla cuentan! Explica brevemente:
* Qué herramientas usaste (editor, extensiones, etc.).
* Cómo estructuraste tus pruebas.


---

## 🚀 Ejecución de Pruebas

Para ejecutar la suite de pruebas localmente y verificar tu trabajo, utiliza el siguiente comando:

```bash
npm test
```

---

¡Esperamos ver tu Pull Request pronto! **¡Mucho éxito!** 👍
