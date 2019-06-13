export default class User {
    email: string;
    firstName: string;
    lastName: string;
    oAuthProvider?: 'google' | 'facebook';
    profilePicUrl?: string;

    /**
     * 1 - Just registered
     * 2 - Identified
     * 3 - Filled in details
     * 4 - Payment Done
     */
    state: RegistrationState;

    public static getUser(obj): User {
        return {
            firstName: obj.firstName,
            lastName: obj.lastName,
            state: obj.state || 1,
            email: obj.email
        };
    }

    public static isUser(obj): obj is User {
        return obj && typeof obj === 'object' && ['firstName', 'lastName', 'email', 'state'].every((p) => p in obj);
    }
}

export enum RegistrationState {
    JUST_REGISTERED = 1,
    IDENTIFIED = 2,
    DETAILS_UPDATED = 3,
    PAYMENT_COMPLETED = 4
}
