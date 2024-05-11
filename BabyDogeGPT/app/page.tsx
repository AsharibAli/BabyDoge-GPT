"use client";
import React, { useEffect } from "react";

const BabyDogeGPT = () => {
  useEffect(() => {
    // Check if the script is already loaded
    if (
      !document.querySelector(
        'script[src="https://cdn.jsdelivr.net/gh/AsharibAli/FlowiseChatEmbed@latest/dist/web.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/AsharibAli/FlowiseChatEmbed@latest/dist/web.js";
      script.type = "module";
      script.async = true;
      script.onload = () => {
        if (window.Chatbot) {
          window.Chatbot.initFull({
            chatflowid: "9cd49160-39d1-458f-8989-01d02b9dca2c",
            apiHost: "https://flowise-r1c3.onrender.com",
            theme: {
              button: {
                backgroundColor: "#d17e11",
                size: "medium",
                iconColor: "white",
                customIconSrc:
                  "https://raw.githubusercontent.com/AsharibAli/project-images/main/baby-doge.png",
              },
              chatWindow: {
                welcomeMessage:
                  "Welcome to the BabyDoge-GPT! I'm here to assist you with any questions you have about the BabyDoge in a Doge fun way ≽^•⩊•^≼",
                backgroundColor: "#ffffff",
                fontSize: 16,
                poweredByTextColor: "#000000",
                botMessage: {
                  backgroundColor: "#d17e11",
                  textColor: "#ffffff",
                  showAvatar: true,
                  avatarSrc:
                    "https://raw.githubusercontent.com/AsharibAli/project-images/main/baby-doge.png",
                },
                userMessage: {
                  backgroundColor: "#000000",
                  textColor: "#ffffff",
                  showAvatar: true,
                  avatarSrc:
                    "https://raw.githubusercontent.com/AsharibAli/project-images/main/usericon.png",
                },
                textInput: {
                  placeholder: "Type your question",
                  backgroundColor: "#ffffff",
                  textColor: "#000000",
                  sendButtonColor: "#d17e11",
                },
              },
            },
          });
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="m-0">
      <flowise-fullchatbot></flowise-fullchatbot>
    </div>
  );
};

export default BabyDogeGPT;
