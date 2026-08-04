import { useLayoutEffect, useRef, useState } from "react";
import sso from "./config/sso.config";

const App = () => {
  const email = "ashik+lll@odyssey.stream";
  const [otp, setOtp] = useState<string>("");
  // const redirectUri = window.location.origin;

  const iframeRef = useRef<HTMLIFrameElement>(null);

  useLayoutEffect(() => {
    sso
      .exchange()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <button
        onClick={() =>
          sso.login({
            email,
            // redirectUri,
            type: "otp",
          })
        }
      >
        Login
      </button>

      <button
        onClick={() =>
          sso.register({
            firstName: "John",
            lastName: "Doe",
            email,
            // redirectUri,
            type: "otp",
          })
        }
      >
        Register
      </button>

      <input type="text" onChange={(e) => setOtp(e.target.value)} />

      <button
        onClick={() =>
          sso.verifyOtp({
            email,
            otpCode: otp,
          })
        }
      >
        Verify Otp
      </button>

      <button
        onClick={() =>
          sso
            .refresh()
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            })
        }
      >
        Refresh
      </button>

      <button
        onClick={() =>
          sso
            .logout()
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            })
        }
      >
        Logout
      </button>

      {/* <button onClick={() => sso.getIframeSession()}>Get IFrame Token</button> */}

      <br />
      <br />

      <div>
        <div
          ref={iframeRef}
          style={{ width: "100%", height: "500px", backgroundColor: "red" }}
        ></div>
        <button onClick={() => sso.mountAvatarPicker(iframeRef.current!)}>
          Mount Pick Avatar
        </button>
      </div>
    </div>
  );
};

export default App;
