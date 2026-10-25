// Prévia local da foto de perfil escolhida. A imagem não é enviada para nenhum servidor.
const upload = document.getElementById('avatar-upload');
const avatar = document.getElementById('avatar');
let currentPreview;
upload.addEventListener('change', () => {
  const file = upload.files && upload.files[0];
  if (!file || !file.type.startsWith('image/')) return;
  if (currentPreview) URL.revokeObjectURL(currentPreview);
  currentPreview = URL.createObjectURL(file);
  avatar.src = currentPreview;
});
