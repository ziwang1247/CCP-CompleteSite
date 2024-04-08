//alt text display
const items = document.querySelectorAll(".image-container");

    items.forEach(item =>{
        const photo = item.querySelector('img');
        const altText = photo.getAttribute('alt');

        const textContainer = document.createElement('div');
        textContainer.classList.add('text-container');
        textContainer.innerHTML = altText;
        item.appendChild(textContainer);

        photo.addEventListener("mousemove", function(event){
            textContainer.classList.add("active");

            textContainer.style.left = `${event.pageX}px`;
            textContainer.style.top = `${event.pageY}px`;

        });

        photo.addEventListener("mouseout", function(event){
            textContainer.classList.remove("active");
        });
    });

//music player
    const music = document.querySelector('#background-music');
    const controlBtn = document.querySelector('#music-control');

    controlBtn.addEventListener('click', function () {
        if (music.paused || music.ended) {
            music.play();
            controlBtn.textContent = 'Pause Music;))';
        } else {
            music.pause();
            controlBtn.textContent = 'Play Music;))';
        }
    });
