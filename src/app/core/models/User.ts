export default class User {
    email: string;
    firstName: string;
    lastName: string;
    oAuthProvider?: 'google' | 'facebook';

    status: 'complete' | {
        payment: 'pending' | 'complete',
        details: 'not_filled' | 'filled' | 'verified'
    };

    public static getUser(obj): User {
        return {
            firstName: obj.firstName,
            lastName: obj.lastName,
            status: obj.status,
            email: obj.email
        };
    }

    public static isUser(obj): obj is User {
        return obj && typeof obj === 'object' && ['firstName', 'lastName', 'email', 'status'].every((p) => p in obj);
    }
}
