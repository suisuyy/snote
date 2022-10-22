const ENV = {
    'github_app': {
        client_id: '62bae466424e9145c0a5',
        client_secret: 'd373d9ebf716e36988e31f6687920706af76fbdd',
        test_token: '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',
        repo_path: '/repos/suisuyy/Github-API-Testing/contents'
    },
    // corsproxy: 'https://thingproxy.freeboard.io/fetch',
    corsproxy: 'https://corsp.suisuytest.workers.dev/?',

};


const B64STR = {
    test: "dGVzdA==",
    aaaa: "YWFhYQ==",
}

const TESTDATA = {
    fiterms: [
        {
            "name": "dir",
            "path": "dir",
            "sha": "fa5822727995623554527c999dc4644ff2a5c629",
            "size": 0,
            "url": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/dir?ref=main",
            "html_url": "https://github.com/suisuyy/Github-API-Testing/tree/main/dir",
            "git_url": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/trees/fa5822727995623554527c999dc4644ff2a5c629",
            "download_url": null,
            "type": "dir",
            "_links": {
                "self": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/dir?ref=main",
                "git": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/trees/fa5822727995623554527c999dc4644ff2a5c629",
                "html": "https://github.com/suisuyy/Github-API-Testing/tree/main/dir"
            }
        },
        {
            "name": "dir1",
            "path": "dir1",
            "sha": "9cab47b95085db2e9a6e42356162eb71bd0da472",
            "size": 0,
            "url": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/dir1?ref=main",
            "html_url": "https://github.com/suisuyy/Github-API-Testing/tree/main/dir1",
            "git_url": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/trees/9cab47b95085db2e9a6e42356162eb71bd0da472",
            "download_url": null,
            "type": "dir",
            "_links": {
                "self": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/dir1?ref=main",
                "git": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/trees/9cab47b95085db2e9a6e42356162eb71bd0da472",
                "html": "https://github.com/suisuyy/Github-API-Testing/tree/main/dir1"
            }
        },
        {
            "name": "repos",
            "path": "repos",
            "sha": "ef33568ab286df11142e1b7b669ad56f931bb489",
            "size": 0,
            "url": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/repos?ref=main",
            "html_url": "https://github.com/suisuyy/Github-API-Testing/tree/main/repos",
            "git_url": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/trees/ef33568ab286df11142e1b7b669ad56f931bb489",
            "download_url": null,
            "type": "dir",
            "_links": {
                "self": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/repos?ref=main",
                "git": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/trees/ef33568ab286df11142e1b7b669ad56f931bb489",
                "html": "https://github.com/suisuyy/Github-API-Testing/tree/main/repos"
            }
        },
        {
            "name": "anewfile",
            "path": "anewfile",
            "sha": "5ddc2beda58b9ace39bc3525fe6e1e1585312d03",
            "size": 26,
            "url": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/anewfile?ref=main",
            "html_url": "https://github.com/suisuyy/Github-API-Testing/blob/main/anewfile",
            "git_url": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/5ddc2beda58b9ace39bc3525fe6e1e1585312d03",
            "download_url": "https://raw.githubusercontent.com/suisuyy/Github-API-Testing/main/anewfile",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/anewfile?ref=main",
                "git": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/5ddc2beda58b9ace39bc3525fe6e1e1585312d03",
                "html": "https://github.com/suisuyy/Github-API-Testing/blob/main/anewfile"
            }
        },
        {
            "name": "atest4",
            "path": "atest4",
            "sha": "7284ab4d2836271d66b988ae7d037bd6ef0d5d15",
            "size": 4,
            "url": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/atest4?ref=main",
            "html_url": "https://github.com/suisuyy/Github-API-Testing/blob/main/atest4",
            "git_url": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/7284ab4d2836271d66b988ae7d037bd6ef0d5d15",
            "download_url": "https://raw.githubusercontent.com/suisuyy/Github-API-Testing/main/atest4",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/atest4?ref=main",
                "git": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/7284ab4d2836271d66b988ae7d037bd6ef0d5d15",
                "html": "https://github.com/suisuyy/Github-API-Testing/blob/main/atest4"
            }
        },
        {
            "name": "bnewfile",
            "path": "bnewfile",
            "sha": "3170e4387a5e4451c177c1fd96ae6e59737c6d43",
            "size": 10,
            "url": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/bnewfile?ref=main",
            "html_url": "https://github.com/suisuyy/Github-API-Testing/blob/main/bnewfile",
            "git_url": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/3170e4387a5e4451c177c1fd96ae6e59737c6d43",
            "download_url": "https://raw.githubusercontent.com/suisuyy/Github-API-Testing/main/bnewfile",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/bnewfile?ref=main",
                "git": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/3170e4387a5e4451c177c1fd96ae6e59737c6d43",
                "html": "https://github.com/suisuyy/Github-API-Testing/blob/main/bnewfile"
            }
        },
        {
            "name": "dnewfile",
            "path": "dnewfile",
            "sha": "0d5a690c8fad5e605a6e8766295d9d459d65de42",
            "size": 20,
            "url": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/dnewfile?ref=main",
            "html_url": "https://github.com/suisuyy/Github-API-Testing/blob/main/dnewfile",
            "git_url": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/0d5a690c8fad5e605a6e8766295d9d459d65de42",
            "download_url": "https://raw.githubusercontent.com/suisuyy/Github-API-Testing/main/dnewfile",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/dnewfile?ref=main",
                "git": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/0d5a690c8fad5e605a6e8766295d9d459d65de42",
                "html": "https://github.com/suisuyy/Github-API-Testing/blob/main/dnewfile"
            }
        },
        {
            "name": "enewfile",
            "path": "enewfile",
            "sha": "0d5a690c8fad5e605a6e8766295d9d459d65de42",
            "size": 20,
            "url": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/enewfile?ref=main",
            "html_url": "https://github.com/suisuyy/Github-API-Testing/blob/main/enewfile",
            "git_url": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/0d5a690c8fad5e605a6e8766295d9d459d65de42",
            "download_url": "https://raw.githubusercontent.com/suisuyy/Github-API-Testing/main/enewfile",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/enewfile?ref=main",
                "git": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/0d5a690c8fad5e605a6e8766295d9d459d65de42",
                "html": "https://github.com/suisuyy/Github-API-Testing/blob/main/enewfile"
            }
        },
        {
            "name": "fnewfile",
            "path": "fnewfile",
            "sha": "0d5a690c8fad5e605a6e8766295d9d459d65de42",
            "size": 20,
            "url": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/fnewfile?ref=main",
            "html_url": "https://github.com/suisuyy/Github-API-Testing/blob/main/fnewfile",
            "git_url": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/0d5a690c8fad5e605a6e8766295d9d459d65de42",
            "download_url": "https://raw.githubusercontent.com/suisuyy/Github-API-Testing/main/fnewfile",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/fnewfile?ref=main",
                "git": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/0d5a690c8fad5e605a6e8766295d9d459d65de42",
                "html": "https://github.com/suisuyy/Github-API-Testing/blob/main/fnewfile"
            }
        },
        {
            "name": "gnewfile",
            "path": "gnewfile",
            "sha": "0d5a690c8fad5e605a6e8766295d9d459d65de42",
            "size": 20,
            "url": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/gnewfile?ref=main",
            "html_url": "https://github.com/suisuyy/Github-API-Testing/blob/main/gnewfile",
            "git_url": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/0d5a690c8fad5e605a6e8766295d9d459d65de42",
            "download_url": "https://raw.githubusercontent.com/suisuyy/Github-API-Testing/main/gnewfile",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/gnewfile?ref=main",
                "git": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/0d5a690c8fad5e605a6e8766295d9d459d65de42",
                "html": "https://github.com/suisuyy/Github-API-Testing/blob/main/gnewfile"
            }
        },
        {
            "name": "hnewfile",
            "path": "hnewfile",
            "sha": "0d5a690c8fad5e605a6e8766295d9d459d65de42",
            "size": 20,
            "url": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/hnewfile?ref=main",
            "html_url": "https://github.com/suisuyy/Github-API-Testing/blob/main/hnewfile",
            "git_url": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/0d5a690c8fad5e605a6e8766295d9d459d65de42",
            "download_url": "https://raw.githubusercontent.com/suisuyy/Github-API-Testing/main/hnewfile",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/hnewfile?ref=main",
                "git": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/0d5a690c8fad5e605a6e8766295d9d459d65de42",
                "html": "https://github.com/suisuyy/Github-API-Testing/blob/main/hnewfile"
            }
        },
        {
            "name": "inewfile",
            "path": "inewfile",
            "sha": "0d5a690c8fad5e605a6e8766295d9d459d65de42",
            "size": 20,
            "url": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/inewfile?ref=main",
            "html_url": "https://github.com/suisuyy/Github-API-Testing/blob/main/inewfile",
            "git_url": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/0d5a690c8fad5e605a6e8766295d9d459d65de42",
            "download_url": "https://raw.githubusercontent.com/suisuyy/Github-API-Testing/main/inewfile",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/inewfile?ref=main",
                "git": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/0d5a690c8fad5e605a6e8766295d9d459d65de42",
                "html": "https://github.com/suisuyy/Github-API-Testing/blob/main/inewfile"
            }
        },
        {
            "name": "jnewfile",
            "path": "jnewfile",
            "sha": "0d5a690c8fad5e605a6e8766295d9d459d65de42",
            "size": 20,
            "url": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/jnewfile?ref=main",
            "html_url": "https://github.com/suisuyy/Github-API-Testing/blob/main/jnewfile",
            "git_url": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/0d5a690c8fad5e605a6e8766295d9d459d65de42",
            "download_url": "https://raw.githubusercontent.com/suisuyy/Github-API-Testing/main/jnewfile",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/jnewfile?ref=main",
                "git": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/0d5a690c8fad5e605a6e8766295d9d459d65de42",
                "html": "https://github.com/suisuyy/Github-API-Testing/blob/main/jnewfile"
            }
        },
        {
            "name": "knewfile",
            "path": "knewfile",
            "sha": "0d5a690c8fad5e605a6e8766295d9d459d65de42",
            "size": 20,
            "url": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/knewfile?ref=main",
            "html_url": "https://github.com/suisuyy/Github-API-Testing/blob/main/knewfile",
            "git_url": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/0d5a690c8fad5e605a6e8766295d9d459d65de42",
            "download_url": "https://raw.githubusercontent.com/suisuyy/Github-API-Testing/main/knewfile",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/knewfile?ref=main",
                "git": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/0d5a690c8fad5e605a6e8766295d9d459d65de42",
                "html": "https://github.com/suisuyy/Github-API-Testing/blob/main/knewfile"
            }
        },
        {
            "name": "lnewfile",
            "path": "lnewfile",
            "sha": "0d5a690c8fad5e605a6e8766295d9d459d65de42",
            "size": 20,
            "url": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/lnewfile?ref=main",
            "html_url": "https://github.com/suisuyy/Github-API-Testing/blob/main/lnewfile",
            "git_url": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/0d5a690c8fad5e605a6e8766295d9d459d65de42",
            "download_url": "https://raw.githubusercontent.com/suisuyy/Github-API-Testing/main/lnewfile",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/lnewfile?ref=main",
                "git": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/0d5a690c8fad5e605a6e8766295d9d459d65de42",
                "html": "https://github.com/suisuyy/Github-API-Testing/blob/main/lnewfile"
            }
        },
        {
            "name": "mnewfile",
            "path": "mnewfile",
            "sha": "0d5a690c8fad5e605a6e8766295d9d459d65de42",
            "size": 20,
            "url": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/mnewfile?ref=main",
            "html_url": "https://github.com/suisuyy/Github-API-Testing/blob/main/mnewfile",
            "git_url": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/0d5a690c8fad5e605a6e8766295d9d459d65de42",
            "download_url": "https://raw.githubusercontent.com/suisuyy/Github-API-Testing/main/mnewfile",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/mnewfile?ref=main",
                "git": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/0d5a690c8fad5e605a6e8766295d9d459d65de42",
                "html": "https://github.com/suisuyy/Github-API-Testing/blob/main/mnewfile"
            }
        },
        {
            "name": "newfile",
            "path": "newfile",
            "sha": "0d5a690c8fad5e605a6e8766295d9d459d65de42",
            "size": 20,
            "url": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/newfile?ref=main",
            "html_url": "https://github.com/suisuyy/Github-API-Testing/blob/main/newfile",
            "git_url": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/0d5a690c8fad5e605a6e8766295d9d459d65de42",
            "download_url": "https://raw.githubusercontent.com/suisuyy/Github-API-Testing/main/newfile",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/newfile?ref=main",
                "git": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/0d5a690c8fad5e605a6e8766295d9d459d65de42",
                "html": "https://github.com/suisuyy/Github-API-Testing/blob/main/newfile"
            }
        },
        {
            "name": "nnewfile",
            "path": "nnewfile",
            "sha": "0d5a690c8fad5e605a6e8766295d9d459d65de42",
            "size": 20,
            "url": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/nnewfile?ref=main",
            "html_url": "https://github.com/suisuyy/Github-API-Testing/blob/main/nnewfile",
            "git_url": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/0d5a690c8fad5e605a6e8766295d9d459d65de42",
            "download_url": "https://raw.githubusercontent.com/suisuyy/Github-API-Testing/main/nnewfile",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/nnewfile?ref=main",
                "git": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/0d5a690c8fad5e605a6e8766295d9d459d65de42",
                "html": "https://github.com/suisuyy/Github-API-Testing/blob/main/nnewfile"
            }
        },
        {
            "name": "onewfile",
            "path": "onewfile",
            "sha": "0d5a690c8fad5e605a6e8766295d9d459d65de42",
            "size": 20,
            "url": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/onewfile?ref=main",
            "html_url": "https://github.com/suisuyy/Github-API-Testing/blob/main/onewfile",
            "git_url": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/0d5a690c8fad5e605a6e8766295d9d459d65de42",
            "download_url": "https://raw.githubusercontent.com/suisuyy/Github-API-Testing/main/onewfile",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/onewfile?ref=main",
                "git": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/0d5a690c8fad5e605a6e8766295d9d459d65de42",
                "html": "https://github.com/suisuyy/Github-API-Testing/blob/main/onewfile"
            }
        },
        {
            "name": "test2",
            "path": "test2",
            "sha": "0d5a690c8fad5e605a6e8766295d9d459d65de42",
            "size": 20,
            "url": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/test2?ref=main",
            "html_url": "https://github.com/suisuyy/Github-API-Testing/blob/main/test2",
            "git_url": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/0d5a690c8fad5e605a6e8766295d9d459d65de42",
            "download_url": "https://raw.githubusercontent.com/suisuyy/Github-API-Testing/main/test2",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/test2?ref=main",
                "git": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/0d5a690c8fad5e605a6e8766295d9d459d65de42",
                "html": "https://github.com/suisuyy/Github-API-Testing/blob/main/test2"
            }
        },
        {
            "name": "test3",
            "path": "test3",
            "sha": "0d5a690c8fad5e605a6e8766295d9d459d65de42",
            "size": 20,
            "url": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/test3?ref=main",
            "html_url": "https://github.com/suisuyy/Github-API-Testing/blob/main/test3",
            "git_url": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/0d5a690c8fad5e605a6e8766295d9d459d65de42",
            "download_url": "https://raw.githubusercontent.com/suisuyy/Github-API-Testing/main/test3",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/test3?ref=main",
                "git": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/0d5a690c8fad5e605a6e8766295d9d459d65de42",
                "html": "https://github.com/suisuyy/Github-API-Testing/blob/main/test3"
            }
        },
        {
            "name": "test4",
            "path": "test4",
            "sha": "7284ab4d2836271d66b988ae7d037bd6ef0d5d15",
            "size": 4,
            "url": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/test4?ref=main",
            "html_url": "https://github.com/suisuyy/Github-API-Testing/blob/main/test4",
            "git_url": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/7284ab4d2836271d66b988ae7d037bd6ef0d5d15",
            "download_url": "https://raw.githubusercontent.com/suisuyy/Github-API-Testing/main/test4",
            "type": "file",
            "_links": {
                "self": "https://api.github.com/repos/suisuyy/Github-API-Testing/contents/test4?ref=main",
                "git": "https://api.github.com/repos/suisuyy/Github-API-Testing/git/blobs/7284ab4d2836271d66b988ae7d037bd6ef0d5d15",
                "html": "https://github.com/suisuyy/Github-API-Testing/blob/main/test4"
            }
        }
    ]
}



export default { ENV, B64STR, TESTDATA }