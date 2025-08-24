import { App } from "https://cdn.jsdelivr.net/npm/@wazo/euc-plugins-sdk@latest/lib/esm/app.js";

const app = new App();

app.onCallIncoming = (call) => {
  console.log("Incoming call received:", call);
  app.displayModal({
    title: `Incoming call for ${call.displayName || "Unknown"}`,
    text: `Number: ${call.number || "N/A"}`,
    height: "50%",
    width: "70%",
  });
};

(async () => {
  await app.initialize();
  console.log("App initialized");
})();
