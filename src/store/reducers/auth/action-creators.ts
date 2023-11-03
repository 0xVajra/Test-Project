import { IUser } from "../../../models/IUser"
import { SetIsLoadingAction, SetUserAction, SetErrorAction, SetAuthAction, AuthActionsEnum } from "./types"


export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({type: AuthActionsEnum.SET_USER, payload: user}),
    setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionsEnum.SET_AUTH, payload: auth}),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: AuthActionsEnum.SET_IS_LOADING, payload }),
    setError: (payload: string): SetErrorAction => ({type:AuthActionsEnum.SET_ERROR, payload}),
    
}