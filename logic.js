document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("file_input");
    const canvas = document.getElementById("image_canvas");
    const ctx = canvas.getContext("2d");
    const formatSelect = document.getElementById("format_select");
    const downloadBtn = document.getElementById("download_button");

    let currentImage = null; // Stores the loaded image

    fileInput.addEventListener("change", function (event) {
        const file = event.target.files[0];

        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const img = new Image();
                img.onload = function () {
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0, img.width, img.height);
                    currentImage = img;
                };
                img.src = e.target.result;
            };

            reader.readAsDataURL(file);
        } else {
            alert("Please upload a valid image file.");
        }
    });

    downloadBtn.addEventListener("click", function () {
        if (!currentImage) {
            alert("Please upload an image first.");
            return;
        }

        const selectedFormat = formatSelect.value;
        const mimeType = `image/${selectedFormat}`;
        const imageData = canvas.toDataURL(mimeType);

        const link = document.createElement("a");
        link.href = imageData;
        link.download = `converted_image.${selectedFormat}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        clearCanvas();
        currentImage = null;
        fileInput.value = "";
    });
});

function clearCanvas() {
    const canvas = document.getElementById("image_canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow
//yellow yellow yellow yellow yellow yellow yellow yellow yellow