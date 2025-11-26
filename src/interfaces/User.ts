export interface User {
    userID: number;
    userLoginBarcode: string;
    userRemoteLoginUsername: string;
    guid?: string | null;
    password?: string | null;
    userForcePWChange: string;
    userRoleID: number;
    userActive: number;
    userFirstName: string;
    userLastName: string;
    userDefaultPrinter: number;
    userLoginRedirect: number;
    userHospital: number;
    userUnit?: number | null;
    userPasswordChange: number;
    userLastIPAddress: string;
    userLastSessionID: string;
    userLastActivity?: string | null;
    userIncorrectLogins: number;
    userAlwaysLocalLogin?: number | null;
    userHL7Reference?: string | null;
    userLanguage?: string | null;
    userEmail?: string | null;
    createdBy?: number | null;
    updatedBy?: number | null;
    created_at?: string | null;
    updated_at?: string | null;
    domain?: string | null;
}

export const UserHeaders = [
    "userID",
    "userLoginBarcode",
    "userRemoteLoginUsername",
    "guid",
    "password",
    "userForcePWChange",
    "userRoleID",
    "userActive",
    "userFirstName",
    "userLastName",
    "userDefaultPrinter",
    "userLoginRedirect",
    "userHospital",
    "userUnit",
    "userPasswordChange",
    "userLastIPAddress",
    "userLastSessionID",
    "userLastActivity",
    "userIncorrectLogins",
    "userAlwaysLocalLogin",
    "userHL7Reference",
    "userLanguage",
    "userEmail",
    "createdBy",
    "updatedBy",
    "created_at",
    "updated_at",
    "domain",
];

export function transformUserData(rawData: Record<string, any>): User {
    return {
        userID: 0,
        userLoginBarcode: '',
        userRemoteLoginUsername: '',
        guid: '',
        password: '',
        userForcePWChange: '',
        userRoleID: 0,
        userActive: 0,
        userFirstName: '',
        userLastName: '',
        userDefaultPrinter: 0,
        userLoginRedirect: 0,
        userHospital: 0,
        userUnit: 0,
        userPasswordChange: 0,
        userLastIPAddress: '',
        userLastSessionID: '',
        userLastActivity: '',
        userIncorrectLogins: 0,
        userAlwaysLocalLogin: 0,
        userHL7Reference: '',
        userLanguage: '',
        userEmail: '',
        createdBy: 0,
        updatedBy: 0,
        created_at: '',
        updated_at: '',
        domain: '',
    }
}