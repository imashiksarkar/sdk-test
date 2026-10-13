// import SSO from "../../../sso-sdk/src/main";
import SSO from "@alliumcloud/avatar-sso-internal";

const sso = new SSO({
  sdkKey:
    "ac_sso_development_96dISp2w4RSy_cXsJNIuovpEAhTjhFE4n4iEOSiJ8PSI1aMecvMbd",
  // serverUrl:
  //   import.meta.env.VITE_ENV === "dev"
  //     ? "http://localhost:5001/api/v1"
  //     : undefined,
  // serverUrl: "https://api-gw-dev.2x22.com/sso/api/v1",
});

export default sso;
