# Number Guessing Game

Simple number guessing game built with HTML, CSS, and JavaScript.

## Features

- तीन difficulty levels: Easy, Medium, Hard
- हर लेवल में अलग range
- यूज़र को guess करने पर feedback मिलता है:
  - "Too Low"
  - "Too High"
  - "Congratulations! You guessed it!"
- guess attempts count दिखाता है
- play again से गेम reset होता है

## फ़ाइलें

- `index.html` — गेम की main UI
- `style.css` — styling
- `script.js` — game logic
- `assets/` — कोई भी अतिरिक्त assets जैसे images या icons

## कैसे चलाएँ

1. `index.html` फाइल को ब्राउज़र में खोलें।
2. एक difficulty level चुनें (Easy / Medium / Hard)।
3. उसके अनुसार 1 से range तक एक नंबर guess करें।
4. "Guess" बटन पर क्लिक करें।
5. result में अपडेट मिलता रहेगा कि आपका guess low है, high है या सही है।
6. फिर से खेलना हो तो "Play Again" बटन दबाएँ।

## सुधार के सुझाव

- UI को और attractive बनाओ
- `localStorage` में best score सेव करो
- keyboard से भी guess submit करने का ऑप्शन जोड़ो
- multiple rounds और scoreboard जोड़ो
