// Might add type-checking in the future
const VERSION = 'version' // string
const LOCALE = 'locale' // string
const DATA_BY_ID = 'dataById' // boolean
// CHAMPION-MASTERY-V3 N/A
// CHAMPION-V3
  // all champs
    // freeToPlay
const FREE_TO_PLAY = 'freeToPlay' // boolean
// GAME-V1.3 NONE
// LEAGUE-V3 NONE
// STATUS-V3 NONE
// MASTERIES-V3 NONE
// MATCH-V3
  // MATCHLIST BY ACCOUNT
const QUEUE = 'queue' // Set[int]
const BEGIN_TIME = 'beginTime' // long
const END_INDEX = 'endIndex' // int
const SEASON = 'season' // Set[int]
const CHAMPION = 'champion' // Set[int]
const BEGIN_INDEX = 'beginIndex' // int
const END_TIME = 'endTime' // long
// STATIC-V3
  // ALL CHAMPIONS
// VERSION
// LOCALE
const CHAMP_LIST_DATA = 'champListData' // string
  // SINGLE CHAMPION
// VERSION
// LOCALE
const CHAMP_DATA = 'champData' // string
  // ALL ITEMS
// VERSION
// LOCALE
const ITEM_LIST_DATA = 'itemListData' // string
  // SINGLE ITEM
// VERSION
// LOCALE
const ITEM_DATA = 'itemData' // string
  // LANGUAGE STRINGS
// VERSION
// LOCALE
  // LANGUAGES | NONE
  // MAP
// VERSION
// LOCALE
  // MASTERIES
// VERSION
// LOCALE
const MASTERY_LIST_DATA = 'masteryListData'
  // SINGLE MASTERY
// VERSION
// LOCALE
const MASTERY_DATA = 'masteryData'
  // PROFILE ICONS
// VERSION
// LOCALE
  // REALMS | NONE
  // RUNES
// VERSION
// LOCALE
const RUNE_LIST_DATA = 'runeListData'
  // SINGLE RUNE
// VERSION
// LOCALE
const RUNE_DATA = 'runeData'
  // SUMMONER SPELLS ILST
// VERSION
// LOCALE
// dataById
const SPELL_LIST_DATA = 'spellListData'
  // SUMMONER SPELL
// VERSION
// LOCALE
const SPELL_DATA = 'spellData'
  // VERSIONS NONE

// STATS-V1.3
// both ranked and summary
const STATS_SEASON = 'season' // string

// helper constant
const VERSION_AND_LOCALE = [VERSION, LOCALE]

const queryParams = {
  NONE: [],
  CHAMPION: {
    LIST: [FREE_TO_PLAY]
  },
  STATIC: {
    CHAMPION: {
      LIST: [...VERSION_AND_LOCALE, DATA_BY_ID, CHAMP_LIST_DATA],
      ONE: [...VERSION_AND_LOCALE, CHAMP_DATA]
    },
    ITEM: {
      LIST: [...VERSION_AND_LOCALE, ITEM_LIST_DATA],
      ONE: [...VERSION_AND_LOCALE, ITEM_DATA]
    },
    LANGUAGE_STRING: {
      LIST: [...VERSION_AND_LOCALE]
    },
    MAP: {
      LIST: [...VERSION_AND_LOCALE]
    },
    MASTERY: {
      LIST: [...VERSION_AND_LOCALE, MASTERY_LIST_DATA],
      ONE: [...VERSION_AND_LOCALE, MASTERY_DATA]
    },
    RUNE: {
      LIST: [...VERSION_AND_LOCALE, RUNE_LIST_DATA],
      ONE: [...VERSION_AND_LOCALE, RUNE_DATA]
    },
    SUMMONER_SPELL: {
      LIST: [...VERSION_AND_LOCALE, DATA_BY_ID, SPELL_LIST_DATA],
      ONE: [...VERSION_AND_LOCALE, SPELL_DATA]
    },
    STATS: {
      RANKED: [STATS_SEASON],
      SUMMARY: [STATS_SEASON]
    }
  },
  MATCHLIST: {
    GET: [
      QUEUE, BEGIN_TIME, END_INDEX, SEASON, CHAMPION, BEGIN_INDEX, END_TIME
    ]
  }
}

export default queryParams