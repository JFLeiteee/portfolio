import downloadIcon from "../assets/img/download-icon.png"
import closeIcon from '../assets/img/close-icon.png'
import { Context } from "../context/Context"
import { useContext } from "react"

export default function modal() {

    const {handleModal} = useContext(Context)

    return(
        <div class="modal">
            <h1>Download</h1>
            <img src={closeIcon} alt="close" id="close" onClick={handleModal}/>
            <div class="modal-content">
                <div class="l-side">
                    <h3>Portuguese Curriculum:</h3>
                    <a href="../../public/Curriculo.pdf" download="currículo" class="download-btn">
                        <img src={downloadIcon} alt="icon" class="icon" />
                    </a>
                </div>
                <div class="r-side">
                    <h3>English Curriculum:</h3>
                    <a href="../../public/Curriculum.pdf" download="curriculum" class="download-btn">
                        <img src={downloadIcon} alt="icon" class="icon" />
                    </a>
                </div>
            </div>
        </div>
    )
}