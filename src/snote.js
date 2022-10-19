import { basicSetup, EditorView } from 'codemirror';
import { keymap } from "@codemirror/view"
import { indentWithTab } from "@codemirror/commands"
import { markdown } from "@codemirror/lang-markdown"
import { languages } from "@codemirror/language-data"
import {
    javascript,
    javascriptLanguage,
    scopeCompletionSource,
} from '@codemirror/lang-javascript';


function main() {
    let editor = createMDEditor(document.querySelector("#editor"))
    window.editorState = editor.state;

    editor.dispatch({
        changes: { apply: "#!/usr/bin/env node\n" }
    })
}

function createJSEditor(element) {
    let editor = new EditorView({
        doc: "console.log('hello')\n",
        extensions: [
            basicSetup,
            keymap.of([indentWithTab]),
            javascript(),
            javascriptLanguage.data.of({
                autocomplete: scopeCompletionSource(globalThis),
            }),
        ],
        parent: element,
    });

    return editor;
}

function createMDEditor(element) {

    // The Markdown parser will dynamically load parsers
    // for code blocks, using @codemirror/language-data to
    // look up the appropriate dynamic import.
    let editor = new EditorView({
        doc: "Hello suisuy\n\n```javascript\nlet x = 'y'\n```",
        extensions: [
            basicSetup,
            markdown({ codeLanguages: languages }),
            javascriptLanguage.data.of({
                autocomplete: scopeCompletionSource(globalThis),
            }),
        ],
        parent: element
    })
    return editor;
}



export default {
    main,
    createJSEditor,
    createMDEditor,

}
