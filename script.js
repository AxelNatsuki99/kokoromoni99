function showTexts() {
    // Crear una nueva ventana para los textos
    const newWindow = window.open("", "_blank", "width=600,height=600");
    newWindow.document.write('<html><head><title>Textos para Moni</title>');
    newWindow.document.write('<style>');
    
    // Estilos para la nueva ventana
    newWindow.document.write(`
        body {
            font-family: Arial, sans-serif;
            background-color: #f1f1f1;
            color: #333;
            padding: 20px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        h1 {
            color: #ff5e78;
            margin-bottom: 20px;
        }
        .text-list {
            list-style-type: none;
            padding: 0;
            margin: 0;
            width: 100%;
        }
        .text-list li {
            margin: 15px 0;
        }
        .text-list button {
            width: 100%;
            padding: 15px;
            background-color: #ff5e78;
            color: white;
            font-size: 16px;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .text-list button:hover {
            background-color: #ff2e50;
            transform: scale(1.05);
        }
        .text-list button:active {
            transform: scale(0.98);
        }
        .text-output {
            width: 100%;
            padding: 10px;
            margin-top: 15px;
            background-color: #ffffff;
            color: #333;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            display: none; /* Inicialmente oculto */
            word-wrap: break-word;
            opacity: 0;
            animation: fadeIn 0.5s forwards;
        }
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `);
    
    newWindow.document.write('</style></head><body>');
    newWindow.document.write('<h1>De tu Kokoro ❤️</h1>');
    
    // Lista de textos y sus nombres de botones
    const textos = [
        { texto: 'Entonces andarás por tu camino confiadamente, Y tu pie no tropezará. (Proverbios 3:23)', nombre: 'Proverbios 3:23' },
        { texto: 'He aquí yo envío mi Ángel delante de ti para que te guarde en el camino, y te introduzca en el lugar que yo he preparado. (Éxodo 23:20)', nombre: 'Promesa de Dios: Éxodo 23:20' },
        { texto: 'Y Jehová va delante de ti; él estará contigo, no te dejará, ni te desamparará; no temas ni te intimides. (Deuteronomio 31:8)', nombre: 'Confianza en Dios: Deuteronomio 31:8' },
        { texto: 'Entonces andarás por tu camino confiadamente, Y tu pie no tropezará. Cuando te acuestes, no tendrás temor, Sino que te acostarás, y tu sueño será grato. (Proverbios 3:23-24)', nombre: 'Paz en el descanso: Proverbios 3:23-24' },
        { texto: 'No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia. (Isaías 41:10)', nombre: 'Fuerza divina: Isaías 41:10' },
        { texto: 'He aquí, hago algo nuevo, ahora acontece; ¿no lo percibís? Aun en los desiertos haré camino {y} ríos en el yermo. (Isaías 43:19)', nombre: 'Nuevo camino: Isaías 43:19' },
        { texto: 'Y el hombre estaba maravillado de ella, callando, para saber si Jehová había prosperado su viaje, o no. (Génesis 24:21)', nombre: 'Maravilla en el viaje: Génesis 24:21' },
        { texto: 'E hizo Jacob voto, diciendo: Si fuere Dios conmigo, y me guardare en este viaje en que voy, y me diere pan para comer y vestido para vestir. (Génesis 28:20)', nombre: 'Voto de fe: Génesis 28:20' },
        { texto: '“La distancia es solo una prueba del amor verdadero que siento por ti; nuestra espera valdrá la pena.” “Amor mío, aunque estés lejos, no sales ni un minuto de mis pensamientos”. Te amaría de cualquier forma, en cualquier mundo, a cualquier distancia. Leerte y poder escucharte, a pesar de la distancia, alimenta mi alma.', nombre: 'Pensamientos de Axel Adam' }
    ];

    // Crear una lista para los botones
    newWindow.document.write('<ul class="text-list">');

    // Crear un botón para cada texto
    textos.forEach(({ texto, nombre }, index) => {
        const listItem = newWindow.document.createElement('li');
        const button = newWindow.document.createElement('button');
        button.textContent = nombre;
        
        // Crear un div donde el texto se mostrará debajo del botón
        const textOutput = newWindow.document.createElement('div');
        textOutput.classList.add('text-output');
        textOutput.textContent = texto;
        
        // Inicialmente el texto estará oculto
        textOutput.style.display = 'none';

        button.onclick = () => {
            // Mostrar el texto debajo del botón cuando se hace clic
            textOutput.style.display = 'block';
            
            // Animación del texto apareciendo
            textOutput.style.animation = 'fadeIn 0.5s forwards';
            
            // Insertar el texto debajo del botón
            listItem.appendChild(textOutput);
        };
        
        listItem.appendChild(button);
        newWindow.document.querySelector('.text-list').appendChild(listItem);
    });

    newWindow.document.write('</ul>');
    newWindow.document.write('</body></html>');
}
