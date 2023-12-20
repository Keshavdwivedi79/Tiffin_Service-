const chatBody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtInput");
const send = document.querySelector(".send");
const loadingEle = document.querySelector(".loading");

send.addEventListener("click", () => renderUserMessage());

txtInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        renderUserMessage();
    }
});

const renderUserMessage = () => {
    const userInput = txtInput.value;
    renderMessageEle(userInput, "user");
    txtInput.value = "";
    toggleloading(false);
    setTimeout(() => {
        renderChatbotResponse(userInput);
        setScrollPosition();
        toggleloading(true);
    }, 800);
};

const renderChatbotResponse = (userInput) => {
    const res = getChatbotResponse(userInput);
    renderMessageEle(res);
};

    const renderMessageEle = (txt, type) => {
        let className = "user-message";
        if (type !== "user") {
            className = "chatbot-message";
        }
        const messageEle = document.createElement("div");
        const txtNode = document.createTextNode(txt);
        messageEle.classList.add(className);
        messageEle.append(txtNode);
        chatBody.append(messageEle);
    };


const getChatbotResponse = (userInput) => {
    return responseObj[userInput] == undefined
        ? "Please try something else"
        : responseObj[userInput];
};

const setScrollPosition = () => {
    if (chatBody.scrollHeight > 0) {
        chatBody.scrollTop = chatBody.scrollHeight;
    }
};
const toggleloading =(show)=>loadingEle.classList.toggle("hide",show) 