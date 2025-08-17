// قسم دروس الفيديو
  const lessons = [
    { id: "dQw4w9WgXcQ", title: "درس 1: مقدمة في HTML" },
    { id: "kXYiU_JCYtU", title: "درس 2: أساسيات CSS" },
    { id: "3JZ_D3ELwOQ", title: "درس 3: JavaScript للمبتدئين" }
  ];

  const lessonsContainer = document.getElementById('lessonsContainer');

  lessons.forEach(lesson => {
    const card = document.createElement('div');
    card.className = 'bg-white p-4 rounded shadow hover:shadow-lg transition';

  card.innerHTML = `
    <iframe class="w-full h-64 mb-2" 
      src="https://www.youtube.com/embed/${lesson.id}" 
      frameborder="0" allowfullscreen></iframe>
    <p class="text-center font-semibold">${lesson.title}</p>
  `;

    lessonsContainer.appendChild(card);
  });