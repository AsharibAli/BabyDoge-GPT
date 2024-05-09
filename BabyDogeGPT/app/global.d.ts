declare interface Window {
  Chatbot: {
    initFull: (options: {
      chatflowid: string;
      apiHost: string;
      theme: any;
    }) => void;
  };
}

declare namespace JSX {
  interface IntrinsicElements {
    "flowise-fullchatbot": any; // Allows using the custom element as a valid JSX tag
  }
}
