
export interface User {
    email:     string;
    password:  string;
    firstName: string;
    lastName:  string;
}

export interface UserWAdmin {
    email:     string;
    password:  string;
    firstName: string;
    lastName:  string;
    isAdmin: boolean;
}