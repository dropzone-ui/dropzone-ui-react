# Contributing to Dropzone-ui

If you're reading this, you're awesome! Thank you for helping us make this project great and being a part of the dropzone-ui community. Here are a few guidelines that will help you along the way.

## Code of Conduct

Dropzone-ui has adopted the [Contributor Covenant](https://www.contributor-covenant.org/) as its Code of Conduct, and we expect project participants to adhere to it.
Please read [the full text](/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## Your first Pull Request

Working on your first Pull Request? You can learn how from this free video series:

[How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you have started to work on it so other people don't accidentally duplicate your effort.

If somebody claims an issue but doesn't follow up for more than a week, it's fine to take it over but you should still leave a comment.
If there has been no activity on the issue for 7 to 14 days, it is safe to assume that nobody is working on it.

## Sending a Pull Request

Dropzone UI is a community project, so Pull Requests are always welcome, but, before working on a large change, it is best to open an issue first to discuss it with the maintainers.

However, as it happen in the past, there could be small fixes than can be directly posted on a pull request.

When in doubt, keep your Pull Requests small. To give a Pull Request the best chance of getting accepted, don't bundle more than one feature or bug fix per Pull Request. It's often best to create two smaller Pull Requests than one big one.

1. Fork the repository.

2. Clone the fork to your local machine and add upstream remote:

```sh
git clone https://github.com/<your username>/react.git
cd react
git remote add upstream https://github.com/dropzone-ui/react.git
```

<!-- #default-branch-switch -->

3. Synchronize your local `master` branch with the upstream one:

```sh
git checkout master
git pull upstream master
```

4. Install the dependencies with npm:

```sh
npm install
```

5. Create a new topic branch:

```sh
git checkout -b my-topic-branch
```

6. Make changes, commit and push to your fork:

```sh
git push -u origin HEAD
```

7. Go to [the repository](https://github.com/dropzone-ui/react) and make a Pull Request.

The core team is monitoring for Pull Requests. We will review your Pull Request and either merge it, request changes to it, or close it with an explanation.

## Commit Convention

In order to make it easy to review the previous commits and understand the "what"s and "why"s behind each change, the following commit pattern is used:

- To make descriptive commits the command `git commit -v` is used.
- Otherwhise, `git commit -m "[<type>]: <message>"` command can be used when the commit message is not long enought to give it a body.

```
[<type>]: <subject>
<BLANK_LINE>
<body> (optional)
```

The definition for each commit section is as follows:

`<type>`: A short label of the type of change.

- It can be any of the following:
  - FEAT: A new feature
  - FIX: Bug fix
  - DOCS: Documentation changes
  - STYLE: Formatting, missing spaces, etc
  - REFACTOR: Code that it's neither a feat nor a fix

`<subject>`: It is a short description of the commit

- In general, no more than 80 characters
- Written in present tense
- Starts with capital letter

`<body>`: The long description of the commit

- Explains why the commit is needed
- Briefly explains what the commit does
- Talks about the related test cases and docs
- In general, no more than 80 characters per line

## Coding style

Please follow the coding style of the project. Dropzone ui uses prettier and eslint, so if possible, enable linting in your editor to get real-time feedback.

Finally, when you submit a Pull Request, they are run again by our continuous integration tools, but hopefully, your code is already clean!

## License

By contributing your code to the [dropzone-ui/react](https://github.com/dropzone-ui/react) GitHub repository, you agree to license your contribution under the [MIT license](/LICENSE).
