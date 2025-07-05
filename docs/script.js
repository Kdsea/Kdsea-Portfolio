document.addEventListener('DOMContentLoaded', () => {

    // codigo para o menu hamburguer
    const header = document.getElementById('box-cabecalho');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) { // a classe 'scrolled' é adicionada quando a página é rolada mais de 50px
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- Lógica para animação das seções ao aparecerem na tela ---
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // a animação só acontece uma vez
            }
        });
    }, {
        threshold: 0.1 // A animação começa quando 10% da seção está visível
    });
    sections.forEach(section => {
        observer.observe(section);
    });

    // codigo para enviar mensagem via WhatsApp
    const form = document.getElementById('form-contato');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // remove o comportamento padrão do formulário

            const nome = document.getElementById('nome').value;
            const mensagem = document.getElementById('mensagem').value;
            const telefone = '5544998377476'; // Meu numero de WhatsApp

            const textoWhatsapp = `Olá! Vim através do seu portfólio.\n\n*Nome:* ${nome}\n*Mensagem:*\n${mensagem}`;
            const urlWhatsapp = `https://wa.me/${telefone}?text=${encodeURIComponent(textoWhatsapp)}`;

            window.open(urlWhatsapp, '_blank'); // Abre o whatsapp no navegador em um nova aba
        });
    }
});