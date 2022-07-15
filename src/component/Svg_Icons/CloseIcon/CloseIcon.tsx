

import { FC } from 'react';

import { BaseSVG, RedSVG } from '../Svg.styles';

import "../svg_icons.css";

type TaskAndCategoryType = {

    clicked: (e: any) => any;
    title?: string
}


export const CloseIcon: FC<TaskAndCategoryType> = ({ clicked, title, ...props }) => {

    return (
        <RedSVG onClick={clicked} className="svg pointer" viewBox="0 0 1024 1024" {...props}>
            {
                title
                ?
                <title>{title}</title>
                :
                ""
            }
            <path {...props} d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm181.008-630.016c-12.496-12.496-32.752-12.496-45.248 0L512 466.752l-135.76-135.76c-12.496-12.496-32.752-12.496-45.264 0-12.496 12.496-12.496 32.752 0 45.248L466.736 512l-135.76 135.76c-12.496 12.48-12.496 32.769 0 45.249 12.496 12.496 32.752 12.496 45.264 0L512 557.249l135.76 135.76c12.496 12.496 32.752 12.496 45.248 0 12.496-12.48 12.496-32.769 0-45.249L557.248 512l135.76-135.76c12.512-12.512 12.512-32.768 0-45.248z"/>
        </RedSVG>

    )
  }

  export default CloseIcon;


