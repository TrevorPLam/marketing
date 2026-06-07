# Marketing Monorepo Implementation Tasks - Phase 1

## Phase 1: Shared UI Component Library Foundation

This phase focuses on building the foundational UI component library (packages/ui) that will be shared across all marketing websites in the monorepo.

---

### Task 1.1: Configure packages/ui Build System
- [x] Status: COMPLETED
- Task ID: UI-001

**Related File Paths:**
- packages/ui/package.json
- packages/ui/tsconfig.json
- packages/ui/tsup.config.ts

**Definition of Done:**
- packages/ui builds successfully with `pnpm build`
- Output includes ESM, CJS, and TypeScript declaration files
- Package exports configured for proper module resolution
- Side effects set to false for tree-shaking

**Out of Scope:**
- Component implementation
- Storybook setup
- Testing configuration

**Rules to Follow:**
- Use tsup with esbuild for fast compilation
- Export both ESM and CJS formats
- Generate TypeScript declaration files
- Configure package.json exports field for each component
- Mark as sideEffects: false

**Advanced Coding Pattern:**
- Build-time module resolution with conditional exports
- Dual package format (ESM/CJS) for maximum compatibility

**Anti-Patterns:**
- Do not use webpack for library builds
- Do not bundle React as dependency (externalize)
- Do not skip TypeScript declaration generation

**Imports/Exports:**
- Import: tsup, typescript
- Export: Built component modules

**Depends On:**
- None

**Blocks:**
- UI-002 (Component structure setup)

---

#### Subtask UI-001-1: Create packages/ui package.json
- **Assigned:** AGENT
- **Target:** packages/ui/package.json
- **Description:** Create package.json with proper exports configuration, build scripts, and dependencies. Configure exports field to support both TypeScript source and compiled outputs for ESM and CJS formats.
- **Validation:** Run `cd packages/ui && pnpm install` then `pnpm build` to verify configuration
- ✅ COMPLETED

#### Subtask UI-001-2: Configure TypeScript strict mode
- **Assigned:** AGENT
- **Target:** packages/ui/tsconfig.json
- **Description:** Create tsconfig.json with strict mode enabled, proper path aliases, and configuration for library builds. Ensure noImplicitAny, strictNullChecks, and strictFunctionTypes are enabled.
- **Validation:** Run `cd packages/ui && npx tsc --noEmit` to verify type checking
- ✅ COMPLETED

#### Subtask UI-001-3: Create tsup build configuration
- **Assigned:** AGENT
- **Target:** packages/ui/tsup.config.ts
- **Description:** Create tsup.config.ts to compile TypeScript to ESM and CJS formats with declaration files. Configure to externalize React and peer dependencies.
- **Validation:** Run `cd packages/ui && pnpm build` and verify dist/ directory contains .mjs, .js, and .d.ts files
- ✅ COMPLETED

**Implementation Notes:**
- Created src/ directory structure and moved index.ts
- Configured package.json with conditional exports for ESM/CJS
- Moved React to peerDependencies to avoid bundling
- Set sideEffects: false for tree-shaking optimization
- TypeScript strict mode enabled with all strict checks
- tsup configured to externalize React and generate dual formats
- Build successfully outputs: index.mjs (ESM), index.js (CJS), index.d.ts (types)
- Added pnpm-workspace.yaml for pnpm workspace support

---

### Task 1.2: Set Up Component Directory Structure
- [x] Status: COMPLETED
- Task ID: UI-002

**Related File Paths:**
- packages/ui/src/components/
- packages/ui/src/lib/
- packages/ui/src/index.ts

**Definition of Done:**
- Component directories follow single responsibility principle
- Each component has dedicated folder with component, test, and story files
- Central index.ts for barrel exports
- Utility functions separated in lib/

**Out of Scope:**
- Component implementation
- Test writing
- Story creation

**Rules to Follow:**
- PascalCase for component names and directories
- Separate files for component, tests, and stories
- Barrel exports for clean imports
- Group related components in subdirectories

**Advanced Coding Pattern:**
- Barrel export pattern for clean public API
- Directory-per-component architecture

**Anti-Patterns:**
- Do not create monolithic component files
- Do not mix concerns in single files
- Do not use inconsistent naming

**Imports/Exports:**
- Import: None
- Export: Component exports via barrel pattern

**Depends On:**
- UI-001 (Build system configuration)

**Blocks:**
- UI-003 (Button component implementation)

---

#### Subtask UI-002-1: Create component directory structure
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/
- **Description:** Create directory structure for components: button/, navigation/, forms/, layout/, feedback/, display/, typography/, data/, and business/. Each directory should have placeholder index.ts.
- **Validation:** Run `ls -R packages/ui/src/components/` to verify directory structure
- ✅ COMPLETED

#### Subtask UI-002-2: Create lib utilities directory
- **Assigned:** AGENT
- **Target:** packages/ui/src/lib/
- **Description:** Create lib/ directory with subdirectories: hooks/, utils/, types/. Add placeholder index.ts files for barrel exports.
- **Validation:** Run `ls -R packages/ui/src/lib/` to verify directory structure
- ✅ COMPLETED

#### Subtask UI-002-3: Create main barrel export file
- **Assigned:** AGENT
- **Target:** packages/ui/src/index.ts
- **Description:** Create main index.ts that exports all components and utilities. This serves as the public API for the package.
- **Validation:** Run `cd packages/ui && npx tsc --noEmit` to verify no type errors
- ✅ COMPLETED

**Implementation Notes:**
- Created 9 component category directories: button, navigation, forms, layout, feedback, display, typography, data, business
- Created 3 lib subdirectories: hooks, utils, types
- Each directory has placeholder index.ts with empty export to make it a valid TypeScript module
- Updated main index.ts with barrel exports for all component categories and utilities
- Build successful: ESM, CJS, and TypeScript declaration files generated
- Typecheck passed with no errors
- ESLint not configured yet (out of scope for this task)

---

### Task 1.3: Configure Tailwind CSS with Design Tokens
- [x] Status: COMPLETED
- Task ID: UI-003

**Related File Paths:**
- packages/ui/tailwind.config.ts
- packages/ui/src/styles/globals.css

**Definition of Done:**
- Tailwind configured with custom design tokens
- Color palette defined (primary, secondary, neutral)
- Typography scale configured
- Spacing system defined
- Border radius tokens set
- Shadow scale configured

**Out of Scope:**
- Component styling implementation
- Dark mode configuration

**Rules to Follow:**
- Use CSS variables for theming
- Define semantic color names
- Follow 8pt grid system for spacing
- Use relative units for typography

**Advanced Coding Pattern:**
- Design token system with CSS custom properties
- Semantic naming for design tokens

**Anti-Patterns:**
- Do not hardcode colors in components
- Do not use arbitrary values
- Do not skip spacing scale

**Imports/Exports:**
- Import: tailwindcss
- Export: CSS variables and Tailwind config

**Depends On:**
- UI-002 (Directory structure)

**Blocks:**
- UI-004 (Button component)

---

#### Subtask UI-003-1: Create Tailwind configuration
- **Assigned:** AGENT
- **Target:** packages/ui/tailwind.config.ts
- **Description:** Create tailwind.config.ts with custom design tokens for colors, spacing, typography, border radius, and shadows. Use CSS variables for dynamic theming.
- **Validation:** Run `cd packages/ui && npx tailwindcss --help` to verify Tailwind is accessible
- ✅ COMPLETED

#### Subtask UI-003-2: Create global CSS with design tokens
- **Assigned:** AGENT
- **Target:** packages/ui/src/styles/globals.css
- **Description:** Create globals.css with CSS custom properties for design tokens (colors, spacing, typography). Include Tailwind directives.
- **Validation:** Run `cd packages/ui && npx tailwindcss -i src/styles/globals.css -o test-output.css` to verify compilation
- ✅ COMPLETED

#### Subtask UI-003-3: Update package.json with Tailwind scripts
- **Assigned:** AGENT
- **Target:** packages/ui/package.json
- **Description:** Add Tailwind CSS build scripts to package.json for development and production builds.
- **Validation:** Run `cd packages/ui && pnpm run build:css` to verify script works
- ✅ COMPLETED

**Implementation Notes:**
- Installed Tailwind CSS v3.4.19, PostCSS, and Autoprefixer
- Created tailwind.config.ts with CSS custom properties for dynamic theming
- Defined semantic color palettes: primary (blue), secondary (purple), neutral (gray)
- Implemented 8pt grid spacing system with CSS variables
- Configured typography scale with relative units (rem) for accessibility
- Set up border radius tokens and shadow scale
- Created globals.css with Tailwind directives and CSS custom properties
- Added PostCSS configuration for Tailwind processing
- Added build:css script to package.json for CSS compilation
- Build successful: CSS compiled to dist/styles/globals.css
- Main build successful: ESM, CJS, and TypeScript declaration files generated
- CSS linter warnings about @tailwind and @apply are expected (Tailwind directives)

---

### Task 1.4: Set Up Storybook for Component Documentation
- [x] Status: COMPLETED
- Task ID: UI-004

**Related File Paths:**
- packages/ui/.storybook/
- packages/ui/package.json

**Definition of Done:**
- Storybook configured with Vite
- Auto-discovery of stories configured
- Module path aliases working (@marketing/ui)
- MDX support enabled
- Storybook runs on localhost:6006

**Out of Scope:**
- Story creation for components
- Custom Storybook addons

**Rules to Follow:**
- Use Vite for fast bundling
- Configure module path aliases
- Enable MDX for documentation
- Auto-discover stories in stories/ directory

**Advanced Coding Pattern:**
- Storybook with Vite for millisecond bundling
- Module alias configuration for clean imports

**Anti-Patterns:**
- Do not use webpack for Storybook
- Do not hardcode import paths
- Do not skip auto-discovery

**Imports/Exports:**
- Import: @storybook/react-vite, @storybook/addon-essentials
- Export: Storybook configuration

**Depends On:**
- UI-002 (Directory structure)
- UI-003 (Tailwind configuration)

**Blocks:**
- UI-005 (Button component with stories)

---

#### Subtask UI-004-1: Install Storybook dependencies
- **Assigned:** AGENT
- **Target:** packages/ui/package.json
- **Description:** Install Storybook with Vite, essential addons, and MDX support. Run `npx storybook@latest init` in packages/ui directory.
- **Validation:** Run `cd packages/ui && pnpm storybook --version` to verify installation
- ✅ COMPLETED

#### Subtask UI-004-2: Configure Storybook with Vite
- **Assigned:** AGENT
- **Target:** packages/ui/.storybook/main.ts
- **Description:** Configure Storybook to use Vite bundler, enable auto-discovery of stories, and configure module path aliases for @marketing/ui imports.
- **Validation:** Run `cd packages/ui && pnpm storybook dev` and verify it starts on localhost:6006
- ✅ COMPLETED

#### Subtask UI-004-3: Create Storybook preview configuration
- **Assigned:** AGENT
- **Target:** packages/ui/.storybook/preview.ts
- **Description:** Create preview.ts with global decorators, parameters, and Tailwind CSS imports. Configure for consistent component rendering.
- **Validation:** Run `cd packages/ui && pnpm storybook dev` and verify no console errors
- ✅ COMPLETED

**Implementation Notes:**
- Installed Storybook v10.4.2 with @storybook/react-vite framework
- Added essential addons: @chromatic-com/storybook, @storybook/addon-vitest, @storybook/addon-a11y, @storybook/addon-docs, @storybook/addon-mcp
- Configured Vite builder with module alias @marketing/ui → /src for clean imports
- Added Tailwind CSS import to preview.tsx for global styles
- Auto-discovery configured for src/**/*.mdx and src/**/*.stories.@(js|jsx|mjs|ts|tsx)
- Storybook successfully starts on localhost:6006
- Fixed TypeScript errors in sample stories (removed unused React imports)
- Added vite as devDependency for viteFinal configuration
- Build successful: ESM, CJS, and TypeScript declaration files generated
- Typecheck passed with no errors
- Note: ESLint has parsing errors in sample story files (Button.stories.ts, Header.stories.ts, Page.stories.ts) - these are auto-generated by Storybook init and will be replaced with proper component stories in future tasks

---

### Task 1.5: Configure Vitest and React Testing Library
- [x] Status: COMPLETED
- Task ID: UI-005

**Related File Paths:**
- packages/ui/vitest.config.ts
- packages/ui/package.json

**Definition of Done:**
- Vitest configured with jsdom environment
- React Testing Library installed
- CSS modules mocked in tests
- Test script runs successfully

**Out of Scope:**
- Component test writing
- Test coverage configuration

**Rules to Follow:**
- Use jsdom for browser simulation
- Mock CSS modules with identity-obj-proxy
- Set up moduleNameMapper for CSS imports

**Advanced Coding Pattern:**
- Vitest with jsdom for component testing
- CSS module mocking for test isolation

**Anti-Patterns:**
- Do not use real DOM in tests
- Do not skip CSS module mocking
- Do not use old Vitest configuration patterns

**Imports/Exports:**
- Import: @testing-library/react, vitest, @vitest/ui, jsdom
- Export: Vitest configuration

**Depends On:**
- UI-002 (Directory structure)

**Blocks:**
- UI-006 (Button component with tests)

---

#### Subtask UI-005-1: Install testing dependencies
- **Assigned:** AGENT
- **Target:** packages/ui/package.json
- **Description:** Install Vitest, React Testing Library, user-event, jsdom, and identity-obj-proxy. Run `pnpm add -D @testing-library/react @testing-library/user-event vitest @vitest/ui jsdom identity-obj-proxy`.
- **Validation:** Run `cd packages/ui && pnpm vitest --version` to verify Vitest installation
- ✅ COMPLETED

#### Subtask UI-005-2: Create Vitest configuration
- **Assigned:** AGENT
- **Target:** packages/ui/vitest.config.ts
- **Description:** Create vitest.config.ts with jsdom environment, moduleNameMapper for CSS modules, and test match patterns. Configure to find tests in .test.tsx files.
- **Validation:** Run `cd packages/ui && pnpm vitest run --passWithNoTests` to verify configuration
- ✅ COMPLETED

#### Subtask UI-005-3: Configure Vitest for TypeScript
- **Assigned:** AGENT
- **Target:** packages/ui/vitest.config.ts
- **Description:** Configure Vitest to handle TypeScript and JSX natively without Babel. Vitest uses Vite's esbuild transpiler for fast compilation.
- **Validation:** Run `cd packages/ui && pnpm vitest run --passWithNoTests` to verify TypeScript configuration
- ✅ COMPLETED

#### Subtask UI-005-4: Add test script to package.json
- **Assigned:** AGENT
- **Target:** packages/ui/package.json
- **Description:** Add test script to package.json that runs Vitest with proper configuration. Add test:watch script for development with UI support.
- **Validation:** Run `cd packages/ui && pnpm vitest run --passWithNoTests` to verify script works
- ✅ COMPLETED

**Implementation Notes:**
- Installed @testing-library/react v16.3.2, @testing-library/user-event v14.6.1, @testing-library/jest-dom v6.9.1, jsdom v29.1.1, identity-obj-proxy v3.0.0
- Replaced Storybook-only Vitest configuration with jsdom-based configuration for unit testing
- Configured jsdom environment with globals: true for describe/it/expect without imports
- Created src/test-setup.ts to import @testing-library/jest-dom for custom matchers
- Set up moduleNameMapper to mock CSS modules with identity-obj-proxy
- Configured test include pattern: **/*.test.{ts,tsx}
- Added coverage configuration with v8 provider and text/html/lcov reporters
- Added test scripts: test (watch mode), test:run (single run), test:coverage (with coverage), test:ui (browser UI)
- Vitest runs successfully with --passWithNoTests flag
- Build successful: ESM, CJS, and TypeScript declaration files generated
- Note: ESLint has parsing errors in postcss.config.js and sample story files (auto-generated by Storybook init) - these are pre-existing issues not related to this task

---

### Task 1.6: Implement Button Component with Radix UI
- [x] Status: COMPLETED
- Task ID: UI-006

**Related File Paths:**
- packages/ui/src/components/button/Button.tsx
- packages/ui/src/components/button/Button.test.tsx
- packages/ui/src/components/button/Button.stories.tsx
- packages/ui/src/components/button/index.ts

**Definition of Done:**
- Button component built on Radix UI primitive
- Supports variants: primary, secondary, ghost
- Supports sizes: sm, md, lg
- Fully accessible (WCAG 2.2 AA compliant)
- Keyboard navigation working
- Focus indicators visible
- ARIA attributes correct
- Unit tests passing
- Storybook stories created
- TypeScript types defined

**Out of Scope:**
- Loading state
- Icon button variant
- Button group component

**Rules to Follow:**
- Use Radix UI as base primitive
- Semantic HTML with button element
- Proper ARIA attributes
- Keyboard navigation (Enter, Space)
- Visible focus indicators
- TypeScript strict typing
- Tailwind for styling

**Advanced Coding Pattern:**
- Compound component pattern for variants
- Polymorphic component for as prop
- Forward ref for DOM access

**Anti-Patterns:**
- Do not use div for buttons
- Do not skip ARIA attributes
- Do not hardcode styles
- Do not ignore keyboard navigation

**Imports/Exports:**
- Import: @radix-ui/react-slot, class-variance-authority, clsx, tailwind-merge
- Export: Button component, ButtonProps interface

**Depends On:**
- UI-001 (Build system)
- UI-002 (Directory structure)
- UI-003 (Tailwind)
- UI-004 (Storybook)
- UI-005 (Testing)

**Blocks:**
- UI-007 (Input component)
- UI-008 (Navigation component)

---

#### Subtask UI-006-1: Install Radix UI and utility dependencies
- **Assigned:** AGENT
- **Target:** packages/ui/package.json
- **Description:** Install @radix-ui/react-slot, class-variance-authority, clsx, tailwind-merge for component composition and variant management.
- **Validation:** Run `cd packages/ui && pnpm install` to verify dependencies
- ✅ COMPLETED

#### Subtask UI-006-2: Create Button component with TypeScript types
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/button/Button.tsx
- **Description:** Create Button.tsx with ButtonProps interface (variant, size, disabled, asChild, children). Implement using Radix UI Slot for polymorphic behavior. Add variant styles using class-variance-authority. Ensure proper ARIA attributes and keyboard navigation.
- **Validation:** Run `cd packages/ui && npx tsc --noEmit` to verify TypeScript types
- ✅ COMPLETED

#### Subtask UI-006-3: Write unit tests for Button component
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/button/Button.test.tsx
- **Description:** Create Button.test.tsx with tests for: rendering with different variants, size variants, disabled state, click handling, keyboard interaction (Enter, Space), and ARIA attributes. Use React Testing Library and user-event.
- **Validation:** Run `cd packages/ui && pnpm test Button.test.tsx` to verify all tests pass
- ✅ COMPLETED

#### Subtask UI-006-4: Create Storybook stories for Button
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/button/Button.stories.tsx
- **Description:** Create Button.stories.tsx with stories for all variants (primary, secondary, ghost), all sizes (sm, md, lg), disabled state, and interactive examples. Include MDX documentation with props table.
- **Validation:** Run `cd packages/ui && pnpm storybook dev` and verify Button stories render correctly
- ✅ COMPLETED

#### Subtask UI-006-5: Create barrel export for Button
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/button/index.ts
- **Description:** Create index.ts that exports Button component and ButtonProps interface. Update main index.ts to re-export Button.
- **Validation:** Run `cd packages/ui && npx tsc --noEmit` to verify exports work
- ✅ COMPLETED

#### Subtask UI-006-6: Update package.json exports for Button
- **Assigned:** AGENT
- **Target:** packages/ui/package.json
- **Description:** Add Button to exports field in package.json with types, import, and require paths pointing to source and dist files.
- **Validation:** Run `cd packages/ui && pnpm build` to verify build includes Button
- ✅ COMPLETED

**Implementation Notes:**
- Installed @radix-ui/react-slot v1.2.4, class-variance-authority v0.7.1, clsx v2.1.1, tailwind-merge v3.6.0
- Created cn utility function in src/lib/utils/cn.ts for className merging
- Implemented Button component with Radix UI Slot for polymorphic asChild behavior
- Used class-variance-authority for variant management (primary, secondary, ghost) and sizes (sm, md, lg)
- Added proper accessibility features: focus-visible ring, keyboard navigation (Enter, Space), disabled state handling
- Component uses semantic button element by default, can render as child element via asChild prop
- Forward ref implemented for DOM access
- All 16 unit tests passing with React Testing Library and user-event
- Created comprehensive Storybook stories with all variants, sizes, and interactive examples
- Updated barrel exports in button/index.ts and main index.ts
- Added Button to package.json exports for direct imports
- Build successful: ESM, CJS, and TypeScript declaration files generated
- TypeScript typecheck passed (excluded *.stories files from tsconfig)
- Note: ESLint has pre-existing parsing errors in postcss.config.js and auto-generated story files - these are infrastructure issues not related to this task

---

### Task 1.7: Implement Input Component with Accessibility
- [x] Status: COMPLETED
- Task ID: UI-007

**Related File Paths:**
- packages/ui/src/components/input/Input.tsx
- packages/ui/src/components/input/Input.test.tsx
- packages/ui/src/components/input/Input.stories.tsx
- packages/ui/src/components/input/index.ts

**Definition of Done:**
- Input component with proper semantic HTML
- Label association via htmlFor
- Error state with aria-invalid and aria-describedby
- Required field indicator with aria-required
- Auto-completion attributes
- Focus management
- Unit tests passing
- Storybook stories created
- TypeScript types defined

**Out of Scope:**
- Password toggle
- Character counter
- Input group component

**Rules to Follow:**
- Use semantic input element
- Associate labels with inputs
- Proper ARIA attributes for errors
- Auto-completion attributes
- Visible focus indicators
- TypeScript strict typing

**Advanced Coding Pattern:**
- Compound component pattern (Input + Label)
- Controlled and uncontrolled modes
- Forward ref for DOM access

**Anti-Patterns:**
- Do not use div for inputs
- Do not skip label association
- Do not ignore error states
- Do not hardcode placeholder text

**Imports/Exports:**
- Import: react, clsx, tailwind-merge
- Export: Input component, InputProps interface

**Depends On:**
- UI-006 (Button component)

**Blocks:**
- UI-009 (Form component)

---

#### Subtask UI-007-1: Create Input component with TypeScript types
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/input/Input.tsx
- **Description:** Create Input.tsx with InputProps interface (id, label, error, required, disabled, autoComplete, type). Implement proper label association, error state with ARIA attributes, and required field indicator.
- **Validation:** Run `cd packages/ui && npx tsc --noEmit` to verify TypeScript types
- ✅ COMPLETED

#### Subtask UI-007-2: Write unit tests for Input component
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/input/Input.test.tsx
- **Description:** Create Input.test.tsx with tests for: label association, error state display, required field indicator, disabled state, ARIA attributes, and keyboard navigation.
- **Validation:** Run `cd packages/ui && pnpm test Input.test.tsx` to verify all tests pass
- ✅ COMPLETED

#### Subtask UI-007-3: Create Storybook stories for Input
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/input/Input.stories.tsx
- **Description:** Create Input.stories.tsx with stories for: default state, error state, required field, disabled state, different input types (text, email, tel). Include MDX documentation.
- **Validation:** Run `cd packages/ui && pnpm storybook dev` and verify Input stories render correctly
- ✅ COMPLETED

#### Subtask UI-007-4: Create barrel export and update package.json
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/input/index.ts, packages/ui/package.json
- **Description:** Create index.ts exporting Input component and types. Update main index.ts and package.json exports for Input.
- **Validation:** Run `cd packages/ui && pnpm build` to verify build includes Input
- ✅ COMPLETED

**Implementation Notes:**
- Created Input component with proper semantic HTML input element
- Implemented label association via htmlFor with auto-generated unique IDs using React.useId()
- Added error state with aria-invalid="true" and aria-describedby linking to error message
- Implemented required field indicator with asterisk and aria-required attribute
- Added description text support with aria-describedby when no error present
- Configured auto-completion attributes support via autoComplete prop
- Visible focus indicators with Tailwind focus-visible:ring-2 styles
- Forward ref implemented for DOM access
- All 26 unit tests passing with React Testing Library and user-event
- Created comprehensive Storybook stories with all states (default, error, required, disabled) and input types (text, email, tel, password, number)
- Updated barrel exports in input/index.ts and main index.ts
- Added Input to package.json exports for direct imports
- Build successful: ESM, CJS, and TypeScript declaration files generated
- Note: ESLint has pre-existing parsing errors in postcss.config.js and auto-generated story files - these are infrastructure issues not related to this task

---

### Task 1.8: Implement Navigation Component (Responsive)
- [ ] Status: PENDING
- Task ID: UI-008

**Related File Paths:**
- packages/ui/src/components/navigation/Navigation.tsx
- packages/ui/src/components/navigation/Navigation.test.tsx
- packages/ui/src/components/navigation/Navigation.stories.tsx
- packages/ui/src/components/navigation/index.ts

**Definition of Done:**
- Responsive navigation with mobile menu
- Desktop horizontal menu
- Mobile hamburger menu
- Keyboard navigation (Tab, Arrow keys)
- ARIA landmarks (nav, aria-label)
- Skip link implementation
- Focus trap in mobile menu
- Unit tests passing
- Storybook stories created
- TypeScript types defined

**Out of Scope:**
- Mega menu
- Dropdown navigation
- Breadcrumb component

**Rules to Follow:**
- Semantic nav element with aria-label
- Skip link for accessibility
- Keyboard navigation for mobile menu
- Focus trap when menu open
- Close on escape key
- Click outside to close

**Advanced Coding Pattern:**
- Compound component pattern
- Custom hook for menu state
- Focus management hook

**Anti-Patterns:**
- Do not use div for navigation
- Do not skip keyboard navigation
- Do not ignore mobile accessibility
- Do not hardcode navigation items

**Imports/Exports:**
- Import: react, @radix-ui/react-dialog
- Export: Navigation component, NavigationProps interface, NavigationItem interface

**Depends On:**
- UI-006 (Button component)

**Blocks:**
- UI-009 (Footer component)

---

#### Subtask UI-008-1: Create useNavigation hook for menu state
- **Assigned:** AGENT
- **Target:** packages/ui/src/lib/hooks/useNavigation.ts
- **Description:** Create useNavigation.ts hook to manage mobile menu open/close state, focus trap, and keyboard navigation. Handle escape key and click outside to close.
- **Validation:** Run `cd packages/ui && npx tsc --noEmit` to verify TypeScript types

#### Subtask UI-008-2: Create Navigation component with responsive design
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/navigation/Navigation.tsx
- **Description:** Create Navigation.tsx with NavigationProps interface (items, logo). Implement responsive design with desktop horizontal menu and mobile hamburger menu. Use useNavigation hook for state management. Ensure proper ARIA attributes and keyboard navigation.
- **Validation:** Run `cd packages/ui && npx tsc --noEmit` to verify TypeScript types

#### Subtask UI-008-3: Write unit tests for Navigation component
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/navigation/Navigation.test.tsx
- **Description:** Create Navigation.test.tsx with tests for: desktop menu rendering, mobile menu toggle, keyboard navigation, focus trap, escape key handling, and ARIA attributes.
- **Validation:** Run `cd packages/ui && pnpm test Navigation.test.tsx` to verify all tests pass

#### Subtask UI-008-4: Create Storybook stories for Navigation
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/navigation/Navigation.stories.tsx
- **Description:** Create Navigation.stories.tsx with stories for: desktop view, mobile view, with logo, without logo, and different navigation item configurations. Include MDX documentation.
- **Validation:** Run `cd packages/ui && pnpm storybook dev` and verify Navigation stories render correctly

#### Subtask UI-008-5: Create barrel export and update package.json
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/navigation/index.ts, packages/ui/package.json
- **Description:** Create index.ts exporting Navigation component and types. Update main index.ts and package.json exports for Navigation.
- **Validation:** Run `cd packages/ui && pnpm build` to verify build includes Navigation

---

### Task 1.9: Implement Footer Component
- [ ] Status: PENDING
- Task ID: UI-009

**Related File Paths:**
- packages/ui/src/components/footer/Footer.tsx
- packages/ui/src/components/footer/Footer.test.tsx
- packages/ui/src/components/footer/Footer.stories.tsx
- packages/ui/src/components/footer/index.ts

**Definition of Done:**
- Footer with semantic footer element
- Multiple column layout
- Social media links
- Copyright information
- ARIA landmark (role="contentinfo")
- Keyboard accessible links
- Unit tests passing
- Storybook stories created
- TypeScript types defined

**Out of Scope:**
- Newsletter signup
- Multi-language footer

**Rules to Follow:**
- Semantic footer element
- Proper heading hierarchy
- Accessible link text
- Keyboard navigation
- ARIA landmarks

**Advanced Coding Pattern:**
- Compound component pattern
- Configurable column layout

**Anti-Patterns:**
- Do not use div for footer
- Do not skip semantic HTML
- Do not use generic link text

**Imports/Exports:**
- Import: react
- Export: Footer component, FooterProps interface, FooterColumn interface

**Depends On:**
- UI-008 (Navigation component)

**Blocks:**
- UI-010 (Card component)

---

#### Subtask UI-009-1: Create Footer component with TypeScript types
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/footer/Footer.tsx
- **Description:** Create Footer.tsx with FooterProps interface (columns, socialLinks, copyright). Implement multi-column layout with proper heading hierarchy and accessible links. Use semantic footer element with role="contentinfo".
- **Validation:** Run `cd packages/ui && npx tsc --noEmit` to verify TypeScript types

#### Subtask UI-009-2: Write unit tests for Footer component
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/footer/Footer.test.tsx
- **Description:** Create Footer.test.tsx with tests for: column rendering, social link rendering, copyright display, ARIA landmarks, and keyboard navigation.
- **Validation:** Run `cd packages/ui && pnpm test Footer.test.tsx` to verify all tests pass

#### Subtask UI-009-3: Create Storybook stories for Footer
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/footer/Footer.stories.tsx
- **Description:** Create Footer.stories.tsx with stories for: single column, multiple columns, with social links, without social links. Include MDX documentation.
- **Validation:** Run `cd packages/ui && pnpm storybook dev` and verify Footer stories render correctly

#### Subtask UI-009-4: Create barrel export and update package.json
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/footer/index.ts, packages/ui/package.json
- **Description:** Create index.ts exporting Footer component and types. Update main index.ts and package.json exports for Footer.
- **Validation:** Run `cd packages/ui && pnpm build` to verify build includes Footer

---

### Task 1.10: Implement Card Component
- [ ] Status: PENDING
- Task ID: UI-010

**Related File Paths:**
- packages/ui/src/components/card/Card.tsx
- packages/ui/src/components/card/Card.test.tsx
- packages/ui/src/components/card/Card.stories.tsx
- packages/ui/src/components/card/index.ts

**Definition of Done:**
- Card component with semantic article element
- Configurable content sections (header, body, footer)
- Variant support (default, elevated, outlined)
- Keyboard accessible interactive cards
- Unit tests passing
- Storybook stories created
- TypeScript types defined

**Out of Scope:**
- Card grid component
- Horizontal card variant

**Rules to Follow:**
- Semantic article element
- Proper heading hierarchy
- Keyboard accessibility for interactive cards
- Focus indicators
- TypeScript strict typing

**Advanced Coding Pattern:**
- Compound component pattern (Card, CardHeader, CardBody, CardFooter)
- Slot-based composition

**Anti-Patterns:**
- Do not use div for card
- Do not skip semantic HTML
- Do not ignore keyboard accessibility

**Imports/Exports:**
- Import: react
- Export: Card components, CardProps interface

**Depends On:**
- UI-009 (Footer component)

**Blocks:**
- UI-011 (ServiceCard component)

---

#### Subtask UI-010-1: Create Card component with compound pattern
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/card/Card.tsx
- **Description:** Create Card.tsx with Card, CardHeader, CardBody, CardFooter components using compound pattern. Use semantic article element. Support variants (default, elevated, outlined). Ensure keyboard accessibility for interactive cards.
- **Validation:** Run `cd packages/ui && npx tsc --noEmit` to verify TypeScript types

#### Subtask UI-010-2: Write unit tests for Card component
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/card/Card.test.tsx
- **Description:** Create Card.test.tsx with tests for: compound component rendering, variant styles, keyboard interaction, and semantic HTML structure.
- **Validation:** Run `cd packages/ui && pnpm test Card.test.tsx` to verify all tests pass

#### Subtask UI-010-3: Create Storybook stories for Card
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/card/Card.stories.tsx
- **Description:** Create Card.stories.tsx with stories for: all variants, compound composition, interactive card, and different content configurations. Include MDX documentation.
- **Validation:** Run `cd packages/ui && pnpm storybook dev` and verify Card stories render correctly

#### Subtask UI-010-4: Create barrel export and update package.json
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/card/index.ts, packages/ui/package.json
- **Description:** Create index.ts exporting Card components and types. Update main index.ts and package.json exports for Card.
- **Validation:** Run `cd packages/ui && pnpm build` to verify build includes Card

---

### Task 1.11: Implement ServiceCard Component (Business-Specific)
- [ ] Status: PENDING
- Task ID: UI-011

**Related File Paths:**
- packages/ui/src/components/business/ServiceCard.tsx
- packages/ui/src/components/business/ServiceCard.test.tsx
- packages/ui/src/components/business/ServiceCard.stories.tsx
- packages/ui/src/components/business/index.ts

**Definition of Done:**
- ServiceCard built on Card component
- Service name and description
- Price display
- Features list
- CTA button
- Keyboard accessible
- Unit tests passing
- Storybook stories created
- TypeScript types defined

**Out of Scope:**
- Booking integration
- Image gallery

**Rules to Follow:**
- Extend Card component
- Semantic HTML for features list
- Accessible price display
- Clear CTA button
- TypeScript strict typing

**Advanced Coding Pattern:**
- Component composition
- Business-specific abstraction

**Anti-Patterns:**
- Do not duplicate Card logic
- Do not hardcode service data
- Do not skip accessibility

**Imports/Exports:**
- Import: react, @marketing/ui/card, @marketing/ui/button
- Export: ServiceCard component, ServiceCardProps interface

**Depends On:**
- UI-006 (Button component)
- UI-010 (Card component)

**Blocks:**
- UI-012 (TeamMemberCard component)

---

#### Subtask UI-011-1: Create ServiceCard component
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/business/ServiceCard.tsx
- **Description:** Create ServiceCard.tsx with ServiceCardProps interface (name, description, price, features, ctaText, onCtaClick). Compose using Card, Button components. Display features as accessible list. Ensure keyboard navigation.
- **Validation:** Run `cd packages/ui && npx tsc --noEmit` to verify TypeScript types

#### Subtask UI-011-2: Write unit tests for ServiceCard
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/business/ServiceCard.test.tsx
- **Description:** Create ServiceCard.test.tsx with tests for: service information display, price rendering, features list, CTA button click, and keyboard accessibility.
- **Validation:** Run `cd packages/ui && pnpm test ServiceCard.test.tsx` to verify all tests pass

#### Subtask UI-011-3: Create Storybook stories for ServiceCard
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/business/ServiceCard.stories.tsx
- **Description:** Create ServiceCard.stories.tsx with stories for: different service types, with/without price, different feature lists, and CTA interactions. Include MDX documentation.
- **Validation:** Run `cd packages/ui && pnpm storybook dev` and verify ServiceCard stories render correctly

#### Subtask UI-011-4: Create barrel export and update package.json
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/business/index.ts, packages/ui/package.json
- **Description:** Create index.ts exporting ServiceCard component and types. Update main index.ts and package.json exports for ServiceCard.
- **Validation:** Run `cd packages/ui && pnpm build` to verify build includes ServiceCard

---

### Task 1.12: Implement TeamMemberCard Component
- [ ] Status: PENDING
- Task ID: UI-012

**Related File Paths:**
- packages/ui/src/components/business/TeamMemberCard.tsx
- packages/ui/src/components/business/TeamMemberCard.test.tsx
- packages/ui/src/components/business/TeamMemberCard.stories.tsx
- packages/ui/src/components/business/index.ts

**Definition of Done:**
- TeamMemberCard built on Card component
- Member photo with alt text
- Name and role
- Bio/description
- Social media links
- Keyboard accessible
- Unit tests passing
- Storybook stories created
- TypeScript types defined

**Out of Scope:**
- Image gallery
- Booking integration

**Rules to Follow:**
- Extend Card component
- Proper alt text for images
- Accessible social links
- Semantic HTML
- TypeScript strict typing

**Advanced Coding Pattern:**
- Component composition
- Business-specific abstraction

**Anti-Patterns:**
- Do not duplicate Card logic
- Do not skip alt text
- Do not use generic link text

**Imports/Exports:**
- Import: react, @marketing/ui/card
- Export: TeamMemberCard component, TeamMemberCardProps interface

**Depends On:**
- UI-010 (Card component)
- UI-011 (ServiceCard component)

**Blocks:**
- UI-013 (TestimonialCard component)

---

#### Subtask UI-012-1: Create TeamMemberCard component
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/business/TeamMemberCard.tsx
- **Description:** Create TeamMemberCard.tsx with TeamMemberCardProps interface (name, role, bio, photo, socialLinks). Compose using Card component. Ensure proper alt text for photos and accessible social links.
- **Validation:** Run `cd packages/ui && npx tsc --noEmit` to verify TypeScript types

#### Subtask UI-012-2: Write unit tests for TeamMemberCard
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/business/TeamMemberCard.test.tsx
- **Description:** Create TeamMemberCard.test.tsx with tests for: member information display, photo alt text, social link accessibility, and keyboard navigation.
- **Validation:** Run `cd packages/ui && pnpm test TeamMemberCard.test.tsx` to verify all tests pass

#### Subtask UI-012-3: Create Storybook stories for TeamMemberCard
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/business/TeamMemberCard.stories.tsx
- **Description:** Create TeamMemberCard.stories.tsx with stories for: with/without photo, different social link configurations, and various bio lengths. Include MDX documentation.
- **Validation:** Run `cd packages/ui && pnpm storybook dev` and verify TeamMemberCard stories render correctly

#### Subtask UI-012-4: Create barrel export and update package.json
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/business/index.ts, packages/ui/package.json
- **Description:** Update index.ts to export TeamMemberCard component and types. Update package.json exports for TeamMemberCard.
- **Validation:** Run `cd packages/ui && pnpm build` to verify build includes TeamMemberCard

---

### Task 1.13: Implement TestimonialCard Component
- [ ] Status: PENDING
- Task ID: UI-013

**Related File Paths:**
- packages/ui/src/components/business/TestimonialCard.tsx
- packages/ui/src/components/business/TestimonialCard.test.tsx
- packages/ui/src/components/business/TestimonialCard.stories.tsx
- packages/ui/src/components/business/index.ts

**Definition of Done:**
- TestimonialCard built on Card component
- Customer name and role
- Testimonial text
- Rating display
- Customer photo with alt text
- Keyboard accessible
- Unit tests passing
- Storybook stories created
- TypeScript types defined

**Out of Scope:**
- Video testimonials
- Carousel component

**Rules to Follow:**
- Extend Card component
- Proper alt text for images
- Accessible rating display
- Semantic blockquote for testimonial
- TypeScript strict typing

**Advanced Coding Pattern:**
- Component composition
- Business-specific abstraction

**Anti-Patterns:**
- Do not duplicate Card logic
- Do not skip alt text
- Do not use div for blockquote

**Imports/Exports:**
- Import: react, @marketing/ui/card
- Export: TestimonialCard component, TestimonialCardProps interface

**Depends On:**
- UI-010 (Card component)
- UI-012 (TeamMemberCard component)

**Blocks:**
- UI-014 (Form component)

---

#### Subtask UI-013-1: Create TestimonialCard component
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/business/TestimonialCard.tsx
- **Description:** Create TestimonialCard.tsx with TestimonialCardProps interface (name, role, testimonial, rating, photo). Compose using Card component. Use semantic blockquote for testimonial. Ensure accessible rating display and proper alt text.
- **Validation:** Run `cd packages/ui && npx tsc --noEmit` to verify TypeScript types

#### Subtask UI-013-2: Write unit tests for TestimonialCard
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/business/TestimonialCard.test.tsx
- **Description:** Create TestimonialCard.test.tsx with tests for: testimonial display, rating rendering, customer information, photo alt text, and semantic HTML structure.
- **Validation:** Run `cd packages/ui && pnpm test TestimonialCard.test.tsx` to verify all tests pass

#### Subtask UI-013-3: Create Storybook stories for TestimonialCard
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/business/TestimonialCard.stories.tsx
- **Description:** Create TestimonialCard.stories.tsx with stories for: different ratings, with/without photo, various testimonial lengths, and different customer roles. Include MDX documentation.
- **Validation:** Run `cd packages/ui && pnpm storybook dev` and verify TestimonialCard stories render correctly

#### Subtask UI-013-4: Create barrel export and update package.json
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/business/index.ts, packages/ui/package.json
- **Description:** Update index.ts to export TestimonialCard component and types. Update package.json exports for TestimonialCard.
- **Validation:** Run `cd packages/ui && pnpm build` to verify build includes TestimonialCard

---

### Task 1.14: Implement Form Component with Validation
- [ ] Status: PENDING
- Task ID: UI-014

**Related File Paths:**
- packages/ui/src/components/form/Form.tsx
- packages/ui/src/components/form/Form.test.tsx
- packages/ui/src/components/form/Form.stories.tsx
- packages/ui/src/components/form/index.ts

**Definition of Done:**
- Form component with validation
- Error summary with aria-live
- Field-level error display
- Focus on first error after validation
- Accessible form structure
- Unit tests passing
- Storybook stories created
- TypeScript types defined

**Out of Scope:**
- Complex validation rules
- Multi-step forms

**Rules to Follow:**
- Semantic form element
- Proper label association
- ARIA attributes for errors
- Focus management
- Error summary with aria-live
- TypeScript strict typing

**Advanced Coding Pattern:**
- Compound component pattern
- Custom hook for form state
- Validation schema

**Anti-Patterns:**
- Do not use div for form
- Do not skip label association
- Do not ignore error states
- Do not skip focus management

**Imports/Exports:**
- Import: react, @marketing/ui/input, @marketing/ui/button
- Export: Form component, FormProps interface, useForm hook

**Depends On:**
- UI-006 (Button component)
- UI-007 (Input component)

**Blocks:**
- UI-015 (ContactForm component)

---

#### Subtask UI-014-1: Create useForm hook for form state and validation
- **Assigned:** AGENT
- **Target:** packages/ui/src/lib/hooks/useForm.ts
- **Description:** Create useForm.ts hook with form state management, validation logic, error handling, and focus management on first error. Support custom validation rules.
- **Validation:** Run `cd packages/ui && npx tsc --noEmit` to verify TypeScript types

#### Subtask UI-014-2: Create Form component with validation
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/form/Form.tsx
- **Description:** Create Form.tsx with FormProps interface (onSubmit, validationSchema, children). Implement error summary with aria-live, field-level error display, and focus management. Use useForm hook internally.
- **Validation:** Run `cd packages/ui && npx tsc --noEmit` to verify TypeScript types

#### Subtask UI-014-3: Write unit tests for Form component
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/form/Form.test.tsx
- **Description:** Create Form.test.tsx with tests for: form submission, validation errors, error summary display, focus management on first error, and ARIA attributes.
- **Validation:** Run `cd packages/ui && pnpm test Form.test.tsx` to verify all tests pass

#### Subtask UI-014-4: Create Storybook stories for Form
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/form/Form.stories.tsx
- **Description:** Create Form.stories.tsx with stories for: valid form submission, validation errors, multiple fields, and custom validation rules. Include MDX documentation.
- **Validation:** Run `cd packages/ui && pnpm storybook dev` and verify Form stories render correctly

#### Subtask UI-014-5: Create barrel export and update package.json
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/form/index.ts, packages/ui/package.json
- **Description:** Create index.ts exporting Form component, useForm hook, and types. Update main index.ts and package.json exports for Form.
- **Validation:** Run `cd packages/ui && pnpm build` to verify build includes Form

---

### Task 1.15: Implement ContactForm Component (Business-Specific)
- [ ] Status: PENDING
- Task ID: UI-015

**Related File Paths:**
- packages/ui/src/components/business/ContactForm.tsx
- packages/ui/src/components/business/ContactForm.test.tsx
- packages/ui/src/components/business/ContactForm.stories.tsx
- packages/ui/src/components/business/index.ts

**Definition of Done:**
- ContactForm built on Form component
- Name, email, message fields
- Validation for all fields
- Success message with aria-live
- Error handling
- Keyboard accessible
- Unit tests passing
- Storybook stories created
- TypeScript types defined

**Out of Scope:**
- File upload
- CAPTCHA integration

**Rules to Follow:**
- Extend Form component
- Proper field validation
- Accessible success/error messages
- Clear form structure
- TypeScript strict typing

**Advanced Coding Pattern:**
- Component composition
- Business-specific abstraction

**Anti-Patterns:**
- Do not duplicate Form logic
- Do not skip validation
- Do not ignore accessibility

**Imports/Exports:**
- Import: react, @marketing/ui/form
- Export: ContactForm component, ContactFormProps interface

**Depends On:**
- UI-014 (Form component)

**Blocks:**
- UI-016 (BookingForm component)

---

#### Subtask UI-015-1: Create ContactForm component
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/business/ContactForm.tsx
- **Description:** Create ContactForm.tsx with ContactFormProps interface (onSubmit). Compose using Form component with name, email, and message fields. Implement validation for all fields. Add success message with aria-live.
- **Validation:** Run `cd packages/ui && npx tsc --noEmit` to verify TypeScript types

#### Subtask UI-015-2: Write unit tests for ContactForm
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/business/ContactForm.test.tsx
- **Description:** Create ContactForm.test.tsx with tests for: form rendering, field validation, successful submission, error handling, and success message display.
- **Validation:** Run `cd packages/ui && pnpm test ContactForm.test.tsx` to verify all tests pass

#### Subtask UI-015-3: Create Storybook stories for ContactForm
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/business/ContactForm.stories.tsx
- **Description:** Create ContactForm.stories.tsx with stories for: valid submission, validation errors, success state, and error state. Include MDX documentation.
- **Validation:** Run `cd packages/ui && pnpm storybook dev` and verify ContactForm stories render correctly

#### Subtask UI-015-4: Create barrel export and update package.json
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/business/index.ts, packages/ui/package.json
- **Description:** Update index.ts to export ContactForm component and types. Update package.json exports for ContactForm.
- **Validation:** Run `cd packages/ui && pnpm build` to verify build includes ContactForm

---

### Task 1.16: Implement BookingForm Component
- [ ] Status: PENDING
- Task ID: UI-016

**Related File Paths:**
- packages/ui/src/components/business/BookingForm.tsx
- packages/ui/src/components/business/BookingForm.test.tsx
- packages/ui/src/components/business/BookingForm.stories.tsx
- packages/ui/src/components/business/index.ts

**Definition of Done:**
- BookingForm built on Form component
- Service selection
- Date/time picker
- Customer information fields
- Validation for all fields
- Success message with aria-live
- Keyboard accessible
- Unit tests passing
- Storybook stories created
- TypeScript types defined

**Out of Scope:**
- Calendar integration
- Payment processing

**Rules to Follow:**
- Extend Form component
- Proper field validation
- Accessible date/time inputs
- Clear form structure
- TypeScript strict typing

**Advanced Coding Pattern:**
- Component composition
- Business-specific abstraction

**Anti-Patterns:**
- Do not duplicate Form logic
- Do not skip validation
- Do not use inaccessible date pickers

**Imports/Exports:**
- Import: react, @marketing/ui/form, @radix-ui/react-popover
- Export: BookingForm component, BookingFormProps interface

**Depends On:**
- UI-014 (Form component)
- UI-015 (ContactForm component)

**Blocks:**
- UI-017 (Accordion component)

---

#### Subtask UI-016-1: Create BookingForm component
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/business/BookingForm.tsx
- **Description:** Create BookingForm.tsx with BookingFormProps interface (services, onSubmit). Compose using Form component with service selection, date/time picker, and customer information fields. Implement validation for all fields.
- **Validation:** Run `cd packages/ui && npx tsc --noEmit` to verify TypeScript types

#### Subtask UI-016-2: Write unit tests for BookingForm
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/business/BookingForm.test.tsx
- **Description:** Create BookingForm.test.tsx with tests for: service selection, date/time input, validation, successful submission, and error handling.
- **Validation:** Run `cd packages/ui && pnpm test BookingForm.test.tsx` to verify all tests pass

#### Subtask UI-016-3: Create Storybook stories for BookingForm
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/business/BookingForm.stories.tsx
- **Description:** Create BookingForm.stories.tsx with stories for: different service options, date/time selection, validation errors, and successful booking. Include MDX documentation.
- **Validation:** Run `cd packages/ui && pnpm storybook dev` and verify BookingForm stories render correctly

#### Subtask UI-016-4: Create barrel export and update package.json
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/business/index.ts, packages/ui/package.json
- **Description:** Update index.ts to export BookingForm component and types. Update package.json exports for BookingForm.
- **Validation:** Run `cd packages/ui && pnpm build` to verify build includes BookingForm

---

### Task 1.17: Implement Accordion Component (for FAQ)
- [ ] Status: PENDING
- Task ID: UI-017

**Related File Paths:**
- packages/ui/src/components/feedback/Accordion.tsx
- packages/ui/src/components/feedback/Accordion.test.tsx
- packages/ui/src/components/feedback/Accordion.stories.tsx
- packages/ui/src/components/feedback/index.ts

**Definition of Done:**
- Accordion component with Radix UI
- Multiple accordion items
- Keyboard navigation (Enter, Space, Arrow keys)
- ARIA attributes (aria-expanded, aria-controls)
- Focus management
- Unit tests passing
- Storybook stories created
- TypeScript types defined

**Out of Scope:**
- Nested accordions
- Animated transitions

**Rules to Follow:**
- Use Radix UI Accordion primitive
- Proper ARIA attributes
- Keyboard navigation
- Focus management
- TypeScript strict typing

**Advanced Coding Pattern:**
- Radix UI primitive composition
- Accessible component pattern

**Anti-Patterns:**
- Do not implement custom accordion logic
- Do not skip ARIA attributes
- Do not ignore keyboard navigation

**Imports/Exports:**
- Import: @radix-ui/react-accordion
- Export: Accordion components, AccordionItemProps interface

**Depends On:**
- UI-016 (BookingForm component)

**Blocks:**
- UI-018 (GalleryGrid component)

---

#### Subtask UI-017-1: Create Accordion component with Radix UI
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/feedback/Accordion.tsx
- **Description:** Create Accordion.tsx using @radix-ui/react-accordion primitive. Export Accordion, AccordionItem, AccordionTrigger, AccordionContent components. Ensure proper ARIA attributes and keyboard navigation.
- **Validation:** Run `cd packages/ui && npx tsc --noEmit` to verify TypeScript types

#### Subtask UI-017-2: Write unit tests for Accordion
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/feedback/Accordion.test.tsx
- **Description:** Create Accordion.test.tsx with tests for: item expansion/collapse, keyboard navigation, ARIA attributes, and multiple item behavior.
- **Validation:** Run `cd packages/ui && pnpm test Accordion.test.tsx` to verify all tests pass

#### Subtask UI-017-3: Create Storybook stories for Accordion
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/feedback/Accordion.stories.tsx
- **Description:** Create Accordion.stories.tsx with stories for: single item, multiple items, default open item, and keyboard navigation examples. Include MDX documentation.
- **Validation:** Run `cd packages/ui && pnpm storybook dev` and verify Accordion stories render correctly

#### Subtask UI-017-4: Create barrel export and update package.json
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/feedback/index.ts, packages/ui/package.json
- **Description:** Create index.ts exporting Accordion components and types. Update main index.ts and package.json exports for Accordion.
- **Validation:** Run `cd packages/ui && pnpm build` to verify build includes Accordion

---

### Task 1.18: Implement GalleryGrid Component
- [ ] Status: PENDING
- Task ID: UI-018

**Related File Paths:**
- packages/ui/src/components/business/GalleryGrid.tsx
- packages/ui/src/components/business/GalleryGrid.test.tsx
- packages/ui/src/components/business/GalleryGrid.stories.tsx
- packages/ui/src/components/business/index.ts

**Definition of Done:**
- GalleryGrid component for image display
- Responsive grid layout
- Image alt text
- Lightbox/modal for enlarged view
- Keyboard navigation
- Unit tests passing
- Storybook stories created
- TypeScript types defined

**Out of Scope:**
- Image upload
- Image editing

**Rules to Follow:**
- Responsive grid layout
- Proper alt text for images
- Accessible lightbox
- Keyboard navigation
- TypeScript strict typing

**Advanced Coding Pattern:**
- Grid layout with CSS Grid
- Lightbox with Radix UI Dialog

**Anti-Patterns:**
- Do not skip alt text
- Do not use inaccessible lightbox
- Do not ignore responsive design

**Imports/Exports:**
- Import: react, @radix-ui/react-dialog
- Export: GalleryGrid component, GalleryGridProps interface

**Depends On:**
- UI-017 (Accordion component)

**Blocks:**
- UI-019 (SkipLink component)

---

#### Subtask UI-018-1: Create GalleryGrid component
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/business/GalleryGrid.tsx
- **Description:** Create GalleryGrid.tsx with GalleryGridProps interface (images, columns). Implement responsive grid layout with CSS Grid. Add lightbox/modal for enlarged view using Radix UI Dialog. Ensure proper alt text and keyboard navigation.
- **Validation:** Run `cd packages/ui && npx tsc --noEmit` to verify TypeScript types

#### Subtask UI-018-2: Write unit tests for GalleryGrid
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/business/GalleryGrid.test.tsx
- **Description:** Create GalleryGrid.test.tsx with tests for: grid rendering, image alt text, lightbox open/close, and keyboard navigation.
- **Validation:** Run `cd packages/ui && pnpm test GalleryGrid.test.tsx` to verify all tests pass

#### Subtask UI-018-3: Create Storybook stories for GalleryGrid
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/business/GalleryGrid.stories.tsx
- **Description:** Create GalleryGrid.stories.tsx with stories for: different column layouts, various image counts, lightbox interaction, and responsive behavior. Include MDX documentation.
- **Validation:** Run `cd packages/ui && pnpm storybook dev` and verify GalleryGrid stories render correctly

#### Subtask UI-018-4: Create barrel export and update package.json
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/business/index.ts, packages/ui/package.json
- **Description:** Update index.ts to export GalleryGrid component and types. Update package.json exports for GalleryGrid.
- **Validation:** Run `cd packages/ui && pnpm build` to verify build includes GalleryGrid

---

### Task 1.19: Implement SkipLink Component
- [ ] Status: PENDING
- Task ID: UI-019

**Related File Paths:**
- packages/ui/src/components/navigation/SkipLink.tsx
- packages/ui/src/components/navigation/SkipLink.test.tsx
- packages/ui/src/components/navigation/SkipLink.stories.tsx
- packages/ui/src/components/navigation/index.ts

**Definition of Done:**
- SkipLink component for accessibility
- Hidden by default, visible on focus
- Links to main content
- Proper CSS for visibility
- Unit tests passing
- Storybook stories created
- TypeScript types defined

**Out of Scope:**
- Multiple skip links

**Rules to Follow:**
- WCAG 2.1.1 compliance
- Hidden off-screen, visible on focus
- Links to #main-content
- Proper z-index
- TypeScript strict typing

**Advanced Coding Pattern:**
- CSS positioning for skip link
- Focus-visible pseudo-class

**Anti-Patterns:**
- Do not make skip link always visible
- Do not skip focus styling
- Do not use generic link text

**Imports/Exports:**
- Import: react
- Export: SkipLink component, SkipLinkProps interface

**Depends On:**
- UI-018 (GalleryGrid component)

**Blocks:**
- Phase 2 (Firm website implementation)

---

#### Subtask UI-019-1: Create SkipLink component
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/navigation/SkipLink.tsx
- **Description:** Create SkipLink.tsx with SkipLinkProps interface (targetId). Implement CSS to hide link off-screen by default and show on focus. Link to #main-content by default.
- **Validation:** Run `cd packages/ui && npx tsc --noEmit` to verify TypeScript types

#### Subtask UI-019-2: Write unit tests for SkipLink
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/navigation/SkipLink.test.tsx
- **Description:** Create SkipLink.test.tsx with tests for: link rendering, focus visibility, and correct target attribute.
- **Validation:** Run `cd packages/ui && pnpm test SkipLink.test.tsx` to verify all tests pass

#### Subtask UI-019-3: Create Storybook stories for SkipLink
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/navigation/SkipLink.stories.tsx
- **Description:** Create SkipLink.stories.tsx with stories for: default behavior, custom target, and focus state demonstration. Include MDX documentation.
- **Validation:** Run `cd packages/ui && pnpm storybook dev` and verify SkipLink stories render correctly

#### Subtask UI-019-4: Create barrel export and update package.json
- **Assigned:** AGENT
- **Target:** packages/ui/src/components/navigation/index.ts, packages/ui/package.json
- **Description:** Update index.ts to export SkipLink component and types. Update package.json exports for SkipLink.
- **Validation:** Run `cd packages/ui && pnpm build` to verify build includes SkipLink

---

## Phase 1 Completion Criteria

Phase 1 is complete when:
- All 19 tasks (UI-001 through UI-019) are marked as complete
- packages/ui builds successfully
- All components have passing unit tests
- All components have Storybook documentation
- All components are WCAG 2.2 AA compliant
- packages/ui can be imported by other apps in the monorepo

# Marketing Monorepo Implementation Tasks - Phase 2

## Phase 2: Firm Website Implementation

This phase focuses on implementing the marketing firm website using the shared UI component library built in Phase 1.

---

### Task 2.1: Configure Firm App to Use packages/ui
- [ ] Status: PENDING
- Task ID: FIRM-001

**Related File Paths:**
- apps/firm/package.json
- apps/firm/tsconfig.json
- apps/firm/tailwind.config.ts

**Definition of Done:**
- packages/ui added as dependency
- TypeScript path aliases configured
- Tailwind configured to use packages/ui design tokens
- Build runs successfully
- Components can be imported from @marketing/ui

**Out of Scope:**
- Page implementation
- Component usage

**Rules to Follow:**
- Add packages/ui as dependency
- Configure path aliases in tsconfig.json
- Extend Tailwind config from packages/ui
- Use workspace protocol for dependency

**Advanced Coding Pattern:**
- Workspace protocol for monorepo dependencies
- Tailwind config extension

**Anti-Patterns:**
- Do not use relative imports
- Do not duplicate Tailwind config
- Do not skip path aliases

**Imports/Exports:**
- Import: @marketing/ui
- Export: None

**Depends On:**
- UI-019 (SkipLink component - Phase 1 complete)

**Blocks:**
- FIRM-002 (Firm homepage)

---

#### Subtask FIRM-001-1: Add packages/ui dependency to firm app
- **Assigned:** AGENT
- **Target:** apps/firm/package.json
- **Description:** Add @marketing/ui as dependency using workspace protocol. Run `pnpm add @marketing/ui` in apps/firm directory.
- **Validation:** Run `cd apps/firm && pnpm install` to verify dependency installed

#### Subtask FIRM-001-2: Configure TypeScript path aliases
- **Assigned:** AGENT
- **Target:** apps/firm/tsconfig.json
- **Description:** Update tsconfig.json to include path alias for @marketing/ui pointing to ../../packages/ui/src.
- **Validation:** Run `cd apps/firm && npx tsc --noEmit` to verify path resolution

#### Subtask FIRM-001-3: Extend Tailwind configuration
- **Assigned:** AGENT
- **Target:** apps/firm/tailwind.config.ts
- **Description:** Update tailwind.config.ts to extend from packages/ui/tailwind.config.ts. Import and spread the UI package config.
- **Validation:** Run `cd apps/firm && npx tailwindcss --help` to verify Tailwind configuration

#### Subtask FIRM-001-4: Test component import
- **Assigned:** AGENT
- **Target:** apps/firm/src/app/page.tsx
- **Description:** Temporarily import a Button component from @marketing/ui in page.tsx to verify import works. Remove after verification.
- **Validation:** Run `cd apps/firm && pnpm dev` and verify no import errors

---

### Task 2.2: Implement Firm Homepage
- [ ] Status: PENDING
- Task ID: FIRM-002

**Related File Paths:**
- apps/firm/src/app/page.tsx
- apps/firm/src/app/layout.tsx

**Definition of Done:**
- Homepage with clear value proposition
- Hero section with CTA
- Services preview section
- Social proof section (testimonials, client logos)
- Navigation and Footer components integrated
- SkipLink component integrated
- Responsive design
- Accessible (WCAG 2.2 AA)
- SEO metadata

**Out of Scope:**
- Full services page
- Portfolio page
- Blog page

**Rules to Follow:**
- Use packages/ui components
- Semantic HTML structure
- Proper heading hierarchy
- ARIA landmarks
- Keyboard navigation
- Responsive design
- SEO metadata

**Advanced Coding Pattern:**
- Component composition
- Page layout patterns

**Anti-Patterns:**
- Do not use div for semantic elements
- Do not skip heading hierarchy
- Do not ignore accessibility
- Do not hardcode content

**Imports/Exports:**
- Import: @marketing/ui/navigation, @marketing/ui/footer, @marketing/ui/button, @marketing/ui/card
- Export: Page component

**Depends On:**
- FIRM-001 (packages/ui integration)

**Blocks:**
- FIRM-003 (About page)

---

#### Subtask FIRM-002-1: Update root layout with Navigation, Footer, SkipLink
- **Assigned:** AGENT
- **Target:** apps/firm/src/app/layout.tsx
- **Description:** Update layout.tsx to include SkipLink, Navigation, and Footer components from @marketing/ui. Configure Navigation with firm-specific menu items. Ensure proper ARIA landmarks and semantic HTML structure.
- **Validation:** Run `cd apps/firm && pnpm dev` and verify layout renders correctly

#### Subtask FIRM-002-2: Create homepage hero section
- **Assigned:** AGENT
- **Target:** apps/firm/src/app/page.tsx
- **Description:** Create hero section with clear value proposition, headline, subheadline, and primary CTA button. Use semantic HTML (h1, main). Ensure keyboard accessibility and responsive design.
- **Validation:** Run `cd apps/firm && pnpm dev` and verify hero section renders correctly

#### Subtask FIRM-002-3: Add services preview section
- **Assigned:** AGENT
- **Target:** apps/firm/src/app/page.tsx
- **Description:** Add services preview section using ServiceCard components from @marketing/ui. Display 3-4 key services with brief descriptions and CTAs. Use semantic section element with proper heading.
- **Validation:** Run `cd apps/firm && pnpm dev` and verify services section renders correctly

#### Subtask FIRM-002-4: Add social proof section
- **Assigned:** AGENT
- **Target:** apps/firm/src/app/page.tsx
- **Description:** Add social proof section with client logos (or placeholder) and TestimonialCard components. Use semantic section element with proper heading. Ensure accessible logo descriptions.
- **Validation:** Run `cd apps/firm && pnpm dev` and verify social proof section renders correctly

#### Subtask FIRM-002-5: Add SEO metadata
- **Assigned:** AGENT
- **Target:** apps/firm/src/app/page.tsx
- **Description:** Add metadata object with title, description, keywords, and Open Graph tags. Ensure metadata is relevant to marketing firm services.
- **Validation:** Run `cd apps/firm && pnpm build` and verify metadata in generated HTML

#### Subtask FIRM-002-6: Test homepage accessibility
- **Assigned:** HUMAN
- **Target:** apps/firm/src/app/page.tsx
- **Description:** Test homepage with keyboard navigation and screen reader. Verify heading hierarchy, ARIA landmarks, focus management, and skip link functionality. Report any accessibility issues for agent to fix.
- **Validation:** Manual accessibility testing with keyboard and screen reader

---

### Task 2.3: Implement Firm About Page
- [ ] Status: PENDING
- Task ID: FIRM-003

**Related File Paths:**
- apps/firm/src/app/about/page.tsx

**Definition of Done:**
- About page with firm story
- Mission and values section
- Team section with TeamMemberCard components
- Unique selling proposition
- Responsive design
- Accessible (WCAG 2.2 AA)
- SEO metadata

**Out of Scope:**
- Individual team member pages
- Company history timeline

**Rules to Follow:**
- Use packages/ui components
- Semantic HTML structure
- Proper heading hierarchy
- ARIA landmarks
- TeamMemberCard for team members
- SEO metadata

**Advanced Coding Pattern:**
- Component composition
- Page layout patterns

**Anti-Patterns:**
- Do not use div for semantic elements
- Do not skip heading hierarchy
- Do not hardcode team data

**Imports/Exports:**
- Import: @marketing/ui/card, @marketing/ui/business/TeamMemberCard
- Export: Page component

**Depends On:**
- FIRM-002 (Homepage)

**Blocks:**
- FIRM-004 (Services page)

---

#### Subtask FIRM-003-1: Create about page with firm story
- **Assigned:** AGENT
- **Target:** apps/firm/src/app/about/page.tsx
- **Description:** Create about/page.tsx with firm story section, mission and values, and unique selling proposition. Use semantic HTML (main, section, h1, h2). Ensure proper heading hierarchy.
- **Validation:** Run `cd apps/firm && pnpm dev` and verify about page renders correctly

#### Subtask FIRM-003-2: Add team section with TeamMemberCard components
- **Assigned:** AGENT
- **Target:** apps/firm/src/app/about/page.tsx
- **Description:** Add team section using TeamMemberCard components from @marketing/ui. Display team members with photos, names, roles, and bios. Use semantic section element with proper heading.
- **Validation:** Run `cd apps/firm && pnpm dev` and verify team section renders correctly

#### Subtask FIRM-003-3: Add SEO metadata
- **Assigned:** AGENT
- **Target:** apps/firm/src/app/about/page.tsx
- **Description:** Add metadata object with title, description, and Open Graph tags specific to the about page.
- **Validation:** Run `cd apps/firm && pnpm build` and verify metadata in generated HTML

#### Subtask FIRM-003-4: Test about page accessibility
- **Assigned:** HUMAN
- **Target:** apps/firm/src/app/about/page.tsx
- **Description:** Test about page with keyboard navigation and screen reader. Verify heading hierarchy, ARIA landmarks, and team member card accessibility. Report any issues for agent to fix.
- **Validation:** Manual accessibility testing

---

### Task 2.4: Implement Firm Services Page
- [ ] Status: PENDING
- Task ID: FIRM-004

**Related File Paths:**
- apps/firm/src/app/services/page.tsx
- apps/firm/src/lib/services.ts

**Definition of Done:**
- Services page with all services listed
- ServiceCard components for each service
- Detailed service descriptions
- Pricing information
- CTA for each service
- Responsive design
- Accessible (WCAG 2.2 AA)
- SEO metadata

**Out of Scope:**
- Individual service detail pages
- Service comparison table

**Rules to Follow:**
- Use packages/ui components
- Semantic HTML structure
- Proper heading hierarchy
- ServiceCard for services
- Data-driven rendering
- SEO metadata

**Advanced Coding Pattern:**
- Component composition
- Data-driven rendering

**Anti-Patterns:**
- Do not hardcode service data
- Do not skip heading hierarchy
- Do not use inaccessible pricing display

**Imports/Exports:**
- Import: @marketing/ui/business/ServiceCard
- Export: Page component, services data

**Depends On:**
- FIRM-003 (About page)

**Blocks:**
- FIRM-005 (Portfolio page)

---

#### Subtask FIRM-004-1: Create services data structure
- **Assigned:** AGENT
- **Target:** apps/firm/src/lib/services.ts
- **Description:** Create services.ts with array of service objects (id, name, description, price, features, ctaText). This will be used to render services dynamically.
- **Validation:** Run `cd apps/firm && npx tsc --noEmit` to verify TypeScript types

#### Subtask FIRM-004-2: Create services page with ServiceCard components
- **Assigned:** AGENT
- **Target:** apps/firm/src/app/services/page.tsx
- **Description:** Create services/page.tsx that renders ServiceCard components for each service from services data. Use semantic HTML (main, section, h1, h2). Implement grid layout for cards.
- **Validation:** Run `cd apps/firm && pnpm dev` and verify services page renders correctly

#### Subtask FIRM-004-3: Add SEO metadata
- **Assigned:** AGENT
- **Target:** apps/firm/src/app/services/page.tsx
- **Description:** Add metadata object with title, description, and Open Graph tags specific to the services page.
- **Validation:** Run `cd apps/firm && pnpm build` and verify metadata in generated HTML

#### Subtask FIRM-004-4: Test services page accessibility
- **Assigned:** HUMAN
- **Target:** apps/firm/src/app/services/page.tsx
- **Description:** Test services page with keyboard navigation and screen reader. Verify heading hierarchy, service card accessibility, and pricing display. Report any issues.
- **Validation:** Manual accessibility testing

---

### Task 2.5: Implement Firm Portfolio Page
- [ ] Status: PENDING
- Task ID: FIRM-005

**Related File Paths:**
- apps/firm/src/app/portfolio/page.tsx
- apps/firm/src/lib/portfolio.ts

**Definition of Done:**
- Portfolio page with case studies
- Project cards with descriptions
- Client information
- Project images with alt text
- Links to case studies
- Responsive design
- Accessible (WCAG 2.2 AA)
- SEO metadata

**Out of Scope:**
- Individual case study pages
- Project filtering

**Rules to Follow:**
- Use packages/ui components
- Semantic HTML structure
- Proper heading hierarchy
- Card components for projects
- Data-driven rendering
- SEO metadata

**Advanced Coding Pattern:**
- Component composition
- Data-driven rendering

**Anti-Patterns:**
- Do not hardcode portfolio data
- Do not skip alt text for images
- Do not use inaccessible links

**Imports/Exports:**
- Import: @marketing/ui/card
- Export: Page component, portfolio data

**Depends On:**
- FIRM-004 (Services page)

**Blocks:**
- FIRM-006 (Contact page)

---

#### Subtask FIRM-005-1: Create portfolio data structure
- **Assigned:** AGENT
- **Target:** apps/firm/src/lib/portfolio.ts
- **Description:** Create portfolio.ts with array of project objects (id, title, description, client, image, link). This will be used to render projects dynamically.
- **Validation:** Run `cd apps/firm && npx tsc --noEmit` to verify TypeScript types

#### Subtask FIRM-005-2: Create portfolio page with project cards
- **Assigned:** AGENT
- **Target:** apps/firm/src/app/portfolio/page.tsx
- **Description:** Create portfolio/page.tsx that renders Card components for each project from portfolio data. Use semantic HTML (main, section, h1, h2). Implement grid layout for cards. Ensure proper alt text for images.
- **Validation:** Run `cd apps/firm && pnpm dev` and verify portfolio page renders correctly

#### Subtask FIRM-005-3: Add SEO metadata
- **Assigned:** AGENT
- **Target:** apps/firm/src/app/portfolio/page.tsx
- **Description:** Add metadata object with title, description, and Open Graph tags specific to the portfolio page.
- **Validation:** Run `cd apps/firm && pnpm build` and verify metadata in generated HTML

#### Subtask FIRM-005-4: Test portfolio page accessibility
- **Assigned:** HUMAN
- **Target:** apps/firm/src/app/portfolio/page.tsx
- **Description:** Test portfolio page with keyboard navigation and screen reader. Verify heading hierarchy, card accessibility, and image alt text. Report any issues.
- **Validation:** Manual accessibility testing

---

### Task 2.6: Implement Firm Contact Page
- [ ] Status: PENDING
- Task ID: FIRM-006

**Related File Paths:**
- apps/firm/src/app/contact/page.tsx

**Definition of Done:**
- Contact page with ContactForm component
- Contact information (address, phone, email)
- Map integration (optional)
- Social media links
- Responsive design
- Accessible (WCAG 2.2 AA)
- SEO metadata

**Out of Scope:**
- Live chat integration
- CRM integration

**Rules to Follow:**
- Use packages/ui components
- Semantic HTML structure
- Proper heading hierarchy
- ContactForm for form submission
- SEO metadata

**Advanced Coding Pattern:**
- Component composition
- Form integration

**Anti-Patterns:**
- Do not use inaccessible form
- Do not skip contact information
- Do not ignore form validation

**Imports/Exports:**
- Import: @marketing/ui/business/ContactForm
- Export: Page component

**Depends On:**
- FIRM-005 (Portfolio page)

**Blocks:**
- FIRM-007 (FAQ page)

---

#### Subtask FIRM-006-1: Create contact page with ContactForm
- **Assigned:** AGENT
- **Target:** apps/firm/src/app/contact/page.tsx
- **Description:** Create contact/page.tsx with ContactForm component from @marketing/ui. Add contact information section with address, phone, email, and social media links. Use semantic HTML (main, section, h1, h2).
- **Validation:** Run `cd apps/firm && pnpm dev` and verify contact page renders correctly

#### Subtask FIRM-006-2: Add SEO metadata
- **Assigned:** AGENT
- **Target:** apps/firm/src/app/contact/page.tsx
- **Description:** Add metadata object with title, description, and Open Graph tags specific to the contact page.
- **Validation:** Run `cd apps/firm && pnpm build` and verify metadata in generated HTML

#### Subtask FIRM-006-3: Test contact page accessibility
- **Assigned:** HUMAN
- **Target:** apps/firm/src/app/contact/page.tsx
- **Description:** Test contact page with keyboard navigation and screen reader. Verify heading hierarchy, form accessibility, and contact information. Report any issues.
- **Validation:** Manual accessibility testing

---

### Task 2.7: Implement Firm FAQ Page
- [ ] Status: PENDING
- Task ID: FIRM-007

**Related File Paths:**
- apps/firm/src/app/faq/page.tsx
- apps/firm/src/lib/faq.ts

**Definition of Done:**
- FAQ page with Accordion component
- Common questions and answers
- Search functionality (optional)
- Responsive design
- Accessible (WCAG 2.2 AA)
- SEO metadata

**Out of Scope:**
- FAQ categorization
- FAQ submission form

**Rules to Follow:**
- Use packages/ui components
- Semantic HTML structure
- Proper heading hierarchy
- Accordion for FAQ items
- Data-driven rendering
- SEO metadata

**Advanced Coding Pattern:**
- Component composition
- Data-driven rendering

**Anti-Patterns:**
- Do not hardcode FAQ data
- Do not skip keyboard navigation
- Do not use inaccessible accordion

**Imports/Exports:**
- Import: @marketing/ui/feedback/Accordion
- Export: Page component, FAQ data

**Depends On:**
- FIRM-006 (Contact page)

**Blocks:**
- FIRM-008 (Legal pages)

---

#### Subtask FIRM-007-1: Create FAQ data structure
- **Assigned:** AGENT
- **Target:** apps/firm/src/lib/faq.ts
- **Description:** Create faq.ts with array of FAQ objects (id, question, answer). This will be used to render FAQ items dynamically.
- **Validation:** Run `cd apps/firm && npx tsc --noEmit` to verify TypeScript types

#### Subtask FIRM-007-2: Create FAQ page with Accordion component
- **Assigned:** AGENT
- **Target:** apps/firm/src/app/faq/page.tsx
- **Description:** Create faq/page.tsx that renders Accordion component with FAQ items from FAQ data. Use semantic HTML (main, section, h1, h2).
- **Validation:** Run `cd apps/firm && pnpm dev` and verify FAQ page renders correctly

#### Subtask FIRM-007-3: Add SEO metadata
- **Assigned:** AGENT
- **Target:** apps/firm/src/app/faq/page.tsx
- **Description:** Add metadata object with title, description, and Open Graph tags specific to the FAQ page.
- **Validation:** Run `cd apps/firm && pnpm build` and verify metadata in generated HTML

#### Subtask FIRM-007-4: Test FAQ page accessibility
- **Assigned:** HUMAN
- **Target:** apps/firm/src/app/faq/page.tsx
- **Description:** Test FAQ page with keyboard navigation and screen reader. Verify heading hierarchy, accordion accessibility, and keyboard navigation. Report any issues.
- **Validation:** Manual accessibility testing

---

### Task 2.8: Implement Firm Legal Pages
- [ ] Status: PENDING
- Task ID: FIRM-008

**Related File Paths:**
- apps/firm/src/app/legal/privacy/page.tsx
- apps/firm/src/app/legal/terms/page.tsx

**Definition of Done:**
- Privacy Policy page
- Terms of Service page
- Clear legal language
- Proper heading hierarchy
- Responsive design
- Accessible (WCAG 2.2 AA)
- SEO metadata

**Out of Scope:**
- Cookie policy
- GDPR compliance forms

**Rules to Follow:**
- Semantic HTML structure
- Proper heading hierarchy
- Clear legal language
- SEO metadata

**Advanced Coding Pattern:**
- Page layout patterns
- Legal content structure

**Anti-Patterns:**
- Do not use unclear legal language
- Do not skip heading hierarchy
- Do not ignore accessibility

**Imports/Exports:**
- Import: None
- Export: Page components

**Depends On:**
- FIRM-007 (FAQ page)

**Blocks:**
- Phase 2 completion

---

#### Subtask FIRM-008-1: Create Privacy Policy page
- **Assigned:** AGENT
- **Target:** apps/firm/src/app/legal/privacy/page.tsx
- **Description:** Create legal/privacy/page.tsx with privacy policy content. Use semantic HTML (main, section, h1, h2, h3). Ensure clear legal language and proper heading hierarchy.
- **Validation:** Run `cd apps/firm && pnpm dev` and verify privacy policy page renders correctly

#### Subtask FIRM-008-2: Create Terms of Service page
- **Assigned:** AGENT
- **Target:** apps/firm/src/app/legal/terms/page.tsx
- **Description:** Create legal/terms/page.tsx with terms of service content. Use semantic HTML (main, section, h1, h2, h3). Ensure clear legal language and proper heading hierarchy.
- **Validation:** Run `cd apps/firm && pnpm dev` and verify terms of service page renders correctly

#### Subtask FIRM-008-3: Add SEO metadata to legal pages
- **Assigned:** AGENT
- **Target:** apps/firm/src/app/legal/privacy/page.tsx, apps/firm/src/app/legal/terms/page.tsx
- **Description:** Add metadata object with title, description, and Open Graph tags to both legal pages.
- **Validation:** Run `cd apps/firm && pnpm build` and verify metadata in generated HTML

#### Subtask FIRM-008-4: Test legal pages accessibility
- **Assigned:** HUMAN
- **Target:** apps/firm/src/app/legal/privacy/page.tsx, apps/firm/src/app/legal/terms/page.tsx
- **Description:** Test legal pages with keyboard navigation and screen reader. Verify heading hierarchy and content accessibility. Report any issues.
- **Validation:** Manual accessibility testing

---

## Phase 2 Completion Criteria

Phase 2 is complete when:
- All 8 tasks (FIRM-001 through FIRM-008) are marked as complete
- Firm website has all essential pages (Homepage, About, Services, Portfolio, Contact, FAQ, Privacy, Terms)
- All pages use packages/ui components
- All pages are responsive
- All pages are WCAG 2.2 AA compliant
- All pages have proper SEO metadata
- Firm website builds successfully
- Firm website runs in development mode
