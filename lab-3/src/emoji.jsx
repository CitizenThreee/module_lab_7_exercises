import { useState } from "react";
import { useEmojiContext } from "./emojiProvider";

function Emoji () {
    const {emoji, handleSetEmoji} = useEmojiContext();

    return (
        <>
            <h1>{emoji}</h1>
            <button onClick={handleSetEmoji}>Change Mood</button>
        </>
    )
}

export default Emoji;