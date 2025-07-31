export interface RegisterUserDTO {
    fullName: string;
    email: string;
    password: string;
}

export interface RegisterUserResponse {
    message: string;
    user: {
        id: string;
        name: string;
        email: string;
    };
}

export interface LoginUserDTO {
    email: string;
    password: string;
}

export interface LoginUserResponse {
    message: string;
    userId: string;
}