// import { SIGN_IN, SIGN_OUT } from '../actions/types';
import {
    HISTORY_DATA_REQUEST,
    HISTORY_DATA_SUCCESS,
    HISTORY_DATA_FAILURE,
    HISTORY_DATA_ITEM_REQUEST,
    HISTORY_DATA_ITEM_SUCCESS,
    HISTORY_DATA_ITEM_FAILURE,
} from '../actions/types';

const INITIAL_STATE = {
    isHistoryLoading: false,
    historyLoadingCompleted: false,
    historyData: null,


    isHistoryItemLoading: false,
    historyItemLoadingCompleted: false,
    historyItemData: null,
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HISTORY_DATA_REQUEST: {
            return {
                ...state,
                isHistoryLoading: true,
                historyLoadingCompleted: false,
            };
        }
        case HISTORY_DATA_SUCCESS: {
            return {
                ...state,
                isHistoryLoading: false,
                historyData: action.payload,
                historyLoadingCompleted: true,
            };
        }
        case HISTORY_DATA_FAILURE: {
            return {
                ...state,
                isHistoryLoading: false,
                historyLoadingCompleted: false,
            };
        }
        //для одного элемента
        case HISTORY_DATA_ITEM_REQUEST: {
            return {
                ...state,
                isHistoryItemLoading: true,
                historyItemLoadingCompleted: false,
            };
        }
        case HISTORY_DATA_ITEM_SUCCESS: {
            return {
                ...state,
                isHistoryItemLoading: false,
                historyItemData: action.payload,
                historyItemLoadingCompleted: true,
            };
        }
        case HISTORY_DATA_ITEM_FAILURE: {
            return {
                ...state,
                isHistoryItemLoading: false,
                historyItemLoadingCompleted: false,
            };
        }

        default:
            return state;
    }
};
