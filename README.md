# LeetCode Solutions in TypeScript

## Setup

```bash
npm install
```

## Running Tests

### All tests
```bash
npm test
```

### Watch mode (re-runs on file save)
```bash
npm run test:watch
```

### Single solution file
```bash
npx vitest run solutions/typescript/test_cases/duplicate_number.test.ts
```

### Single test case by name
```bash
npx vitest run solutions/typescript/test_cases/duplicate_number.test.ts -t "returns true when a duplicate exists"
```

## Solutions

| # | Problem | Solution | Test | Difficulty |
|---|---------|----------|------|------------|
| 1 | [Contains Duplicate](https://neetcode.io/problems/duplicate-integer/question) | [duplicate_number.ts](solutions/typescript/duplicate_number.ts) | [duplicate_number.test.ts](solutions/typescript/test_cases/duplicate_number.test.tsduplicate_number.test.ts) | Easy |
| 2 | [Target Sum values](https://neetcode.io/problems/two-integer-sum/question) | [two_integer_sum.ts](solutions/typescript/two_integer_sum.ts) | [two_integer_sum.test.ts](solutions/typescript/test_cases/two_number_sum.test.ts) | Easy |
