import * as CategoriesConstants from "../Constants/categoriesConstants";
import * as categoriesAPIs from "../APIs/CategoriesServices";
import toast from "react-hot-toast";
import { ErrorsACtion, tokenProtection } from "../Protection";

// Get all Categories action
export const getAllCategoriesAction = () => async (dispatch) => {
    try {
        dispatch({ type: CategoriesConstants.GET_ALL_CATEGORIES_REQUEST });
        const data = await categoriesAPIs.getCategoriesService();
        dispatch({ type: CategoriesConstants.GET_ALL_CATEGORIES_SUCCESS, payload: data });
    } catch (error) {
        ErrorsACtion(error, dispatch, CategoriesConstants.GET_ALL_CATEGORIES_FAIL);  
    }
};


// Create Category action
export const createCategoryAction = (title) => async (dispatch, getState) => {
    try {
        dispatch({ type: CategoriesConstants.CREATE_CATEGORY_REQUEST });
        await categoriesAPIs.createCategoryService(
            title, 
            tokenProtection(getState)
        );
        dispatch({ type: CategoriesConstants.CREATE_CATEGORY_SUCCESS });
        toast.success("Category created successfully");
    } catch (error) {
        ErrorsACtion(error, dispatch, CategoriesConstants.CREATE_CATEGORY_FAIL);  
    }
};

// Update Category action
export const updateCategoryAction = (id, title) => async (dispatch, getState) => {
    try {
        dispatch({ type: CategoriesConstants.UPDATE_CATEGORY_REQUEST });
        await categoriesAPIs.updateCategoryService(
            id,
            title, 
            tokenProtection(getState)
        );
        dispatch({ type: CategoriesConstants.UPDATE_CATEGORY_SUCCESS });
        toast.success("Category Updated successfully");
        dispatch(getAllCategoriesAction());
    } catch (error) {
        ErrorsACtion(error, dispatch, CategoriesConstants.UPDATE_CATEGORY_FAIL);  
    }
};


// Delete Category action
export const deleteCategoryAction = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: CategoriesConstants.DELETE_CATEGORY_REQUEST });
        await categoriesAPIs.deleteCategoryService(
            id,
            tokenProtection(getState)
        );
        dispatch({ type: CategoriesConstants.DELETE_CATEGORY_SUCCESS });
        toast.success("Category Deleted successfully");
        dispatch(getAllCategoriesAction());
    } catch (error) {
        ErrorsACtion(error, dispatch, CategoriesConstants.DELETE_CATEGORY_FAIL);  
    }
};

