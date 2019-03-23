# Hukamnama Daily Module

Hukamnama Daily Module lets you read hukamnama daily from your smart mirror while you get ready. Hukamnama is shown line by line and the speed can be adjusted. Using this the user can read hukamnama in Punjabi or English as needed. The module uses API from gurbaninow.com 
>https://api.gurbaninow.com/v2/hukamnama/today

##### Background Information
The Hukumnama refers to a hymn from a randomly selected left-hand side page from the Guru Granth Sahib on a daily basis in the morning. This is seen as the order of God for that particular day. The Hukamnama is distributed and then read aloud in Gurdwaras throughout the world. (Read here for more info: https://en.wikipedia.org/wiki/Hukamnama)


## Set up:

1. Setup [the MagicMirror project.](https://github.com/MichMich/MagicMirror)
1. Inside the MagicMirror/modules folder, clone this module. Then rename the folder to "hukamnamaDaily" (the exact name is important.)
1. Inside the MagicMirror/config folder, copy "config.js.sample" to "config.js" if "config.js" does not exist.
1. In the config.js file, there is a list of modules, their positions and more, which you can change according to your needs. But for a quick change, just replace the module name "compliments" to "hukamnamaDaily" (the exact name is important.)
1. Your MagicMirror project should be ready to present this module.


## Features:

1. Option of reading the larivaar.
1. Translation of hukamnama in both English and Punjabi is available. English Transliteration is also shown. These can be enabled or disabled in preferences.
1. Adjust speed according to need.
