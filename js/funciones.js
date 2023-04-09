export function mostrarAlerta(mensaje){
    const alerta = document.querySelector('.bg-red-100');
    if (!alerta) {
        const alerta = document.createElement('P')
        alerta.classList.add('bg-red-100','borde-red-400','text-red-700','px-4','py-3','rounded','max-w-lg','mx-auto','mt-6','text-center');

        alerta.innerHTML = `
        <strong class="front-bould">Error!</strong>
        <span class="block sm:inline">${mensaje}</span>
        `;
        
        const formulario = document.querySelector('#formulario')
        formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 2000);
    }
}

export function validar(obj) {
    return !Object.values(obj).every(imput => imput !=='')    
 }
