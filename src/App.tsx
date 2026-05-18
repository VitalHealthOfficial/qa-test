import ActionButton from "./components/ActionButton";
import { GitPullRequest, Terminal, CheckCircle2 } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-secondary text-white-system p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-10">
        <header className="border-b border-secondary-light-2 pb-8">
          <h1 className="title text-primary mb-2">
            Prueba Técnica: QA Automation
          </h1>
          <h2 className="subtitle text-gray-system-light-2">
            Frontend Testing con React + Vitest
          </h2>
        </header>

        <section className="bg-secondary-light-1 p-8 rounded-xl border border-secondary-light-2 shadow-lg">
          <h3 className="heading text-white-system mb-4 flex items-center gap-2">
            ¡Bienvenido/a!
          </h3>
          <p className="body-base text-gray-system-light-4 mb-4">
            La prueba consiste en implementar las pruebas unitarias para nuestro
            componente base de interfaz de usuario (
            <code className="bg-secondary-light-2 text-primary px-2 py-1 rounded ml-1">
              ActionButton
            </code>
            ) y proponer un <strong>Pull Request</strong> documentando tus
            hallazgos, herramientas y decisiones.
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="heading text-primary flex items-center gap-2">
            <Terminal size={24} />
            Instrucciones Paso a Paso
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-secondary-light-1 p-6 rounded-lg border border-secondary-light-2">
              <h4 className="body-strong text-white-system mb-3 flex items-center gap-2">
                <span className="bg-primary text-white-system w-7 h-7 rounded-full flex items-center justify-center text-sm">
                  1
                </span>
                Preparación
              </h4>
              <ul className="body-small text-gray-system-light-3 list-disc pl-5 space-y-2">
                <li>
                  Haz un <strong>Fork</strong> de este repositorio a tu cuenta
                  personal.
                </li>
                <li>Clona tu Fork en tu máquina local.</li>
                <li>
                  Instala las dependencias usando{" "}
                  <code className="text-primary font-mono">npm install</code>.
                </li>
              </ul>
            </div>

            <div className="bg-secondary-light-1 p-6 rounded-lg border border-secondary-light-2">
              <h4 className="body-strong text-white-system mb-3 flex items-center gap-2">
                <span className="bg-primary text-white-system w-7 h-7 rounded-full flex items-center justify-center text-sm">
                  2
                </span>
                Flujo de Trabajo (Git)
              </h4>
              <ul className="body-small text-gray-system-light-3 list-disc pl-5 space-y-2">
                <li>
                  Crea una nueva rama a partir de{" "}
                  <code className="text-primary font-mono">main</code>.
                </li>
                <li>
                  Usa una nomenclatura descriptiva que incluya tu nombre (ej.{" "}
                  <code className="text-primary font-mono">
                    qa-test/tu-nombre
                  </code>
                  ).
                </li>
                <li>Realiza commits descriptivos.</li>
              </ul>
            </div>

            <div className="bg-secondary-light-1 p-6 rounded-lg border border-secondary-light-2 md:col-span-2">
              <h4 className="body-strong text-white-system mb-3 flex items-center gap-2">
                <span className="bg-primary text-white-system w-7 h-7 rounded-full flex items-center justify-center text-sm">
                  3
                </span>
                El Reto: Pruebas Unitarias
              </h4>
              <p className="body-small text-gray-system-light-3 mb-4">
                Abre el archivo{" "}
                <code className="text-primary font-mono bg-secondary px-1.5 py-0.5 rounded">
                  src/components/ActionButton.test.tsx
                </code>{" "}
                y escribe pruebas usando Vitest que cubran al menos:
              </p>
              <ul className="body-small text-gray-system-light-3 list-disc pl-5 space-y-2 mb-6">
                <li>
                  Verificar el <strong>renderizado</strong> del texto (label) y
                  el ícono si se proporciona.
                </li>
                <li>
                  Simular la <strong>interactividad</strong> (eventos de click).
                </li>
                <li>
                  Verificar que se apliquen las clases CSS correctas al usar
                  variantes como <code className="text-error">delete</code>.
                </li>
              </ul>

              <div className="p-6 bg-secondary rounded-xl border border-dashed border-gray-system-light-2">
                <p className="body-small-strong text-gray-system-light-1 mb-4 text-center">
                  Zona de Pruebas: Así se ve el componente actualmente
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <ActionButton
                    label="Guardar cambios"
                    variant="primary"
                    icon={CheckCircle2}
                  />
                  <ActionButton label="Cancelar" variant="secondary" />
                  <ActionButton label="Eliminar" variant="delete" />
                  <ActionButton label="Editar" variant="edit-secondary" />
                </div>
              </div>
            </div>

            <div className="bg-secondary-light-1 p-6 rounded-lg border border-secondary-light-2 md:col-span-2">
              <h4 className="body-strong text-white-system mb-3 flex items-center gap-2">
                <span className="bg-primary text-white-system w-7 h-7 rounded-full flex items-center justify-center text-sm">
                  4
                </span>
                Entrega y Documentación
              </h4>
              <p className="body-small text-gray-system-light-3">
                Sube tu rama y abre un <strong>Pull Request</strong> hacia
                nuestro repositorio principal. ¡La calidad de tu redacción y
                mostrar capturas de pantalla cuentan! Explica brevemente qué
                herramientas usaste y cómo estructuraste tus pruebas.
              </p>
            </div>
          </div>
        </section>

        <footer className="text-center pt-8 border-t border-secondary-light-2 pb-10">
          <div className="inline-flex items-center gap-3 bg-secondary-light-1 px-6 py-3 rounded-xl border border-gray-system-light-1">
            <Terminal className="text-info" size={20} />
            <span className="body-strong">
              Ejecuta las pruebas en tu consola:
            </span>
            <code className="text-primary font-mono text-lg ml-2">
              npm test
            </code>
          </div>
          <p className="body-small text-gray-system mt-6 flex items-center justify-center gap-2">
            <GitPullRequest size={16} /> Esperamos ver tu Pull Request pronto.
            ¡Mucho éxito!
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
