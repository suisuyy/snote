import { Octokit } from '@octokit/core/';
// import { Octokit } from "/public/lib/@octokit/core/dist-web";

import { ENV, B64STR } from "./constant.js"



async function main(t) {
    console.log('start simplefs.main()');
    window.Octokit = Octokit

    let repopath = '/repos/suisuyy/Github-API-Testing/contents'
    let newfilepath = '/atest4'

    // update(ENV.github_app.test_token, repopath + newfilepath, B64STR.aaaa);
    // ls(ENV.github_app.test_token, `${repopath}/dir`)
}


async function ls(token, repopath) {
    console.log(`ls('${token}', '${repopath}')`)

    const octokit = new Octokit({
        auth: token,
    })

    let res = await octokit.request(`GET ${repopath}`)
    console.log(res)
    return res;
}

/*
@token
@fileurl:'/repos/suisuyy/Github-API-Testing/contents/onewfile'
@b64file base64code 
*/
function touch(token, filepath, b64file) {
    console.log(`touch('${token}', '${filepath}','${b64file}')`)
    const octokit = new Octokit({
        auth: token,
    });

    octokit.request('PUT ' + filepath, {
        owner: 'suisuy',
        repo: 'Github-API-Testing',
        path: filepath,
        message: 'from snote ' + filepath,
        committer: {
            name: 'snote',
            email: 'snote@gmail.com',
        },
        content: b64file,

    });

}

function mkdir(token, dirurl) {
    touch(token, dirurl + "/.tmp")
}


async function update(token, fileurl, b64file) {
    console.log(`update('${token}', '${fileurl}','${b64file}')`)

    let sha = await getSha(ENV.github_app.test_token, fileurl)
    const octokit = new Octokit({
        auth: token,
    });

    octokit.request('PUT ' + fileurl, {

        message: 'from snote ' + fileurl,
        sha: sha,
        committer: {
            name: 'snote',
            email: 'snote@gmail.com',
        },
        content: b64file,

    });
}

function remove(token, filepath) {

}

export default {
    main, touch, mkdir, update, remove
}

async function getSha(token, fileurl) {
    console.log(`getSha('${token}', '${fileurl}')`)

    const octokit = new Octokit({
        auth: token,
    });
    let res = await octokit.request(`GET ${fileurl}`)
    // .then(res => {
    //     console.log(res)
    // })
    console.log('got sha:' + res.data.sha)
    return res?.data?.sha;

}


