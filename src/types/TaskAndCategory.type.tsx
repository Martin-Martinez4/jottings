import React from "react";

export interface IWithChildern{

    children: JSX.Element | JSX.Element[];
    visible: boolean;
}

export type TaskAndCategoryType = {

    clicked?: (e: React.MouseEvent<any>) => any;
	title? :string;
	fill?: string;
}
