import './style.css'
import './script.js'

function InFile() {
    return (
<div>
    <div class="file-input-container">
        <input type="file" id="fileInput" class="file-input">
        <label for="fileInput" class="file-label">
        <svg class="upload-icon" viewBox="0 0 24 24">
        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
        </svg>
        <span class="file-text">Escolher arquivo</span>
        <span class="file-name">Nenhum arquivo selecionado</span>
        </label>
        </input>
    </div>
</div>
    )
}

export default InFile