import fs from 'fs';
//import vueParser from 'vue-parser';
import { parse as HtmlParser } from 'node-html-parser';
//import { parse as VueParser } from '@vue/component-compiler-utils';
//import VueCompiler from 'vue-template-compiler';

import { $content } from '@nuxt/content';

export default function(static_pages, route, path, html) {
    const is_dynamic = static_pages.indexOf(route) === -1;
    if(is_dynamic) {
        updateHeadDynamic(route, path, html);
    } else {
        updateHeadStatic(route, path, html);
    }
}

function updateHeadStatic(route, path, html) {
    const filename = `./pages/${route}/index.vue`;
    const source = fs.readFileSync(filename);

    const cmp = HtmlParser(source);
    const script = cmp.querySelector('script').rawText;
    const parts = script.split("\n");
    let start = -1;
    let end = -1;

    for(let i=0; i<parts.length; i++) {
        let line = parts[i];
        if(line.indexOf('staticHead') !== -1) {
            start = i;
        } else if(line.indexOf('}') !== -1 && start > -1) {
            end = i;
            break;
        }
    }



    let staticHead = '{' + parts.slice(start, end).join('\n') + '}}';

    console.log('staticHead', staticHead);

    //let rootNode = HtmlParser(html);
    //let head = rootNode.querySelector('head');
    //let title = head.querySelector('title');

    //console.log('static route', route, cmp.staticHead.title);
}

function updateHeadDynamic(route, path, html) {
    //console.log('dynamic route', route);
}