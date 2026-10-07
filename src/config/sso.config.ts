import SSO from "../../../sso-sdk/src/main";
// import SSO from "@alliumcloud/avatar-sso";

const sso = new SSO({
  sdkKey:
    "ac_sso_development_nPFloixt5Qwt_INGtiSdAdERbxnmEF6lRBCBDj29YQK7uSZR7Dy9l",
  // serverUrl:
  //   import.meta.env.VITE_ENV === "dev"
  //     ? "http://localhost:5001/api/v1"
  //     : undefined,
  serverUrl: "https://api-gw-dev.2x22.com/sso/api/v1",
});

export default sso;
