document.addEventListener('DOMContentLoaded', () => {
    const emojis = document.querySelectorAll('.emoji');
    const textBox = document.createElement('div');
    textBox.className = 'text-box';
    textBox.innerHTML = `
        <p id="typewriter-text"></p>
        <span class="close-button" style="display:none;">X</span>
    `;
    document.body.appendChild(textBox);

    const typewriterText = document.getElementById('typewriter-text');
    const closeButton = textBox.querySelector('.close-button');

    const text = "Hello! My name is Tiago.\n\nWelcome to my not-very-conventional website.\n\nPart biography, part dump file.";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            typewriterText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 25); // Speed up typewriter effect
        } else {
            closeButton.style.display = 'block'; // Show close button after typing is done
        }
    }

    emojis.forEach(emoji => {
        emoji.addEventListener('click', (event) => {
            if (event.target.textContent === '🚀') {
                emojis.forEach(e => e.style.opacity = '0.25');
                typewriterText.innerHTML = '';
                textBox.style.display = 'block';
                index = 0;
                closeButton.style.display = 'none'; // Hide close button before typing starts
                typeWriter();
            }
        });
    });

    closeButton.addEventListener('click', () => {
        textBox.style.display = 'none';
        emojis.forEach(e => e.style.opacity = '1');
    });
});

