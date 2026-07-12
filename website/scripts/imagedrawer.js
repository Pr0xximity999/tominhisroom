var endpoint = "image-carrousel"

fetch(`https://ichor.ivorylotus.dev/${endpoint}/?ls`)
    .then(response => response.json())
    .then(data => {
        var div = document.getElementById('gifCarrouselContents');
        var div = document.getElementById('gifCarrouselContents');
        var images = data.files;
        images.forEach(image => {
            var img = new Image();
            img.src = `https://ichor.ivorylotus.dev/${endpoint}/${image.href}`;
            img.className = 'gifCarrouselImage';
            div.appendChild(img);
        });
    })
    .catch(error => console.error("Error fetching image data: " + error))