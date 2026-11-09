
import type {TokenFailureReason} from "../api/getToken.ts" 
import { errorMessages } from "../texts.ts"


export default function ErrorText({errorReason}: {errorReason: TokenFailureReason}) {
    const displayedErrorMessage = errorMessages[errorReason]
    return (<p>
        {displayedErrorMessage}
    </p>)
}