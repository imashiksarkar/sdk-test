import SSO from "../../../sso-sdk/src/main";
// import SSO from "@alliumcloud/avatar-sso";

const sso = new SSO({
  sdkKey:
    "iframe_5006caab13d431c8c45192162a7824dcc69788bd79d22148dd5abcdd16b910b4",
  serverUrl:
    import.meta.env.VITE_ENV === "dev"
      ? "http://localhost:5001/api/v1"
      : undefined,
});

export default sso;
