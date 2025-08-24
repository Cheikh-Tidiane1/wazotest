import { App } from "https://unpkg.com/@wazo/euc-plugins-sdk@latest/lib/esm/app.js";

const app = new App();

app.onInit = () => {
  console.log("Plugin initialized ✅");

  app.onCallIncoming = (call) => {
    console.log("Incoming call detected:", call);

    app.displayModal({
      title: `Incoming call for ${call.displayName || "Unknown"}`,
      text: `Number: ${call.number || "N/A"}`,
      height: "50%",
      width: "70%",
    });
  };
};

app.initialize();
