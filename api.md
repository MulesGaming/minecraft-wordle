# MINECRAFT WORDLE API

## Functions of the api

The Minecraft Wordle api currently does 4 things:
* Allows you to easily view the valid word list
* Allows you to check whether a word is a valid word
* Allows you to easily view the possible words
* Allows you to get a random word & its assosiated info

----

# API url

The root url for the api is `https://api.minecraftwordle.fun`

-----

## Documentation

### API call methods

`/valid-words`: This will return a json list of all the valid 5-letter words that are used by the Minecraft Wordle. It return a json array.  
`/check-valid-word`: This will allow you to check whether a word is valid and whether it can be used as a guess in the Minecraft Wordle. It takes one parameter: `word`. It will return a json element name `isValidWord` that has a true of false variable. Here is a example call that check whether the word `apple` is valid: `https://api.minecraftwordle.fun/check-valid-word?word=apple`.  
`/mc-words`: This will return a json array of all the words used in the Minecraft Wordle & their related info (about snippet & wiki link) that are used by the Minecraft Wordle.   
`/random-mc-word` This will return a random word from the list of words that you get by calling `/mc-words`. It return a json with the word & it's related info (about snippet & wiki link)
