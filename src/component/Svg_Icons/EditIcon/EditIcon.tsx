
import { TaskAndCategoryType } from '../../../types/TaskAndCategory.type';

import { FC } from 'react';

import "../svg_icons.css";

import { SecondarySvg } from "../Svg.styles";

export const EditIcon: FC<TaskAndCategoryType> = ({ clicked, title, ...props }) => {

    return (

            <SecondarySvg onClick={clicked} className="svg pointer" x="0px" y="0px" viewBox="0 0 488.728 488.728" {...props}>
                {
                    title
                    ?
                    <title>{title}</title>
                    :
                    ""
                }
                <g>
                    <path d="M487.147,462.52l-36.4-167.6c0-4.2-2.1-7.3-5.2-10.4l-261.3-261.3c-20-22.9-74.3-38.1-112.4,0l-47.9,47.9
                        c-31,31-31,81.4,0,112.4l261.3,261.3c2.1,2.1,5.2,4.2,9.4,5.2l168.6,38.5C473.347,490.02,492.347,483.62,487.147,462.52z
                        M53.047,154.42c-15.6-15.6-15.6-39.6,0-55.2l47.9-47.9c15.2-15.2,40-15.2,55.2,0l238.4,238.4h-27.1c-11.4,0-20.8,9.4-20.8,20.8
                        v34.3h-34.3c-11.4,0-20.8,9.4-20.8,20.8v26.1L53.047,154.42z M333.047,415.72v-29.2h34.3c18,1.7,20.8-16.5,20.8-20.8v-34.4h29.2
                        l24,109.3L333.047,415.72z"/>
                </g>

            </SecondarySvg>

        
    )
  }

  export default EditIcon;

