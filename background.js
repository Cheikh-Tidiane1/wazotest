import { App } from '@wazo/euc-plugins-sdk';

const app = new App();

app.onCallIncoming = async call => {
  app.displayModal({
    title: `Bn Test Incoming call for ${call.displayName}`,
    text: `Bn Test Client number: ${call.number}`,
    height: '50%',
    width: '50%',
  });
};

app.initialize();