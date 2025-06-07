import { GroundingChunk } from "@google/genai";

export enum Language {
  ENGLISH = "en",
  SINHALA = "si",
  TAMIL = "ta",
}

export interface LanguageOption {
  code: Language;
  name: string;
}

export interface AppMessage {
  id: string;
  role: "user" | "assistant" | "system" | "error";
  text: string;
  sources?: GroundingChunk[];
  timestamp: Date;
  // imageUrl?: string; // Removed: No longer displaying images
}

export interface Source {
  uri: string;
  title: string;
}

// -- Web Speech API Types --
export interface ISpeechRecognitionAlternative {
  readonly transcript: string;
  readonly confidence: number;
}

export interface ISpeechRecognitionResult {
  readonly isFinal: boolean;
  readonly length: number;
  item(index: number): ISpeechRecognitionAlternative;
  [index: number]: ISpeechRecognitionAlternative;
}

export interface ISpeechRecognitionResultList {
  readonly length: number;
  item(index: number): ISpeechRecognitionResult;
  [index: number]: ISpeechRecognitionResult;
}

export interface ISpeechRecognitionEvent extends Event {
  readonly resultIndex: number;
  readonly results: ISpeechRecognitionResultList;
}

export interface ISpeechRecognitionErrorEvent extends Event { // More specific than a generic ErrorEvent
  readonly error: string; // e.g., 'no-speech', 'audio-capture', 'not-allowed', 'network', etc.
  readonly message: string;
}

export interface ISpeechRecognitionInstance extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;

  onresult: ((this: ISpeechRecognitionInstance, ev: ISpeechRecognitionEvent) => any) | null;
  onerror: ((this: ISpeechRecognitionInstance, ev: ISpeechRecognitionErrorEvent) => any) | null;
  onend: ((this: ISpeechRecognitionInstance, ev: Event) => any) | null;
  // Other event handlers can be added if used (e.g., onaudiostart, onstart)

  start(): void;
  stop(): void;
  abort(): void;

  // Other properties like grammars, maxAlternatives can be added if needed
}

export type SpeechRecognitionConstructor = new () => ISpeechRecognitionInstance;

// Augment the global Window interface to inform TypeScript about these non-standard properties
declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  }
}