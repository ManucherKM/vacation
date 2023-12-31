import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			treeshake: true
		}
	},
	resolve: {
		alias: {
			'@': path.resolve('./src'),
		},
	},
})
