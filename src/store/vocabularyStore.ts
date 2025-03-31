import { create } from 'zustand';

export interface VocabularyWord {
  sanskrit: string;
  transliteration: string;
  meaning: string;
  partOfSpeech: string;
  root?: string;
  chapter?: number;
  notes?: string;
  dateAdded: string;
}

export interface VocabularyStore {
  words: VocabularyWord[];
  addWord: (word: Omit<VocabularyWord, 'dateAdded'>) => void;
  removeWord: (sanskrit: string) => void;
}

const createVocabularyStore = (set: (fn: (state: VocabularyStore) => Partial<VocabularyStore>) => void) => ({
  words: [],
  addWord: (word: Omit<VocabularyWord, 'dateAdded'>) => 
    set((state: VocabularyStore) => {
      if (state.words.some((w: VocabularyWord) => w.sanskrit === word.sanskrit)) {
        return state;
      }
      return {
        words: [...state.words, { ...word, dateAdded: new Date().toISOString() }]
      };
    }),
  removeWord: (sanskrit: string) => 
    set((state: VocabularyStore) => ({
      words: state.words.filter((word: VocabularyWord) => word.sanskrit !== sanskrit)
    }))
});

export const useVocabularyStore = create<VocabularyStore>()(createVocabularyStore); 