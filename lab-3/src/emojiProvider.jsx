import { useState, useContext } from "react";
import React from "react";

const emojiContext = React.createContext();

export const EmojiProvider = (props) => {
    const [emoji, setEmoji] = useState('\u{1F600}');

    const handleSetEmoji = () => {
        setEmoji(emoji == '\u{1F600}' ? '\u{1F641}' : '\u{1F600}');
    }

    return (
        <emojiContext.Provider value={{emoji, handleSetEmoji}}>
            {props.children}
        </emojiContext.Provider>
    );
}

export const useEmojiContext = () => {
    return useContext(emojiContext);
}