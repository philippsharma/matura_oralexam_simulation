import type {ErrorReason} from "./api/getToken.ts"

export const germanErrorMsg: Record<ErrorReason, string> = {
    "invalid-code": "Der eingegebene Zugangscode ist ungültig. Bitte versuchen sie es erneut.",
    "server-error": "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
    "network-error": "Kein Verbindung zum Server. Bitte überprüfen Sie ihre Internetverbindung."
}