document.addEventListener('DOMContentLoaded', function() {
    const courses = [
        {
            id: 'course1',
            title: 'Práticas de Cultivo',
            description: 'Aprenda sobre técnicas de cultivo, desde a preparação do solo até a colheita. Este curso cobre tudo, desde o planejamento da plantação até a manutenção das culturas e a colheita.'
        },
        {
            id: 'course2',
            title: 'Gestão de Animais',
            description: 'Descubra como gerenciar a saúde e o bem-estar dos animais em uma fazenda. O curso inclui tópicos sobre alimentação, cuidados veterinários e manejo geral dos rebanhos.'
        },
        {
            id: 'course3',
            title: 'Tecnologias Emergentes',
            description: 'Explore as novas tecnologias que estão transformando a agropecuária. Aprenda sobre inovação em equipamentos, automação e técnicas avançadas para aumentar a eficiência e a produtividade.'
        }
    ];

    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const closeBtn = document.getElementById('closeBtn');

    document.querySelectorAll('.details-btn').forEach(button => {
        button.addEventListener('click', function() {
            const courseId = this.parentElement.id;
            const course = courses.find(c => c.id === courseId);
            if (course) {
                modalTitle.textContent = course.title;
                modalDescription.textContent = course.description;
                modal.style.display = 'block';
            }
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
