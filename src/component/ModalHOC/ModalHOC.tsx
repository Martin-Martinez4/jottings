
import { ModalContainer } from "./ModalHOC.styles";

interface IWithChildern{

    children: any;
    visible: boolean;
}

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


