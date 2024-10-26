document.addEventListener('DOMContentLoaded', function () {
    const featureCards = document.querySelectorAll('.feature-card');
    
    const revealCards = () => {
        featureCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (cardTop < windowHeight - 100) {
                card.classList.add('show');
            }
        });
    };

    window.addEventListener('scroll', revealCards);

    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            item.classList.toggle('active');
            const toggle = question.querySelector('.faq-toggle');
            toggle.textContent = item.classList.contains('active') ? 'x' : '+';
        });
    });
});
