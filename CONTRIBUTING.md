# Contributing to Spawntech

We would love for you to contribute to this project! Read on for guidelines on how you can help ❤️.

## Got a Question?

We are trying to keep GitHub issues for bug reports and feature requests. Please use our [Github Discussions](https://github.com/spwntch/workspace-boilerplate/discussions) to ask general questions about how to use the **Spawntech Monorepo Boilerplate**.

## Found an Issue?

If you find a bug in the source code or a mistake in the documentation, you can help us
by [submitting an issue](https://github.com/nrwl/nx/blob/master/CONTRIBUTING.md#submit-issue)
to [our GitHub Repository](https://github.com/spwntch/workspace-boilerplate).
<!-- Even better, you
can [submit a Pull Request](https://github.com/nrwl/nx/blob/master/CONTRIBUTING.md#submit-pr) with a fix. -->

## Documentation Contributions

We would love for you to contribute to our documentation as well! Please feel welcome to submit fixes or enhancements to our existing documentation pages in this repo, all of which can be found in the `/docs` folder at the root of this repo.

## Submission Guidelines

### <a name="submit-issue"></a> Submitting an Issue

Before you submit an issue, please search the issue tracker. An issue for your problem may already exist and has been
resolved, or the discussion might inform you of workarounds readily available.

We want to fix all the issues as soon as possible, but before fixing a bug we need to reproduce and confirm it. Having a
reproducible scenario gives us wealth of important information without going back and forth with you requiring
additional information, such as:

- the output of `nx report`
- `yarn.lock` or `package-lock.json` or `pnpm-lock.yaml`
- and most importantly - a use-case that fails

A minimal reproduction allows us to quickly confirm a bug (or point out a coding problem) as well as confirm that we are
fixing the right problem.

We will be insisting on a minimal reproduction in order to save maintainers' time and ultimately be able to fix more
bugs. Interestingly, from our experience, users often find coding problems themselves while preparing a minimal
reproduction repository. We understand that sometimes it might be hard to extract essentials bits of code from a larger
codebase, but we really need to isolate the problem before we can fix it.

<!-- You can file new issues by filling out our [issue form](https://github.com/spwntch/workspace-boilerplate/issues/new/choose). -->

<!-- ### <a name="submit-pr"></a> Submitting a PR

Please follow the following guidelines:

- Make sure unit tests pass (`nx affected --target=test`)
  - Target a specific project with: `nx run proj:test` (i.e. `nx run angular:test` to target `packages/angular`)
  - Target a specific unit test file (i.e. `packages/angular/src/utils/ast-command-line-utils.spec.ts`)
    with `npx jest angular/src/utils/ast-utils` or `npx jest packages/angular/src/utils/ast-utils`
  - For more options on running tests - check `npx jest --help` or visit [jestjs.io](https://jestjs.io/)
  - Debug with `node --inspect-brk ./node_modules/jest/bin/jest.js build/packages/angular/src/utils/ast-utils.spec.js`
- Make sure e2e tests pass (this can take a while, so you can always let CI check those) (`nx affected --target=e2e`)
  - Target a specific e2e test with `nx e2e e2e-cypress`
- Make sure you run `nx format`
- Update documentation with `pnpm documentation`. For documentation, check for spelling and grammatical errors.
- Update your commit message to follow the guidelines below (use `pnpm commit` to automate compliance)
  - `pnpm check-commit` will check to make sure your commit messages are formatted correctly

#### Commit Message Guidelines

The commit message should follow the following format:

```plain
type(scope): subject
BLANK LINE
body
```

##### Type

The type must be one of the following:

- feat - New or improved behavior being introduced (e.g. Updating to new versions of React or Jest which bring in new
  features)
- fix - Fixes the current unexpected behavior to match expected behavior (e.g. Fixing the library generator to create
  the proper named project)
- cleanup - Code Style changes that have little to no effect on the user (e.g. Refactoring some functions into a
  different file)
- docs - Changes to the documentation (e.g. Adding more details into the getting started guide)
- chore - Changes that have absolutely no effect on users (e.g. Updating the version of Nx used to build the repo)

##### Scope

The scope must be one of the following:

- angular - anything Angular specific
- bundling - anything bundling specific (e.g. rollup, webpack, etc.)
- core - anything Nx core specific
- detox - anything Detox specific
- devkit - devkit-related changes
- graph - anything graph app specific
- expo - anything Expo specific
- express - anything Express specific
- js - anything related to @nx/js package or general js/ts support
- linter - anything Linter specific
- nest - anything Nest specific
- nextjs - anything Next specific
- node - anything Node specific
- nx-cloud - anything Nx Cloud specific
- nx-plugin - anything Nx Plugin specific
- nx-dev - anything related to docs infrastructure
- react - anything React specific
- react-native - anything React Native specific
- release - anything related to nx release
- repo - anything related to managing the Nx repo itself
- storybook - anything Storybook specific
- testing - anything testing specific (e.g., Jest or Cypress)
- vite - anything Vite specific
- vue - anything Vue specific
- web - anything Web specific
- webpack - anything Webpack specific
- misc - misc stuff

##### Subject and Body

The subject must contain a description of the change, and the body of the message contains any additional details to
provide more context about the change.

Including the issue number that the PR relates to also helps with tracking.

#### Example

```plain
feat(angular): add an option to generate lazy-loadable modules

`nx generate lib mylib --lazy` provisions the mylib project in .eslintrc.json

Closes #157
```

#### Commitizen

To simplify and automate the process of committing with this format,
**Nx is a [Commitizen](https://github.com/commitizen/cz-cli) friendly repository**, just do `git add` and
execute `pnpm commit`. -->
