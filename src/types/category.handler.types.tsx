
export type HandleCreateCategoryPayloadType = {

    project_id: string,
    title: string


}
export type HandleCreateCategoryType = {

    type: "project/getCreateCategory",
    payload: HandleCreateCategoryPayloadType


}

export type HandleEditCategoryPayloadType = {

    category_id: string,
    project_id: string,
    title: string,


}
export type HandleEditCategoryType = {

    type: "project/getCreateCategory",
    payload: HandleEditCategoryPayloadType


}

export type HandleDeleteCategoryPayloadType = {

    category_id: string,
    project_id: string,

}
export type HandleDeleteCategoryType = {

    type: "project/getDeleteCategory",
    payload: HandleDeleteCategoryPayloadType


}

export type HandleChangeTaskOrderPayloadType = {

    category_id: string,
    original_index: number,
    project_id: string,
    target_category_id: string,
    target_index: number
    task_id: string,
}
export type HandleChangeTaskOrderType = {

    type: "project/getChangeTaskOrder",
    payload: HandleChangeTaskOrderPayloadType

}

export type handleChangeCategoryOrderPayloadType = {

    category_id: string,
    original_index: number | null,
    project_id: string,
    target_index: number | null,

}
export type handleChangeCategoryOrderType = {

    type: "project/getChangeCategoryOrder",
    payload: handleChangeCategoryOrderPayloadType


}


