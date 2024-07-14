
export type ErrorType = {
    message: string;
    status: number;
}

export const ValidationError = (msg: string) => {
    const errorObj: ErrorType = { message: msg, status: 400 }
    throw errorObj;
}

export const RouteNotFoundError = (route: string) => {
    const errorObj: ErrorType = { message: `Route ${route} is not exist`, status: 404 }
    throw errorObj;
}