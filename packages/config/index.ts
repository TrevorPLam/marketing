// Shared ESLint configuration
export const eslintConfig = {
  extends: ['next/core-web-vitals'],
}

// Shared TypeScript configuration
export const tsconfig = {
  compilerOptions: {
    strict: true,
    esModuleInterop: true,
    skipLibCheck: true,
  },
}
