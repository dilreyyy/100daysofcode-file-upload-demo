const filePickerElement = document.getElementById('user-image');
const previewImageElement = document.getElementById('img-preview');

function showPreview(){
    const files = filePickerElement.files;
    // console.log(files);

    if(!files || files.length === 0){
        previewImageElement.display = "none";
        // console.log('yes');
        return;
    }

    const pickedFile = files[0];
    previewImageElement.src = URL.createObjectURL(pickedFile);
    previewImageElement.style.display =  "block";
    console.dir(previewImageElement);
}

filePickerElement.addEventListener('change', showPreview);