## Storybook integration

#### 1. General integration

All storybook related config lives in the `.storybook` folder in the root. Stories however are recommended to be kept in the vicinity of the elements they represent. Stories are unit tests in our case, so having the following convention can simplify things:

```
src/components/Button/Button.jss
src/components/Button/Button.stories.js
...
```

#### 2. New NPM scripts

New NPM scripts added to run storybook supporting tests. For development time, `npm run storybook:start` should be used. Ideal case storybook reflects strictly UI components, therefore it is not needed to run the app itself, nor the backend.

#### 3. How to write a story

Storybook recommends using the new CSF format over the `storiesOf` API. The body of the story remains the same, only the export changes. The title of the default export will become as the wrapper around the given stories, and every named export will behave like a single story, under the wrapper. Stories can be further customized like getting unique parameters and decorators.
We identify two different type of story. One would be equivalent of a unit test, another would be of an integration test.

**Unit test, Single component, #snap**

Single, reusable, strict UI elements. Buttons, texts, boxes, simple inputs, divs, icons ...etc.

```

export const success = () => <Button variant="success" label={text("label", "Congratulation")} />;
export const info = () => <Button variant="info" label={text("label", "Upload Video")} />;
export const danger = () => <Button variant="danger" label={text("label", "Delete Account")} />;

const TYPE = '(snapshot)'
export default {
  title: `Components/Button ${TYPE}`,
  component: Button,
  decorators: [],
};

```

**Integration test, Composite pages, #visual**

Composite pages, made out of UI elements. Pages, grids, layouts, forms, headers, navbars ...etc

Login.js:

```
    <main>
        <div>
            <Title variant="sub" title="Log in here"/>
            <Button variant="info" label="Log in" />
        </div>
    </main>
```

```
import Login from "./Login"

export const loginScreen = () => <Login/>
```

#### 4. Addons

**Knobs:**

Automatically available for every story.

https://www.npmjs.com/package/@storybook/addon-knobs
https://www.learnstorybook.com/intro-to-storybook/react/en/using-addons/

**Docs:**

Automatically available for every story. Document resources are computed from many different soruces automatically,
most importantly from propTypes. For using .MDX syntax, further configuration with jest is required.

https://www.npmjs.com/package/@storybook/addon-docs
https://medium.com/storybookjs/storybook-docspage-e185bc3622bf

**Viewport:**

Automatically available for every story. The list of default used viewport devices can be extended in the storybook
configuration files.

https://www.npmjs.com/package/@storybook/addon-viewport

**A11y:**

Automatically available for every story.

https://www.npmjs.com/package/@storybook/addon-a11y

**Storyshots (for snapshot testing):**

Automatically running for every story which is tagged with `#snap`. Uses Jest for snapshot testing.

https://github.com/storybookjs/storybook/tree/master/addons/storyshots/storyshots-core

**Storyshots - pptr (for visual testing):**

Automatically running for every story which is tagged with `#visual`. Uses Puppeteer for visual testing.

https://github.com/storybookjs/storybook/tree/master/addons/storyshots/storyshots-puppeteer

#### 5. Snapshot testing

Snapshot tests run on all the `#snap` tagged stories automatically on a pre-commit hook. Snapshots are saved in the `<rootdir>/__tests__/snapshots` folder, where other settings can be found as well. If a certain snapshot is not present, jest would automatically generate it. If they are present they are being compared with the latest stage of the components. Because of this, it is important to keep commiting snapshots as well.
If change in the code is intentional and verified, use the CLI to update the snapshots and commit those together with the changes in the code!

NPM command: `npm run storybook:snapshot:test`

#### 6. Visual testing

Visual tests run on all the `#visual` tagged stories automatically on a pre-push hook. Screenshots are saved in the `<rootdir>/__tests__/automated-visual` folder, where other settings can be found as well. Has similar logic as the snapshot testing, however here pixels are being compared, and flagged in case of a mismatch. Uses puppeteer for rendering stories during the test.

NPM command: `npm run storybook:visual:test`
