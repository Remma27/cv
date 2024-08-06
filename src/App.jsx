import React from 'react';
import { Phone, Mail, Linkedin, User, BookOpen, Briefcase, Award, Globe, Star } from 'lucide-react';
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const CVVisual = () => {
  const exportToPDF = () => {
    const input = document.getElementById('cv-content');
    html2canvas(input, { scale: 1 }) // Reduje la escala para mejorar la calidad.
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4'
        });
        const imgWidth = 190; // Ajusté el ancho para dejar márgenes.
        const pageHeight = 297;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;

        pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight); // Añadí márgenes.
        heightLeft -= pageHeight;
        while (heightLeft >= 0) {
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 10, -heightLeft + 10, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }
        pdf.save("cv.pdf");
      });
  };

  const printCV = () => {
    window.print();
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white text-black font-sans text-xs">
      <div className="mb-4 flex justify-between">
        <button onClick={exportToPDF} className="mr-2 px-2 py-1 bg-blue-500 text-white rounded text-xs">Exportar a PDF</button>
        <button onClick={printCV} className="px-2 py-1 bg-green-500 text-white rounded text-xs">Imprimir/Guardar como PDF</button>
      </div>

      <div id="cv-content" className="text-xs">
        <header className="mb-2 border-b pb-1">
          <h1 className="text-xl font-bold mb-2">EMMANUEL DE JESÚS RODRÍGUEZ SOLANO</h1>
          <div className="flex flex-wrap text-xs gap-1">
            <div className="flex items-center"><Phone size={14} className="mr-1" />Telefono: (506) 7214 9100</div>
            <div className="flex items-center"><Mail size={14} className="mr-1" />Correo: emmanuelrsolano27@gmail.com</div>
            <div className="flex items-center"><Linkedin size={14} className="mr-1" /><a href="https://www.linkedin.com/in/emmanuel-rodríguez-solano-98961a2ba" target="_blank" rel="noopener noreferrer">LinkedIn: https://www.linkedin.com/in/emmanuel-rodríguez-solano-98961a2ba</a></div>
            <div className="flex items-center"><Globe size={14} className="mr-1" /><a href="https://github.com/Remma27" target="_blank" rel="noopener noreferrer">GitHub: https://github.com/Remma27</a></div>
          </div>
        </header>

        <section className="mb-2">
          <h2 className="text-lg font-bold mb-1 flex items-center"><User size={16} className="mr-1" />PERFIL PROFESIONAL</h2>
          <p className="text-xs">
            Estudiante avanzado en Ingeniería en Tecnologías de Información con habilidades en desarrollo web y móvil. Experiencia en proyectos universitarios y certificaciones en redes Cisco.
          </p>
        </section>

        <section className="mb-2">
          <h2 className="text-lg font-bold mb-1 flex items-center"><BookOpen size={16} className="mr-1" />EDUCACIÓN</h2>
          <div className="text-xs">
            <p className="font-semibold">Diplomado Universitario en Ingeniería en Tecnologías de Información</p>
            <p>Universidad Técnica Nacional, Enero 2022 - Mayo 2024</p>
            <p className="font-semibold">Bachillerato Universitario en Ingeniería en Tecnologías de Información</p>
            <p>Universidad Técnica Nacional, Mayo 2024 - Actualidad</p>
          </div>
        </section>

        <section className="mb-2">
          <h2 className="text-lg font-bold mb-1 flex items-center"><Star size={16} className="mr-1" />HABILIDADES Y LOGROS</h2>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <h3 className="font-semibold mb-1">Habilidades Técnicas</h3>
              <ul className="list-disc list-inside">
                <li>Python, TypeScript, JavaScript, Java</li>
                <li>Angular, React</li>
                <li>Express.js, Django, Flask</li>
                <li>MongoDB, MySQL, SQL, Oracle</li>
                <li>Android Studio (Kotlin), React Native</li>
                <li>AWS, Docker, Git, GitHub</li>
                <li>Windows, Linux (Ubuntu, Debian, Kali)</li>
                <li>VirtualBox, VMware</li>
                <li>SCRUM, Firebase, APIs RESTful</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Habilidades Blandas</h3>
              <div className="flex flex-wrap gap-1">
                <div className="px-2 py-1 border border-gray-300 rounded text-xs">Comunicación efectiva</div>
                <div className="px-2 py-1 border border-gray-300 rounded text-xs">Resolución de problemas</div>
                <div className="px-2 py-1 border border-gray-300 rounded text-xs">Adaptabilidad</div>
                <div className="px-2 py-1 border border-gray-300 rounded text-xs">Gestión del tiempo</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-2">
          <h2 className="text-lg font-bold mb-1 flex items-center"><Award size={16} className="mr-1" />CERTIFICACIONES</h2>
          <ul className="list-disc list-inside text-xs">
            <li>CCNAv7 I TI 1-2023 - A: Fundamentos de redes, configuración básica de switches y routers.</li>
            <li>CCNAv7 II TI 2-2023 - F: Switching, routing y wireless avanzado.</li>
            <li>CCNAv7 III TI 3-2023 - G: Redes empresariales, seguridad y automatización.</li>
          </ul>
        </section>

        <section className="mb-2">
          <h2 className="text-lg font-bold mb-1 flex items-center"><Globe size={16} className="mr-1" />IDIOMAS</h2>
          <ul className="list-disc list-inside text-xs">
            <li>Español: Nativo</li>
            <li>Inglés: Intermedio</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-1 flex items-center"><Star size={16} className="mr-1" />INTERESES PROFESIONALES</h2>
          <p className="text-xs">
            Apasionado por el desarrollo web y móvil, con interés en tecnologías emergentes, soluciones en la nube y seguridad informática. Comprometido con el aprendizaje continuo y la aplicación de metodologías ágiles en el desarrollo de software.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CVVisual;
