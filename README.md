# Chesstraction

Chesstraction is a chrome extension that allows a user to save the fen/pgn string to their clipboard or upload it to a lichess analysis board **during a live game**. Please don't cheat this tool is for planning out your moves ahead not for using the built in stockfish engine in lichess.

## Installation
```
1. Download the repo as a zip or git clone it
2. go to [chrome://extensions](chrome://extensions)
3. Enable developer mode in the top right
4. Click 'load unpacked'
5. navigate to and select the extracted repo
6. You're done!
```

## Usage
To use the tool just click the extension icon while the active tab is either a chess.com/game/live link or a chess.com/game/daily link.

To change the settings you can right click the extension icon and click options.
From there you have the choice to use 2 different chess notation formats and 2 different methods

### Options
#### Notation types
 - `Fen`: extracts the current position and nothing previously but if lichess is enabled it will instantly load the game
 - `Pgn`: extracts the game move by move but if lichess is enabled then one extra button is required to load the game

#### Modes
 - `Copy`: copies the game to clipboard
 - `Lichess`: sends the game to lichess
