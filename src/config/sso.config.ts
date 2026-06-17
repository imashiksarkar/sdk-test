import SSO, { type Config, CustomStorage } from "../../../avatar-sso/src/main";

class LocalSSO extends SSO {
  protected ssoServerUrl = "http://localhost:5001/api/v1";

  constructor(config: Config) {
    super(config);
  }
}

const sso = new LocalSSO({
  sdkKey:
    "ody_live_f6938c22c6b5b0ab9e1af931e7515533e8c6e9eb65468750a08bcb1110fe96a5",
  storage: new CustomStorage({
    get(key: string): string | null {
      return localStorage.getItem(key);
    },
    set(key: string, value: string): void {
      localStorage.setItem(key, value);
    },
    remove(key: string): void {
      localStorage.removeItem(key);
    },
  }),
});

export default sso;
