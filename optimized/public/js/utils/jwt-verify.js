function verifyJWT(token) {
    if (!token || (token && (Date.now() < token.exp))) {
        window.localStorage.removeItem("samplehousetoken")
        return false
    } else return true
}

if (window) {
    if (typeof window.define == "function" && window.define.amd) {
        window.define("jwt_verify", function () {
            return verifyJWT;
        });
    } else if (window) {
        window.jwt_verify = verifyJWT;
    }
}
