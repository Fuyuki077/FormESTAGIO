document.getElementById('fileInput').addEventListener('change', function(e) {
  const fileName = e.target.files[0]?.name || 'Nenhum arquivo selecionado';
  document.querySelector('.file-name').textContent = fileName;
});