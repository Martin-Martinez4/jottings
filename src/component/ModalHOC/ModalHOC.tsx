
import { ModalContainer } from "./ModalHOC.styles";
import { IWithChildern } from "../../types/TaskAndCategory.type";


const ModalHOC: React.FC<IWithChildern> = ({ children, visible }) => {

    return (
        <ModalContainer style={visible?{ display: "block" } : { display: "none" } } >
            {
                visible
                ?
                    children
                : 
                    ""
            }
        </ModalContainer>
    )
}

export default ModalHOC;


