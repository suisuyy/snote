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


import simplefs from "./simplefs.js";
import editor from "./editor.js";
import CONSTANT from './constant.js'
import sfm from './sfm'
import utils from "./utils.js"

console.log(CONSTANT.ENV.github_app)

let model = {
    github: {
        user: { name: 'test' },
        token: '',
        allRepoList: [],
        currentRepoPath: CONSTANT.ENV.github_app.repo_path,
        client_id: CONSTANT.ENV.github_app.client_id,
        client_secret: CONSTANT.ENV.github_app.client_secret,
    },
    editor: {
        value: '',
        changed: false,
        currentFile: '',
        currentLine: {
            from: 0,
            to: 0,
            number: 0,
            text: '',
            length: 0
        },
        selection: {
            start: 0,
            end: 0,
            doc: ''
        },
    },
    fm: {
        filedirDataList: {

        }
    }
}



let editorView = {
    init() {
        this.editorContainer = document.querySelector("#editor");
        this.render(this.editorContainer);

        let touchtime = 0;
        this.editorContainer.addEventListener('click', (e) => {
            console.log('test');
            if (((new Date().getTime()) - touchtime) < 500) {
                console.log(control.getCurrentLine());
                let currentLine = control.getCurrentLine();
                let res = control.runcodestr(currentLine.text);
                alert(res)
            }
            touchtime = new Date().getTime();
        });
    },
    render(container, doc) {
        this.editor?.destroy();
        this.editor = editor.createMDEditor(container, doc, control.editorListenerFunctions);
        return this.editor;
    }
}

let fmView = {
    init() {
        this.fmContainer = document.querySelector("#fm");
        this.render(this.fmContainer, {
            clickListener: control.openDoc
        });
    },
    async render(container, listenerFunctions, fList) {
        this.fmContainer.innerHTML = '';
        sfm.createDirFileList(fList || await control.ls(), container, listenerFunctions);
    }
}

let MenuView = {
    loginBar: document.querySelector('#loginBar'),
    fileOpenButton: document.querySelector('#fileOpenButton'),
    fileSaveButton: document.querySelector('#fileSaveButton'),
    loginBar: document.querySelector('#loginBar'),
    debugToggler: document.querySelector("#debugToggler"),
    init() {
        this.debugToggler.addEventListener('click', evt => {
            // console.log('toogle debuger');
            document.querySelector('#debug').classList.toggle('hidden');
        });
        this.fileOpenButton.addEventListener('click', evt => {
            document.querySelector('#fm').classList.toggle('hidden');

        });

        this.fileSaveButton.addEventListener('click', evt => {

            control.saveDoc(model.editor.currentFile, model.editor.value);
        });
        this.fileSaveButton.addEventListener('click', evt => {

        });
    },

    render() { }
}

let control = {
    async init() {
        this.debug();

        await this.initModel();

        editorView.init();
        fmView.init();
        MenuView.init();


        this.intervalRunner(30000)
    },
    async initModel() {
        if (new URL(location.href).searchParams.get("code")) {
            console.log('try to get token');
            await this.getTokenByCode(new URL(location.href).searchParams.get("code"));

        }
        await control.updateGithubInfo();
    },
    editorListenerFunctions: {
        changeListener(newDocstr) {
            // console.log(newDocstr);
            model.editor.value = newDocstr;
            model.editor.changed = true;
        },

        cursorListener() {
            console.log("cursor changed");
            model.editor.currentLine = editorView.editor.state.doc.lineAt(editorView.editor.state.selection.main.head)
        }
    },
    getFiledirDataList() {
        return model.fm.filedirDataList;
    },
    getCurrentLine() {
        return model.editor.currentLine;
    }
    ,
    checkLogin() {
        return Boolean(model.github.token);
    },
    async getTokenByCode(code) {
        let res = (await fetch(CONSTANT.ENV.corsproxy + '/https://github.com/login/oauth/access_token?client_id=62bae466424e9145c0a5&client_secret=d373d9ebf716e36988e31f6687920706af76fbdd&state=snote&code=' + code, {
            method: "POST",
            headers: {
                Accept: 'application/vnd.github+json',
            }
        }))
        let resObj = await res.json();
        if (resObj?.access_token) {
            console.log('gotTokenBycode: ' + resObj?.access_token)

            utils.updateObjInStroge('setting', { github_token: resObj.access_token })
        }
        else {
            console.log('faild to get token');
        }
        return resObj?.access_token;
    },
    async ls(path) {
        console.log(`ls(${path})`);
        let res;
        if (path === '/' || path === undefined) {
            res = await simplefs.getRepos(model.github.token, model.github.user.login);
        }
        else if (path.split('/').length < 3) {
            let urlpath = `/repos/${model.github.user.login
                }${path}/contents`
            res = await simplefs.ls(model.github.token, urlpath);

        }
        else {
            let [blandtmp, repo, ...p] = path.split('/');

            let urlpath = `/repos/${model.github.user.login
                }/${repo}/contents/${p.join('/')}`
            res = await simplefs.ls(model.github.token, urlpath);

        }

        return res;

    },

    openDocstr(str) {
        model.editor.value = str;
        editorView.editor = editorView.render(editorView.editorContainer, str)
    },
    async openDoc(file) {
        if (file.type === 'file') {
            let fileContent = await simplefs.cat(file);
            console.log(fileContent);
            control.openDocstr(fileContent)
            model.editor.currentFile = file;

        }
        else if (file.type === 'dir') {
            console.log(`open dir ${file.name}`);
            model.fm.wd += `/${file.name}`;
            model.fm.filedirDataList = await control.ls(model.fm.wd);
            fmView.render(fmView.fmContainer, {
                clickListener: control.openDoc
            }, model.fm.filedirDataList);
        }
        else if (file.type === 'repo') {
            console.log(`open repo ${file.name}`);
            model.fm.filedirDataList = await control.ls('/' + file.name);
            model.fm.wd = '/' + file.name;
            fmView.render(fmView.fmContainer, {
                clickListener: control.openDoc
            }, model.fm.filedirDataList);

        }

    },

    async saveDoc(file, newContent) {
        if (model.editor.changed === false) {
            console.log('doc not changed, return')
            return;
        }
        console.log(`saveDoc(${file}),${newContent}`);
        let encodedDoc = btoa(newContent);
        console.log(`encodedDoc: ${encodedDoc}`);
        let updatedFile = await simplefs.update(model.github.token, file.url, btoa(newContent));
        model.editor.changed = false;
        file.git_url = updatedFile.git_url;

    },
    async updateGithubInfo() {
        model.github.token = utils.getObjFromStorage('setting')['github_token'] || '';
        if (!model.github.token) {
            console.log('updateGithubInfo: no github token return');
            return;
        }
        let user = await simplefs.getUser(model.github.token);
        if (!user) {
            console.log('updateGithubInfo: seems bad github token try relogin return');
            return;
        }
        model.github = { ...model.github, ...{ user: user } };
        model.fm.filedirDataList = await simplefs.ls(model.github.token, model.github.currentRepoPath);
        model.fm.fs = {
            '/': await control.ls('/')
        }
        MenuView.loginBar.innerHTML = model.github.user.login;
    },

    intervalRunner(interval) {

        setInterval(() => {
            console.log('inervalRunner:');
            this.saveDoc(model.editor.currentFile, model.editor.value);
        }, interval);
    }
    ,

    runcodestr(str) {
        let res = new Function('return ' + str)();
        return res;
    },

    debug() {
        window.model = model
        window.control = control;
        window.editorView = editorView;
        window.simplefs = simplefs;

        let debugDiv = document.getElementById('debug');
        window.debugButton = document.getElementById('debugButton');
        let objDisplayer = document.getElementById('objDisplayer');

        // debugDiv.style.display = 'inherit';
        setInterval(() => {
            objDisplayer.innerHTML = JSON.stringify(model, null, 4);

        }, 4000);

        debugButton.addEventListener('click', evt => {
            console.log("debugbutton click");
            // control.saveDoc(model.editor.currentFile, model.editor.value)
            simplefs.ls(model.github.token, 'https://api.github.com/users/suisuyy/repos');
        });

        setTimeout(() => {
            control.ls('/');
            control.ls('/Github-API-Testing');
        }, 5000);
    }
}


control.init();

//test
// simplefs.main();
// editor.main();
// sfm.main();



