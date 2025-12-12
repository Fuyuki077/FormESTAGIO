import 'react'
import './style.css'
import './script.js'
import '../../App.css'

function InFile() {
    return (
<div className='container'>
    <div className="file-input-container">
        <input type="file" id="fileInput" className="file-input">
        <label for="fileInput" className="file-label">
        <svg className="upload-icon" viewBox="0 0 24 24">
        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
        </svg>
        <span className="file-text">Escolher arquivo</span>
        <span className="file-name">Nenhum arquivo selecionado</span>
        </label>
        </input>
    </div>
</div>
    )
}

export default InFile