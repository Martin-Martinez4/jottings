
import { CKEditor } from 'ckeditor4-react';
import { CKEditor4Type } from '../../types/CKEditor4.types';

const CKEditor4: React.FC<CKEditor4Type> = ({ inputHandler, initData, placeholder }) => {

    return(
        <CKEditor 
        initData={initData? initData : ""} 
        onChange={(e) => inputHandler(e)}
        type="classic"
        config={{
            extraPlugins: "editorplaceholder",
            editorplaceholder: placeholder? "Project Description" : "",
            toolbar: [
                ['Table'],
                [ 'Format', 'Font', 'FontSize' ],
                [ 'Bold', 'Italic' ],
                ['BulletedList', 'NumberedList'], 
                [ 'Undo', 'Redo' ],
    
            ],
            width: '75%',
        
        }} 
    />
    )
}

export default CKEditor4;


