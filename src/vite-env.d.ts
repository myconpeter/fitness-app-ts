/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_NUMBER: string; // Remove the assignment (= 7067102918)
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
